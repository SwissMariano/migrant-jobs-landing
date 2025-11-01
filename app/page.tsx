import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Header />

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 py-8 sm:py-12 md:py-16 grid gap-6 md:gap-8 md:grid-cols-2 items-center">
        <div className="order-2 md:order-1">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Jobs for migrants, faster.
          </h1>
          <p className="mt-4 text-base sm:text-lg">
            We connect migrants with fair, verified jobs and community support in your area.
          </p>
          <a
            href="#waitlist"
            className="inline-block mt-6 rounded bg-black text-white px-6 py-3 text-sm sm:text-base font-medium focus:outline-none focus:ring"
          >
            Get early access
          </a>
          <p className="mt-3 text-xs sm:text-sm text-gray-600">
            Free to join. We'll email you when we launch.
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
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16 grid gap-6 sm:gap-8 md:grid-cols-3">
          {[
            { title: "Create your profile", desc: "Tell us your skills, languages, and availability." },
            { title: "Get matched", desc: "We connect you with verified employers and NGOs." },
            { title: "Start working", desc: "Interviews, onboarding, and support along the way." },
          ].map((item) => (
            <div key={item.title} className="rounded-lg border bg-white p-6">
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="mt-2 text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EMPLOYERS */}
      <section id="for-employers" className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <h2 className="text-xl sm:text-2xl font-bold">For employers & NGOs</h2>
        <p className="mt-2 text-sm sm:text-base text-gray-700">
          Access a screened talent pool, language support, and simple posting tools.
        </p>
        <a href="#waitlist" className="mt-4 inline-block rounded border px-4 py-2 text-sm sm:text-base focus:outline-none focus:ring">
          Join partner list
        </a>
      </section>

      {/* WAITLIST FORM */}
      <section id="waitlist" className="bg-gray-50">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
          <h2 className="text-xl sm:text-2xl font-bold">Join the waitlist</h2>
          <p className="mt-2 text-sm sm:text-base text-gray-700">We'll notify you when we launch in your city.</p>
          <form
            action="https://formspree.io/f/YOUR_FORM_ID"  // ← remplace par ton endpoint Formspree
            method="POST"
            className="mt-6 grid gap-4"
          >
            <label className="grid gap-1">
              <span className="text-sm font-medium">Name</span>
              <input required name="name" className="rounded border p-3 focus:outline-none focus:ring" />
            </label>
            <label className="grid gap-1">
              <span className="text-sm font-medium">Email</span>
              <input required name="email" type="email" className="rounded border p-3 focus:outline-none focus:ring" />
            </label>
            <label className="grid gap-1">
              <span className="text-sm font-medium">Preferred language</span>
              <select name="language" className="rounded border p-3 focus:outline-none focus:ring">
                <option>English</option>
                <option>Deutsch</option>
                <option>Français</option>
                <option>العربية</option>
              </select>
            </label>
            <label className="inline-flex items-center gap-2">
              <input type="checkbox" name="whatsapp_opt_in" className="h-4 w-4" />
              <span className="text-sm">Contact me via WhatsApp</span>
            </label>
            <button type="submit" className="rounded bg-black text-white px-6 py-3 font-medium focus:outline-none focus:ring">
              Join
            </button>
            <p className="text-xs text-gray-600">
              We respect your privacy. Your data will be stored securely and can be deleted on request.
            </p>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mx-auto max-w-6xl px-4 py-10 text-sm text-gray-600">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p>© {new Date().getFullYear()} Dana Rey</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:underline focus:outline-none focus:ring">Privacy</Link>
            <Link href="/terms" className="hover:underline focus:outline-none focus:ring">Terms</Link>
            <a href="mailto:hello@example.com" className="hover:underline focus:outline-none focus:ring">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
