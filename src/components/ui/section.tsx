import * as React from "react";

import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";

const sectionVariants = cva("items-center flex justify-center w-full", {
  variants: {
    variant: {
      default: "bg-background",
      primary: "bg-primary",
    },
    size: {
      default: "md:min-h-lg min-h-80",
      sm: "md:min-h-96 min-h-80",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

const sectionContentVariants = cva(
  "max-w-screen-xl items-center w-full text-primary-foreground px-4 py-16 md:px-16 md:py-16",
  {
    variants: {
      approach: {
        horizontal:
          "flex flex-col justify-center md:flex-row md:justify-evenly",
        horizontalReverse:
          "flex flex-col justify-center md:flex-row md:justify-evenly md:flex-row-reverse",
        middle: "flex justify-center flex-col",
        vertical: "flex flex-col items-baseline",
      },
    },
    defaultVariants: {
      approach: "vertical",
    },
  }
);

export interface SectionProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sectionVariants>,
    VariantProps<typeof sectionContentVariants> {
  asChild?: boolean;
}

const Section = React.forwardRef<HTMLDivElement, SectionProps>(
  ({ className, variant, size, approach, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";
    return (
      <div
        className={cn(
          sectionVariants({
            variant,
            size,
            className,
          })
        )}
      >
        <Comp
          className={cn(
            sectionContentVariants({
              approach,
              className,
            })
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);

Section.displayName = "Section";

export { Section };
