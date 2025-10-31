import HeadingBlock from "./HeadingBlock";
import UiPanel from "./UiPanel";

export default function SectionWrapper() {
  return (
    <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 max-w-6xl w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
        <HeadingBlock />
        <UiPanel />
      </div>
    </div>
  );
}
