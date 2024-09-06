"use client";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

export const lenis = new Lenis({ smoothWheel: true, syncTouch: true, touchMultiplier: 1 });

function raf(time: number): void {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
