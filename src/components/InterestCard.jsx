export default function InterestCard({ bg, text }) {
  return (
    <div className="rounded-2xl p-5 text-white shadow-md" style={{ background: bg }}>
     <p className="font-semibold whitespace-pre-line">{text}</p>
    </div>
  );
}
