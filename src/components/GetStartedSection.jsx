// src/components/GetStartedSection.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function GetStartedSection() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen px-6 py-20 flex justify-center items-center bg-[#F5F7FB]">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* LEFT TEXT */}
        <div className="text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-textMain leading-tight tracking-tight">
            Talk about anything, <br /> anytime, anywhere
          </h1>

          <p className="mt-6 text-lightText text-lg leading-relaxed max-w-md">
            Speak Tutor is your on-the-go conversational partner.
            Practice speaking on any topic, anytime, no matter how niche.
          </p>
        </div>

        {/* RIGHT CARD */}
        <div className="bg-white p-8 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-cardBorder max-w-md w-full mx-auto transition hover:scale-[1.01]">

          <p className="text-center text-sm text-lightText mb-6 font-medium">
            Create your own
          </p>

          <div className="space-y-6 text-textMain text-[15px]">
            <div className="flex items-center gap-3 pb-4 border-b border-cardBorder hover:opacity-80 cursor-pointer transition">
              <span className="text-xl">👤</span>
              <p className="font-semibold">Tourist</p>
            </div>

            <div className="flex items-center gap-3 pb-4 border-b border-cardBorder hover:opacity-80 cursor-pointer transition">
              <span className="text-xl">🤝</span>
              <p className="font-semibold">New friend</p>
            </div>

            <div className="flex items-start gap-3 hover:opacity-80 cursor-pointer transition">
              <span className="text-xl">🖼️</span>
              <p className="font-semibold leading-snug">
                Talking about the best places to grab dinner in San Francisco.
              </p>
            </div>
          </div>

          {/* CTA BUTTON - navigates to /chat */}
          <button
            onClick={() => navigate("/chat")}
            className="w-full py-3 mt-8 text-white font-semibold rounded-full bg-primary hover:bg-[#224DE6] shadow-md transition"
          >
            Start chatting
          </button>

        </div>
      </div>
    </section>
  );
}
