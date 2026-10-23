import { renderToString } from "react-dom/server";
import { describe, expect, it } from "vitest";
import Portfolio from "@/app/page";

// Structure only: the page's own profile content is third-party personal data and is not asserted here.
describe("profile page", () => {
  const html = renderToString(<Portfolio />);

  it("renders every section heading", () => {
    for (const heading of ["Contact Information", "Professional Experience", "Education", "Professional Skills", "Let&#x27;s Connect"]) {
      expect(html).toContain(heading);
    }
  });

  it("renders the experience and skill lists, not empty sections", () => {
    expect(html.match(/<h3/g)?.length ?? 0).toBeGreaterThan(6);
  });

  it("routes contact through LinkedIn and publishes no mail or phone links", () => {
    expect(html).not.toMatch(/mailto:|tel:/);
    expect(html).toMatch(/href="https:\/\/linkedin\.com\/in\//);
    expect(html).toContain("Via LinkedIn message");
  });
});
