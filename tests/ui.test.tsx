import { renderToString } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge, badgeVariants } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

describe("UI primitives", () => {
  it("Badge renders a span with the chosen variant and a caller class", () => {
    const html = renderToString(<Badge variant="outline" className="extra">Fixture tag</Badge>);
    expect(html).toMatch(/^<span[^>]*data-slot="badge"/);
    expect(html).toContain("text-foreground");
    expect(html).toContain("extra");
    expect(html).toContain("Fixture tag");
  });

  it("Badge with asChild renders the child element instead of a span", () => {
    const html = renderToString(
      <Badge asChild>
        <a href="#fixture">Link tag</a>
      </Badge>,
    );
    expect(html).toMatch(/^<a[^>]*href="#fixture"/);
    expect(html).toContain('data-slot="badge"');
  });

  it("Button maps variant and size to classes, and a caller class overrides padding", () => {
    expect(buttonVariants({ variant: "ghost", size: "sm" })).toContain("h-8");
    const html = renderToString(
      <Button size="lg" className="px-10" disabled>
        Send
      </Button>,
    );
    expect(html).toMatch(/^<button[^>]*disabled/);
    expect(html).toContain("px-10");
    expect(html).not.toContain(" px-6 ");
  });

  it("badgeVariants falls back to the default variant", () => {
    expect(badgeVariants()).toContain("bg-primary");
  });

  it("Card parts render with their slots and content", () => {
    const html = renderToString(
      <Card>
        <CardHeader>
          <CardTitle>Fixture title</CardTitle>
          <CardDescription>Fixture description</CardDescription>
        </CardHeader>
        <CardContent>Body</CardContent>
      </Card>,
    );
    for (const slot of ["card", "card-header", "card-title", "card-description", "card-content"]) {
      expect(html).toContain(`data-slot="${slot}"`);
    }
    expect(html).toContain("Fixture title");
  });

  it("Separator is decorative and horizontal by default", () => {
    const html = renderToString(<Separator />);
    expect(html).toContain('data-orientation="horizontal"');
    expect(html).toContain('role="none"');
  });

  it("Avatar renders its fallback on the server, before any image has loaded", () => {
    const html = renderToString(
      <Avatar className="size-8">
        <AvatarImage src="/fixture.png" alt="" />
        <AvatarFallback>FX</AvatarFallback>
      </Avatar>,
    );
    expect(html).toContain('data-slot="avatar"');
    expect(html).toContain("size-8");
    expect(html).toContain("FX");
  });
});
