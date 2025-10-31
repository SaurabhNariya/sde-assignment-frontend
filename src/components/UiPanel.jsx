import { useState } from "react";
import InterestCard from "./InterestCard";
import CTAButton from "./CTAButton";
import Modal from "./Modal";

export default function UiPanel() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bg-white rounded-3xl p-4 md:p-6 shadow-xl w-full max-w-sm mx-auto">
        <div className="grid grid-cols-2 gap-4">
          <InterestCard
            bg="#D85B6A"
            text={
              "You're interested\nin traveling, and\nexploring new\ncultures."
            }
          />
          <InterestCard
            bg="#2D5BFF"
            text={
              "We've created\nunique lessons\nand conversations\nbased on your goals."
            }
          />
        </div>

        <div className="mt-6">
          <CTAButton label="Get Started" onClick={() => setOpen(true)} />
        </div>
      </div>

      <Modal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
