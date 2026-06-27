import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[9999] bg-[#050816] flex flex-col items-center justify-center overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-10 left-20 w-72 h-72 bg-purple-600/20 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-10 right-20 w-72 h-72 bg-blue-500/20 blur-[150px] rounded-full"></div>

      {/* Icons */}
      <motion.div
        className="flex gap-6 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
       <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
    <TbBrandJavascript className="text-yellow-400 text-3xl" />
</div>

<div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
    <FaReact className="text-cyan-400 text-3xl" />
</div>

<div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
    <SiMongodb className="text-green-500 text-3xl" />
</div>
      </motion.div>

      {/* Text */}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-gray-300 tracking-[8px] text-xl"
      >
        WELCOME TO MY
      </motion.h2>

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .3 }}
        className="!text-2xl font-bold text-white mt-4"
      >
        PORTFOLIO WEBSITE
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .6 }}
        className="text-purple-400 text-xl mt-3"
      >
        Full-Stack Developer
      </motion.p>

      {/* Loading Bar */}

      <div className="w-80 h-1 bg-white/10 rounded-full mt-16 overflow-hidden">

        <motion.div
          className="h-full bg-gradient-to-r from-purple-500 to-cyan-400"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 3 }}
        />

      </div>

    </div>
  );
}