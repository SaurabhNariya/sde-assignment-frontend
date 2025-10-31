export default function RelationshipSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT TEXT */}
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-textMain leading-tight">
            Build a relationship <br /> with your tutor
          </h2>

          <p className="mt-6 text-lightText text-lg max-w-md leading-relaxed">
            Speak Tutor designs a personalized curriculum as unique as you are 
            by getting to know you on a surprisingly deep level.
          </p>
        </div>

        {/* RIGHT PHONE MOCKUP */}
        <div className="flex justify-center">
          <div className="rounded-3xl bg-[#F0F2F6] p-6 shadow-lg max-w-xs w-full">
            <div className="bg-white p-4 rounded-2xl shadow-sm">
              <p className="text-sm font-semibold text-textMain">Speak</p>
              <p className="text-sm text-lightText mt-1">
                Hey Audrey, your trip to Mexico is in 6 days!
                Let’s practice some vocabulary for your trip!
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
