import React from "react";
import { motion } from "framer-motion";

// PUBLIC_INTERFACE
/** 
 * Dashboard Visuals Page Placeholder
 * Includes: Exposure Score, charts, real-time widgets (future: use chart libs)
 */
export default function Dashboard() {
  return (
    <div className="w-full flex flex-col gap-8 py-8">
      <motion.div 
        className="bg-gradient-to-br from-primary/70 to-accent/50 rounded-xl shadow-lg p-6 flex flex-col md:flex-row gap-6 items-center justify-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring", bounce: 0.2 }}
      >
        <div className="flex flex-col items-center w-full">
          <motion.div
            className="rounded-full bg-secondary/30 w-36 h-36 flex items-center justify-center shadow-inner"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          >
            <div className="text-5xl font-extrabold text-primary drop-shadow-lg">86</div>
          </motion.div>
          <span className="mt-3 text-xl text-white font-semibold">Exposure Score</span>
          <span className="text-accent text-sm mt-1">Sample data - animated</span>
        </div>
        <div className="flex-1 flex flex-col gap-4 justify-center items-center">
          <div className="w-60 h-24 bg-background/70 rounded-lg animate-pulse flex flex-col items-center justify-center border border-border">
            <span className="text-lg font-semibold text-primary">Risk Trend Graph</span>
            <span className="text-accent text-xs">[Animated Placeholder]</span>
          </div>
          <div className="mt-2 flex gap-2">
            <div className="bg-accent w-20 h-6 rounded-xl animate-pulse" />
            <div className="bg-secondary w-10 h-6 rounded-xl animate-pulse" />
          </div>
        </div>
      </motion.div>
      <div className="flex gap-4 flex-wrap">
        <motion.div
          className="flex-1 min-w-[210px] bg-background rounded-lg p-4 border border-border shadow animate-pulse"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="text-primary font-bold">Daily Tip Widget</span>
          <div className="w-full h-8 bg-accent/20 rounded mt-2 animate-pulse"/>
        </motion.div>
        <motion.div
          className="flex-1 min-w-[210px] bg-background rounded-lg p-4 border border-border shadow animate-pulse"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <span className="text-primary font-bold">Real-Time Alerts</span>
          <div className="w-full h-8 bg-secondary/20 rounded mt-2 animate-pulse"/>
        </motion.div>
      </div>
    </div>
  );
}
