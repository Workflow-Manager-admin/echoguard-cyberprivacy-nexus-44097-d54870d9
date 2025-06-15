import React from "react";
import { motion } from "framer-motion";

// PUBLIC_INTERFACE
/**
 * Third-Party App Scanner Grid Stub
 * Animated card grid for connections/apps
 */
export default function ThirdPartyApps() {
  return (
    <div className="py-8">
      <div className="text-xl font-bold text-primary mb-4">Connected Apps (stub UI)</div>
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-3xl mx-auto">
        {[1,2,3].map(idx => (
          <motion.div
            key={idx}
            className="p-6 rounded-xl border border-border bg-background shadow flex flex-col items-center gap-4 animate-pulse"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: idx * 0.17, duration: 0.48 }}
          >
            <div className="w-16 h-16 rounded-full bg-secondary/30 animate-pulse mb-2" />
            <span className="font-semibold text-accent">App {idx} (logo)</span>
            <span className="text-primary/70 text-sm mb-2">Trust: 
                <span className="ml-2 font-bold text-secondary">{"★".repeat(idx)}{"☆".repeat(3-idx)}</span>
            </span>
            <button className="btn bg-accent text-white px-3 py-1 rounded hover:bg-primary/80 transition">Revoke Access</button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
