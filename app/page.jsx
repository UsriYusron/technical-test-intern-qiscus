import Image from "next/image";

import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />

      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black sm:items-start">

        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left mb-5">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Technical Test Web Developer Intern at Qiscus.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Halaman ini dibuat menggunakan framework Next.js dengan Javascript untuk keperluan technical test point ke-{""}
            <a
              href="https://drive.google.com/file/d/1eKr8kV5EhSJD7IH6viRQaT5U9lJnz0fb/view"
              target="_blank"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              3
            </a>{""}
            ,{" "}
            <a
              href="https://drive.google.com/file/d/1eKr8kV5EhSJD7IH6viRQaT5U9lJnz0fb/view"
              target="_blank"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              4
            </a>{" "}
            dan{" "}
            <a
              href="https://drive.google.com/file/d/1eKr8kV5EhSJD7IH6viRQaT5U9lJnz0fb/view"
              target="_blank"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              5
            </a>{""}.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
