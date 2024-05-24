import * as React from "react";

import { Github, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="sticky top-0 flex h-16 items-center md:justify-center gap-4 border-b bg-background z-20 w-full px-4">
      <nav className="max-w-screen-xl hidden flex-col text-lg font-medium md:flex md:flex-row md:items-center md:text-sm md:justify-between px-4 w-full md:px-16">
        <Image
          src="/zius.png"
          width={35}
          height={35}
          alt="Zius logo"
          priority
        />
        <div className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            href="#about"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            About
          </Link>
          <Link
            href="#getting-started"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Getting Started
          </Link>
          <Link
            href="#validations"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Validations
          </Link>
          <Link
            href="#errors-message"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Errors Message
          </Link>
          <Link
            href="#examples"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Examples
          </Link>
        </div>
        <div>
          <Button variant={"outline"} className="gap-1" asChild>
            <Link href={"https://github.com/vinibgoulart/zius"} target="_blank">
              <Github className="h-3 w-3" />
              Github
            </Link>
          </Button>
        </div>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Image
              src="/zius.png"
              width={35}
              height={35}
              alt="Zius logo"
              priority
            />
            <Link
              href="#about"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              About
            </Link>
            <Link
              href="#getting-started"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Getting Started
            </Link>
            <Link
              href="#validations"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Validations
            </Link>
            <Link
              href="#errors-message"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Errors Message
            </Link>
            <Link
              href="#examples"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Examples
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
};

Header.displayName = "Header";

export { Header };
