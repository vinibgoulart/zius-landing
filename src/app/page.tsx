"use client";

import { ErrorsMessage } from "@/components/pages/errors-message";
import { Examples } from "@/components/pages/examples";
import { GettingStarted } from "@/components/pages/getting-started";
import { HandleErrors } from "@/components/pages/handle-errors";
import { Validations } from "@/components/pages/validations";
import { Particles } from "@/components/particles";
import { Section } from "@/components/ui/section";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Particles />
      <Section id="about" approach={"horizontal"}>
        <div className="space-y-3">
          <p className="text-lg">
            The fastest way to validate your Golang schemas
          </p>
          <h1 className="text-7xl font-bold">
            <span className="gradient-primary-to-tertiary">Zius</span> Schema
            Validator
          </h1>
          <p className="text-base text-muted-foreground">
            With custom messages and custom validation
          </p>
        </div>
        <div className="hidden h-full content-center md:block">
          <Image src="/zius.png" width={300} height={300} alt="Zius" priority />
        </div>
      </Section>
      <Section id="getting-started" className="gap-10 w-full z-10">
        <GettingStarted />
      </Section>
      <Section id="validations" className="gap-10 w-full z-10">
        <Validations />
      </Section>
      <Section
        id="errors-message"
        approach={"horizontalReverse"}
        className="gap-10"
      >
        <ErrorsMessage />
      </Section>
      <Section className="gap-10 w-full z-10">
        <HandleErrors />
      </Section>
      <Section id="examples" className="gap-10 w-full z-10" size={"sm"}>
        <Examples />
      </Section>
    </main>
  );
}
