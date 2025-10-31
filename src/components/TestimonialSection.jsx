import { motion } from "framer-motion";

export default function TestimonialSection() {
  return (
    <section className="py-32 px-6 bg-[#F8FAFF]">
      <div className="max-w-5xl mx-auto text-center">

        {/* Phone Floating Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto w-full max-w-sm bg-white shadow-[0_10px_40px_rgba(0,0,0,0.12)] rounded-[2rem] p-6 mb-20"
        >
          <div className="rounded-2xl bg-gradient-to-r from-[#356DFF] to-[#1B4AF6] text-white p-4 shadow-lg">
            <p className="text-sm font-medium">✨ Made for you</p>
            <p className="text-base mt-2 leading-snug">
              Phrases to go through customs and air travel ✈️
            </p>
          </div>
        </motion.div>

        {/* Testimonial Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl leading-snug font-semibold text-textMain"
        >
          “The first time I used Speak Tutor, I couldn’t believe it wasn’t a real person. 
          It feels like it understands my motivations at a deep level.”
        </motion.p>

        {/* User */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 inline-flex items-center gap-3 px-5 py-2 border border-gray-300 rounded-full bg-white shadow-sm"
        >
          <img
            src="https://i.pravatar.cc/40?img=12"
            alt="User"
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="text-sm font-semibold text-textMain">Jessica Park</span>
        </motion.div>

      </div>
    </section>
  );
}
