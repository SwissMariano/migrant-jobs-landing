"use client";
import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const { t } = useLanguage();
  
  useEffect(() => {
    // Only check localStorage on the client side
    if (typeof window !== "undefined") {
      const consent = localStorage.getItem("cookie-consent");
      if (!consent) {
        setVisible(true);
      }
    }
  }, []);
  
  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 max-w-xl rounded border bg-white p-4 shadow">
      <p className="text-sm text-gray-800">
        {t("cookieBanner.message")}
      </p>
      <div className="mt-3 flex gap-2">
        <button
          className="rounded bg-black px-4 py-2 text-sm text-white focus:outline-none focus:ring"
          onClick={() => {
            if (typeof window !== "undefined") {
              localStorage.setItem("cookie-consent", "accepted");
            }
            setVisible(false);
          }}
        >
          {t("cookieBanner.accept")}
        </button>
        <button
          className="rounded border px-4 py-2 text-sm focus:outline-none focus:ring"
          onClick={() => {
            if (typeof window !== "undefined") {
              localStorage.setItem("cookie-consent", "declined");
            }
            setVisible(false);
          }}
        >
          {t("cookieBanner.decline")}
        </button>
      </div>
    </div>
  );
}
