import * as React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="max-w-screen-xl py-4 mx-auto bg-background px-4 md:px-16 z-20">
      <div className="text-center sm:flex sm:justify-between sm:text-left">
        <p className="text-sm text-muted-foreground">
          <span className="block sm:inline">All rights reserved.</span>
        </p>

        <p className="mt-4 text-sm text-muted-foreground sm:order-first sm:mt-0">
          &copy; {currentYear} Zius
        </p>
      </div>
    </footer>
  );
};

Footer.displayName = "Footer";

export { Footer };
