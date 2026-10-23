import { describe, expect, it } from "vitest";
import { cn } from "@/lib/utils";

describe("cn", () => {
  it("joins class names and drops falsy values", () => {
    expect(cn("a", false, undefined, null, "b", 0 && "c")).toBe("a b");
  });

  it("lets a later Tailwind utility win over a conflicting earlier one", () => {
    expect(cn("px-2 py-1", "px-4")).toBe("py-1 px-4");
    expect(cn("text-sm", { "text-lg": true })).toBe("text-lg");
  });

  it("keeps non-conflicting utilities from both sides", () => {
    expect(cn("bg-white", ["rounded", { hidden: false }])).toBe("bg-white rounded");
  });
});
