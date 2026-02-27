"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import CardCode from "../../components/CardCode";

export default function PayloadPage() {
  return (
    <main className="min-h-screen">
  <Navbar />

  {/* Container */}
  <div className="flex flex-col md:flex-row min-h-screen">
    
    {/* KIRI */}
    <section className="flex w-full md:w-1/2 flex-col justify-center bg-white dark:bg-black px-6 py-36 md:px-16 md:py-32">
      
      <div className="flex flex-col items-center md:items-start gap-6 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-semibold leading-tight tracking-tight text-black dark:text-zinc-50">
          Halaman untuk jawaban pada point ke-4.
        </h1>

        <p className="text-base md:text-lg leading-7 text-zinc-600 dark:text-zinc-400 max-w-md">
          Extend the JSON format (payload) to display other message types
          containing images, videos, or PDFs. Upload or attach the .json
          file as part of your answer.
        </p>
      </div>

      <div className="mt-8 flex flex-col sm:flex-row gap-4 font-medium">
        <a
          href="payload.json"
          download="NewPayload.json"
          className="flex h-12 items-center justify-center gap-2 rounded-full bg-foreground px-6 text-background hover:bg-[#383838] dark:hover:bg-[#ccc]"
        >
          <Image
            className="dark:invert"
            src="/vercel.svg"
            alt="Vercel logomark"
            width={16}
            height={16}
          />
          See a File
        </a>
      </div>
    </section>

    {/* KANAN */}
    <section className="flex w-full md:w-1/2 items-center justify-center bg-white dark:bg-black px-6 py-16 md:px-16 md:py-32">
      <CardCode />
    </section>

  </div>
</main>
  );
}
