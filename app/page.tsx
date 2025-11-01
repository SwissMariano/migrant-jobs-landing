"use client";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const { t } = useLanguage();
  
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Header />

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 py-8 sm:py-12 md:py-16 grid gap-6 md:gap-8 md:grid-cols-2 items-center">
        <div className="order-2 md:order-1">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            {t("hero.title")}
          </h1>
          <p className="mt-4 text-base sm:text-lg">
            {t("hero.description")}
          </p>
          <a
            href="#waitlist"
            className="inline-block mt-6 rounded bg-black text-white px-6 py-3 text-sm sm:text-base font-medium focus:outline-none focus:ring"
          >
            {t("hero.cta")}
          </a>
          <p className="mt-3 text-xs sm:text-sm text-gray-600">
            {t("hero.ctaSubtext")}
          </p>
        </div>

        {/* ← Ici on affiche la photo (public/hero.jpg) */}
        <div className="rounded-lg overflow-hidden border order-1 md:order-2">
          <Image
            src="/hero.jpg.jpeg"
            alt="Founder smiling at sunset"
            width={1200}
            height={800}
            priority
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
          <h2 className="text-2xl font-bold mb-8 text-center">{t("howItWorks.title")}</h2>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
            {[
              { titleKey: "howItWorks.step1.title", descKey: "howItWorks.step1.description" },
              { titleKey: "howItWorks.step2.title", descKey: "howItWorks.step2.description" },
              { titleKey: "howItWorks.step3.title", descKey: "howItWorks.step3.description" },
            ].map((item, index) => (
              <div key={index} className="rounded-lg border bg-white p-6">
                <h3 className="font-semibold text-lg">{t(item.titleKey)}</h3>
                <p className="mt-2 text-gray-700">{t(item.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EMPLOYERS */}
      <section id="for-employers" className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <h2 className="text-xl sm:text-2xl font-bold">{t("employers.title")}</h2>
        <p className="mt-2 text-sm sm:text-base text-gray-700">
          {t("employers.description")}
        </p>
        <a href="#waitlist" className="mt-4 inline-block rounded border px-4 py-2 text-sm sm:text-base focus:outline-none focus:ring">
          {t("employers.cta")}
        </a>
      </section>

      {/* WAITLIST FORM */}
      <section id="waitlist" className="bg-gray-50">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
          <h2 className="text-xl sm:text-2xl font-bold">{t("waitlist.title")}</h2>
          <p className="mt-2 text-sm sm:text-base text-gray-700">{t("waitlist.description")}</p>
          <form
            action="https://formspree.io/f/YOUR_FORM_ID"  // ← remplace par ton endpoint Formspree
            method="POST"
            className="mt-6 grid gap-4"
          >
            <label className="grid gap-1">
              <span className="text-sm font-medium">{t("waitlist.name")}</span>
              <input required name="name" className="rounded border p-3 focus:outline-none focus:ring" />
            </label>
            <label className="grid gap-1">
              <span className="text-sm font-medium">{t("waitlist.email")}</span>
              <input required name="email" type="email" className="rounded border p-3 focus:outline-none focus:ring" />
            </label>
            <label className="grid gap-1">
              <span className="text-sm font-medium">{t("waitlist.language")}</span>
              <select name="language" className="rounded border p-3 focus:outline-none focus:ring">
                <option>English</option>
                <option>Deutsch</option>
                <option>Français</option>
                <option>العربية</option>
              </select>
            </label>
            <label className="inline-flex items-center gap-2">
              <input type="checkbox" name="whatsapp_opt_in" className="h-4 w-4" />
              <span className="text-sm">{t("waitlist.whatsapp")}</span>
            </label>
            <button type="submit" className="rounded bg-black text-white px-6 py-3 font-medium focus:outline-none focus:ring">
              {t("waitlist.submit")}
            </button>
            <p className="text-xs text-gray-600">
              {t("waitlist.privacy")}
            </p>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mx-auto max-w-6xl px-4 py-10 text-sm text-gray-600">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p>{t("footer.copyright", { year: new Date().getFullYear().toString() })}</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:underline focus:outline-none focus:ring">{t("footer.privacy")}</Link>
            <Link href="/terms" className="hover:underline focus:outline-none focus:ring">{t("footer.terms")}</Link>
            <a href="mailto:hello@example.com" className="hover:underline focus:outline-none focus:ring">{t("footer.contact")}</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
