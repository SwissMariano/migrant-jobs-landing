"use client";
import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="mx-auto max-w-6xl px-4 py-4 sm:py-6">
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 focus:outline-none focus:ring">
          <img src="/publiclogo.svg.png" alt="Dana Rey logo" className="h-8 w-8 sm:h-10 sm:w-10" />
          <span className="font-semibold text-base sm:text-lg">Dana Rey</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-6">
          <a href="#how" className="text-sm lg:text-base hover:underline focus:outline-none focus:ring">{t("header.howItWorks")}</a>
          <a href="#for-employers" className="text-sm lg:text-base hover:underline focus:outline-none focus:ring">{t("header.forEmployers")}</a>
          <a href="#faq" className="text-sm lg:text-base hover:underline focus:outline-none focus:ring">{t("header.faq")}</a>
          <a href="/privacy" className="text-sm lg:text-base hover:underline focus:outline-none focus:ring">{t("header.privacy")}</a>
          <LanguageSwitcher />
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 focus:outline-none focus:ring"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden mt-4 pb-4 border-t pt-4 flex flex-col gap-3">
          <a
            href="#how"
            onClick={() => setIsMenuOpen(false)}
            className="text-base py-2 hover:underline focus:outline-none focus:ring"
          >
            {t("header.howItWorks")}
          </a>
          <a
            href="#for-employers"
            onClick={() => setIsMenuOpen(false)}
            className="text-base py-2 hover:underline focus:outline-none focus:ring"
          >
            {t("header.forEmployers")}
          </a>
          <a
            href="#faq"
            onClick={() => setIsMenuOpen(false)}
            className="text-base py-2 hover:underline focus:outline-none focus:ring"
          >
            {t("header.faq")}
          </a>
          <a
            href="/privacy"
            onClick={() => setIsMenuOpen(false)}
            className="text-base py-2 hover:underline focus:outline-none focus:ring"
          >
            {t("header.privacy")}
          </a>
          <div className="pt-2">
            <LanguageSwitcher />
          </div>
        </nav>
      )}
    </header>
  );
}
