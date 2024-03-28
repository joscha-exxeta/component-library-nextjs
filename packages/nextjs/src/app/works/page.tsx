"use client";

import { PopoverDemoClient } from "@/components/use-client-wrapper";
import { displayText } from "component-library";
import Link from "next/link";

export default function Home() {
  const text = displayText();

  return (
    <main className="p-24 flex flex-col items-center">
      <Link href={"/"} className="underline mb-4">
        Back
      </Link>
      <section className="flex-grow w-full bg-slate-200 p-12 mb-4">
        <h2 className="font-bold text-xl mb-4">
          This is a client component imported from component library
        </h2>
        <PopoverDemoClient />
      </section>
      <section className="flex-grow w-full bg-slate-200 p-12">
        <h2 className="font-bold text-xl mb-4">
          This is a function imported from component library
        </h2>
        {text}
      </section>
    </main>
  );
}
