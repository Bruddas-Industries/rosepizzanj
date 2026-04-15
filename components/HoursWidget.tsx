"use client";

import { useState, useEffect } from "react";
import { RESTAURANT } from "@/lib/restaurant";

function getOpenStatus(): { open: boolean; label: string } {
  const now = new Date();
  const day = now
    .toLocaleDateString("en-US", { weekday: "long" })
    .toLowerCase();
  const todayHours = RESTAURANT.hours[day];

  if (!todayHours || todayHours.closed) {
    return { open: false, label: "Closed today" };
  }

  const [openH, openM] = todayHours.open.split(":").map(Number);
  const [closeH, closeM] = todayHours.close.split(":").map(Number);
  const current = now.getHours() * 60 + now.getMinutes();
  const openMin = openH * 60 + openM;
  const closeMin = closeH * 60 + closeM;

  const fmt = (h: number, m: number) => {
    const period = h >= 12 ? "PM" : "AM";
    const displayH = h > 12 ? h - 12 : h === 0 ? 12 : h;
    return `${displayH}:${String(m).padStart(2, "0")} ${period}`;
  };

  if (current < openMin) {
    return { open: false, label: `Opens at ${fmt(openH, openM)}` };
  }
  if (current >= closeMin) {
    return { open: false, label: "Closed for today" };
  }
  return { open: true, label: `Open until ${fmt(closeH, closeM)}` };
}

export default function HoursWidget({ className = "" }: { className?: string }) {
  const [status, setStatus] = useState<{ open: boolean; label: string } | null>(
    null
  );

  useEffect(() => {
    setStatus(getOpenStatus());
    // Refresh every minute
    const id = setInterval(() => setStatus(getOpenStatus()), 60_000);
    return () => clearInterval(id);
  }, []);

  if (!status) return null;

  return (
    <span
      className={`inline-flex items-center gap-1.5 text-sm font-medium ${className}`}
    >
      <span
        className={`w-2 h-2 rounded-full ${
          status.open ? "bg-green-500" : "bg-red-400"
        }`}
      />
      <span className={status.open ? "text-green-700" : "text-red-600"}>
        {status.label}
      </span>
    </span>
  );
}
