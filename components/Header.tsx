"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="mx-auto max-w-6xl px-4 py-6 flex items-center justify-between">
      <Link href="/" className="flex items-center gap-2 focus:outline-none focus:ring">
        <img src="/publiclogo.svg.png" alt="Dana Rey logo" className="h-10 w-10" />
        <span className="font-semibold text-lg">Dana Rey</span>
      </Link>
      <nav className="flex items-center gap-4">
        <a href="#how" className="hover:underline focus:outline-none focus:ring">How it works</a>
        <a href="#for-employers" className="hover:underline focus:outline-none focus:ring">For employers</a>
        <a href="#faq" className="hover:underline focus:outline-none focus:ring">FAQ</a>
        <a href="/privacy" className="hover:underline focus:outline-none focus:ring">Privacy</a>
      </nav>
    </header>
  );
}
