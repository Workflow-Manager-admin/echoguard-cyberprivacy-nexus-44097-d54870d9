import React from "react";
import { motion } from "framer-motion";

// PUBLIC_INTERFACE
/**
 * Leak Alerts Page Stub
 * Card timeline for breach/data alerts
 */
export default function Alerts() {
  return (
    <div className="py-8 flex flex-col items-center gap-7">
      <div className="text-2xl font-bold text-primary mb-4">Leak/Breach Alerts</div>
      <div className="flex flex-col gap-6 w-full max-w-xl">
        {[1,2,3].map(idx => (
          <motion.div
            key={idx}
            className="bg-background border-l-4 border-red-500/70 rounded-lg shadow px-6 py-4 flex flex-col gap-2 animate-pulse"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: idx*0.13, duration: 0.4 }}
          >
            <div className="flex items-center gap-2 text-red-400 font-semibold">
              <span>⚠️</span> Potential Leak Detected
            </div>
            <span className="text-white/80">Breach {idx}: Example data exposure alert (animated placeholder)</span>
            <span className="text-accent text-xs">Timestamp: --:--</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
