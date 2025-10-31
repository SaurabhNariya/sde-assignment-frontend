// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import SectionWrapper from "./components/SectionWrapper";
import GetStartedSection from "./components/GetStartedSection"; // agar named alag ho to file name adjust karo
import RelationshipSection from "./components/RelationshipSection";
import TestimonialSection from "./components/TestimonialSection";
import ChatPage from "./pages/ChatPage"; // new chat page (step 3 created earlier)

export default function App() {
  return (
    <Routes>
      {/* Home (single-page scroll layout) */}
      <Route
        path="/"
        element={
          <div className="w-full scroll-smooth">
            <section id="top" className="min-h-screen flex justify-center items-center p-6">
              <SectionWrapper />
            </section>

            <section id="get-started">
              <GetStartedSection />
            </section>

            <RelationshipSection />

            <TestimonialSection />
          </div>
        }
      />

      {/* Chat page */}
      <Route path="/chat" element={<ChatPage />} />
    </Routes>
  );
}
