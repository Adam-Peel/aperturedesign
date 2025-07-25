"use client";
import { useEffect } from "react";
import emailjs from "@emailjs/browser";

export function EmailJSInit() {
  useEffect(() => {
    emailjs.init({
      publicKey: process.env.NEXT_PUBLIC_EMAIL_KEY || "YOUR_PUBLIC_KEY",
    });
  }, []);

  return null; // no UI
}
