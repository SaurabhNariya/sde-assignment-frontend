export default function CTAButton({ label }) {
  const scrollToSection = () => {
    document.getElementById("get-started").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToSection}
      className="w-full py-3 text-white rounded-full font-semibold shadow-lg hover:scale-[1.01] transition"
      style={{ background: "linear-gradient(180deg,#2D5BFF,#274CF0)" }}
    >
      {label}
    </button>
  );
}
