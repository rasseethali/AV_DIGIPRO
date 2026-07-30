import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { assetManifest } from "../../assets/assetManifest.js";
const AboutHero = () => {
  return (
   <section className="relative py-28 overflow-hidden">
  <motion.img
    initial={{ scale: 1 }}
    animate={{ scale: 1.08 }}
    transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
    src={assetManifest.about.mission}
    alt="About Hero"
    className="absolute inset-0 w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-black/50"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
    <h1 className="mt-6 text-5xl md:text-6xl font-bold">
      Empowering Every Space with
      <span className="text-red-600"> Visual Innovation</span>
    </h1>

    <p className="mt-6 max-w-3xl mx-auto text-lg leading-8">
      AV DIGIPRO provides premium projector and display solutions...
    </p>
  </div>
</section>
  );
};

export default AboutHero;