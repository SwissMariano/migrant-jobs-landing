"use client";
import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  
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
        We use basic analytics to improve this site. By clicking “Accept”, you agree to storing a cookie for analytics.
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
          Accept
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
          Decline
        </button>
      </div>
    </div>
  );
}
