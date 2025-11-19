"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Guard: only run in browser
    if (typeof window === "undefined" || typeof document === "undefined") return;

    let lenis: Lenis | null = null;
    let rafId: number | null = null;
    let initialized = false;

    // Initialize Lenis after the next tick to avoid interfering with React hydration
    // and allow React to attach event handlers first.
    const init = () => {
      try {
        // Prevent double-init if effect runs twice in StrictMode
        if (initialized) return;
        initialized = true;

        lenis = new Lenis({
          duration: 1.2,
        });

        const loop = (time: number) => {
          // lenis may have been destroyed between frames
          if (!lenis) return;
          lenis.raf(time);
          rafId = requestAnimationFrame(loop);
        };

        // Start RAF loop
        rafId = requestAnimationFrame(loop);
      } catch (err) {
        // If Lenis fails to initialize, don't block the app.
        // Log in dev only.
        // eslint-disable-next-line no-console
        console.warn("Lenis initialization failed:", err);
      }
    };

    // Defer initialization until after the browser has painted and React has hydrated.
    // Using setTimeout(..., 0) is a safe, cross-environment way to let hydration finish.
    const initTimer = window.setTimeout(init, 0);

    return () => {
      // Clear the deferred init if unmounted early
      clearTimeout(initTimer);

      // Cancel RAF loop
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }

      // Destroy Lenis instance if created
      if (lenis) {
        try {
          lenis.destroy();
        } catch (err) {
          // swallow errors during cleanup
        }
        lenis = null;
      }
    };
  }, []);

  return <>{children}</>;
}
