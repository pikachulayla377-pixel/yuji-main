import React from "react";

export default function BlueBuffCoreLoader() {
  return (
    <div
      className="
        fixed inset-0 z-50 flex items-center justify-center
        bg-[var(--background)]
      "
    >
      <div className="relative w-36 h-36">

        {/* ================= OUTER RING ================= */}
        <div
          className="
            absolute inset-0 rounded-full
            border-4 border-transparent
            animate-spin
          "
          style={{
            borderTopColor: "var(--accent)",
            borderRightColor: "#22d3ee",
            animationDuration: "3s",
          }}
        />

        {/* ================= SEGMENT RING ================= */}
        <div
          className="
            absolute inset-3 rounded-full
            border-2 border-dashed
            opacity-70 animate-spin
          "
          style={{
            borderColor: "var(--accent)",
            animationDuration: "6s",
            animationDirection: "reverse",
          }}
        />

        {/* ================= ENERGY SCAN ================= */}
        <div className="absolute inset-6 overflow-hidden rounded-full">
          <div
            className="absolute inset-0 animate-pulse"
            style={{
              background:
                "linear-gradient(180deg, transparent, var(--accent), transparent)",
              opacity: 0.5,
            }}
          />
        </div>

        {/* ================= CORE ================= */}
        <div className="absolute inset-10 flex items-center justify-center">
          {/* Glow */}
          <div
            className="
              absolute inset-0 rounded-full blur-xl opacity-70 animate-pulse
            "
            style={{
              background:
                "radial-gradient(circle, var(--accent), transparent 70%)",
            }}
          />

          {/* Core */}
          <div
            className="
              relative w-16 h-16 rounded-full
              flex items-center justify-center
              shadow-2xl
            "
            style={{
              background:
                "linear-gradient(135deg, var(--accent), #22d3ee)",
            }}
          >
            <span
              className="text-xl font-extrabold tracking-tight"
              style={{
                color: "var(--foreground)",
                textShadow: "0 2px 12px rgba(0,0,0,.6)",
              }}
            >
              yJ
            </span>
          </div>
        </div>

        {/* ================= ORBIT DOTS ================= */}
        {[0, 120, 240].map((deg, i) => (
          <div
            key={i}
            className="absolute inset-0 animate-spin"
            style={{
              animationDuration: `${2.5 + i}s`,
            }}
          >
            <div
              className="absolute w-2 h-2 rounded-full"
              style={{
                top: "50%",
                left: "50%",
                transform: `rotate(${deg}deg) translateX(58px) translateY(-50%)`,
                background: "var(--accent)",
                boxShadow: "0 0 10px var(--accent)",
              }}
            />
          </div>
        ))}
      </div>

      {/* ================= LOADING TEXT ================= */}
      <div className="absolute bottom-24 text-center">
        <p className="text-sm tracking-wide text-[var(--muted)]">
          Charging Blue Buff
        </p>
        <p className="text-xs opacity-60 mt-1">Please wait…</p>
      </div>
    </div>
  );
}
