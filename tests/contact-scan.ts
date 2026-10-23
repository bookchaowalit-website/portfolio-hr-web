// Finds phone numbers and email addresses in the files this repository ships or publishes.
// Reports only counts and file names, never the values.
import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";

export const EMAIL = /[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}/g;
// Thai numbers (0X-XXX-XXXX, 0XXXXXXXXX, 02-XXX-XXXX) and international +CC numbers, with optional separators.
// Digits inside a word or URL slug (e.g. a profile id) are not phone numbers.
export const PHONE = /(?<![\w/.,-])(?:\+\d{1,3}[\s.-]?\(?\d{1,4}\)?(?:[\s.-]?\d{2,4}){2,4}|0\d{1,2}[\s.-]?\d{3}[\s.-]?\d{3,4})(?![\w.])/g;

// Owner-approved generic addresses (none are personal).
export const ALLOWED_EMAILS = new Set(["noreply@anthropic.com"]);
const ALLOWED_EMAIL_DOMAINS = ["example.com", "example.org", "users.noreply.github.com"];

const SKIP = [/^package-lock\.json$/, /\.(png|jpe?g|webp|gif|ico|svg|woff2?)$/, /^tests\//, /^LICENSE$/];

export function shippedFiles(root: string): string[] {
  return execFileSync("git", ["ls-files"], { cwd: root, encoding: "utf8" })
    .split("\n")
    .filter((file) => file && !SKIP.some((pattern) => pattern.test(file)));
}

export function findContacts(text: string) {
  const emails = (text.match(EMAIL) ?? []).filter(
    (email) => !ALLOWED_EMAILS.has(email.toLowerCase()) && !ALLOWED_EMAIL_DOMAINS.some((d) => email.toLowerCase().endsWith("@" + d)),
  );
  const phones = text.match(PHONE) ?? [];
  return { emails: emails.length, phones: phones.length };
}

export function scanRepo(root: string) {
  const hits: { file: string; emails: number; phones: number }[] = [];
  for (const file of shippedFiles(root)) {
    const counts = findContacts(readFileSync(`${root}/${file}`, "utf8"));
    if (counts.emails || counts.phones) hits.push({ file, ...counts });
  }
  return hits;
}
