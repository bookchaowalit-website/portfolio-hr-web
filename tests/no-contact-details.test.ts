import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import { findContacts, scanRepo } from "./contact-scan";

const ROOT = fileURLToPath(new URL("..", import.meta.url));

describe("contact-detail scanner", () => {
  it("finds Thai and international phone numbers and email addresses in fixture text", () => {
    const fixture = "call 081-234-5678 or 0812345678 or 02 123 4567 or +66 81 234 5678 or +1 (415) 555-0100, mail jane.doe@mail.test";
    expect(findContacts(fixture)).toEqual({ emails: 1, phones: 5 });
  });

  it("ignores counts, years and allow-listed generic addresses", () => {
    expect(findContacts("1,879 followers, 500+ connections, since 2023, GPA 3.34, Oct 2023 - Present")).toEqual({ emails: 0, phones: 0 });
    expect(findContacts("https://linkedin.com/in/some-name-01234567a and id abc-0812345678")).toEqual({ emails: 0, phones: 0 });
    expect(findContacts("hello@example.com noreply@anthropic.com 1+bot@users.noreply.github.com")).toEqual({ emails: 0, phones: 0 });
  });
});

describe("shipped content", () => {
  it("contains no third-party phone numbers or email addresses", () => {
    // Only file names and counts are reported, never the values.
    expect(scanRepo(ROOT)).toEqual([]);
  });
});
