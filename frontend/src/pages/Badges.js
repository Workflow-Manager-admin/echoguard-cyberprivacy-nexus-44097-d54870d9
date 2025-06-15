import React from "react";
import { motion } from "framer-motion";

// PUBLIC_INTERFACE
/**
 * Badge System page stub
 * Animated badge grid and leaderboard placeholder
 */
export default function Badges() {
  return (
    <div className="w-full max-w-3xl mx-auto py-10 flex flex-col items-center gap-8">
      <div className="text-2xl font-bold text-primary mb-3">Privacy Badges (Stub UI)</div>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4 w-full">
        {[...Array(6)].map((_,i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center"
            initial={{ scale: 0.8 }}
            animate={{ scale: [1, 1.15, 1], rotate: [0,8,-8,0] }}
            transition={{ repeat: Infinity, duration: 1.5 + i*0.13 }}
          >
            <div className="w-16 h-16 bg-gradient-to-tr from-primary to-secondary rounded-full flex items-center justify-center border-2 border-accent text-white shadow-lg animate-pulse text-2xl">
              🛡️
            </div>
            <span className="mt-1 text-sm text-accent/80 animate-pulse">Badge {i+1}</span>
          </motion.div>
        ))}
      </div>
      <div className="w-full p-6 rounded-lg bg-background border border-primary/15 shadow mt-7">
        <div className="font-bold text-accent mb-2">Leaderboard</div>
        <div className="flex gap-4 items-center mt-1">
          <div className="w-10 h-10 bg-secondary rounded-full animate-pulse" />
          <div className="bg-accent/20 h-4 w-44 rounded animate-pulse" />
        </div>
      </div>
    </div>
  );
}
