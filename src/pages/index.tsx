import HeroSection from "@/components/layout/HeroSection";
import Navbar from "../components/layout/Navbar";
import { motion } from "framer-motion";

export default function Home() {
  const postPreviewVariants = {
    initial: { x: "-100vw" },
    enter: { x: 0 },
    exit: { x: "-100vw" },
  };

  const animationTransition = {
    duration: 1,
    ease: "easeInOut",
  };

  return (
    <>
      <motion.div
        variants={postPreviewVariants}
        initial="initial"
        animate="enter"
        exit="exit"
        transition={animationTransition}
        className="relative"
      >
        <Navbar />
        <HeroSection />
      </motion.div>
    </>
  );
}
