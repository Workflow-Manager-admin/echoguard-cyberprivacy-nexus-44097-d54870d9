import React from "react";
import { motion } from "framer-motion";

// PUBLIC_INTERFACE
/**
 * Digital Twin Visualization Placeholder
 * Animated visualization for user identity and map
 */
export default function DigitalTwin() {
  return (
    <div className="flex justify-center items-center py-12">
      <motion.div
        className="relative w-72 h-72 rounded-full border-4 border-accent flex items-center justify-center bg-gradient-to-br from-secondary/30 to-primary/20 shadow-xl"
        initial={{ scale: 0.94, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.img
          src="https://ui-avatars.com/api/?name=Twin+User&background=8A2BE2&color=fff&size=128"
          alt="Digital Twin"
          className="rounded-full w-28 h-28 shadow-lg"
          initial={{ y: -24 }}
          animate={{
            y: [ -18, 0, -8, 0, -18 ],
            boxShadow: [
              "0 0 0px #00BFFF",
              "0 0 12px #00BFFF",
              "0 0 8px #8A2BE2",
              "0 0 12px #00FF7F",
              "0 0 0px #00BFFF"
            ]
          }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
        />
        {/* Animated Nodes */}
        {[1,2,3].map(idx => (
          <motion.div
            key={idx}
            className="absolute w-10 h-10 rounded-full bg-primary/20 border border-secondary/40 flex items-center justify-center text-primary"
            style={{
              top: [50, 20, 80][idx-1],
              left: [220, 52, 120][idx-1]
            }}
            animate={{ scale: [1, 1.3, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ repeat: Infinity, duration: 2+idx }}
          >
            <span>🔗</span>
          </motion.div>
        ))}
      </motion.div>
      <div className="ml-12 flex flex-col gap-3 max-w-md">
        <div className="bg-accent/10 rounded-lg px-6 py-3 text-lg font-semibold text-primary shadow animate-pulse">
          Detected stylometric matches
        </div>
        <div className="bg-background/80 rounded shadow px-4 py-2 border border-primary/10 animate-pulse text-accent">
          Map of connected profiles (placeholder)
        </div>
      </div>
    </div>
  );
}
