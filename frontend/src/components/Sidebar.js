import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// PUBLIC_INTERFACE
/**
 * Sidebar navigation for EchoGuard, featuring animated appearance, tabs, branding, and device sync indicator.
 */
const navItems = [
  { label: "Dashboard", icon: "🏠" },
  { label: "Action Plan", icon: "🗒️" },
  { label: "Digital Twin", icon: "👤" },
  { label: "Alerts", icon: "🚨" },
  { label: "Settings", icon: "⚙️" },
];

export default function Sidebar({ isMobileOpen, toggleMobile, activeTab, onTabChange }) {
  // Placeholder device sync status
  const deviceSync = { status: "Synced", color: "bg-green-500" };

  return (
    <>
      {/* Overlay for mobile */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleMobile}
            aria-label="Sidebar backdrop"
          />
        )}
      </AnimatePresence>
      {/* Sidebar itself */}
      <AnimatePresence>
        {(isMobileOpen || !isMobileOpen) && (
          <motion.aside
            className={`
              fixed z-50 md:static top-0 left-0 h-full
              ${isMobileOpen ? "block" : "hidden"}
              md:flex md:flex-col
              bg-background dark:bg-[#181826] text-white w-64
              max-w-[85vw] md:max-w-xs
              shadow-2xl md:shadow-none
              transition-all duration-300
              border-r border-border
              outline-none
              `}
            tabIndex={isMobileOpen ? 0 : -1}
            initial={{ x: -280 }}
            animate={{
              x:
                isMobileOpen ||
                !window.matchMedia("(max-width: 767px)").matches
                  ? 0
                  : -280,
            }}
            exit={{ x: -280 }}
            transition={{ duration: 0.25 }}
            style={{ minWidth: "15rem" }}
            aria-label="Sidebar navigation"
          >
            <div className="flex flex-col h-full px-3 py-4 sm:p-4">
              {/* Logo / Brand */}
              <div className="flex items-center gap-2 my-2 mb-8">
                <span className="h-8 w-8 rounded-full flex items-center justify-center bg-primary text-white text-xl font-bold shadow-lg">Ξ</span>
                <span className="text-2xl font-extrabold tracking-tight text-primary hidden sm:inline">EchoGuard</span>
                <span className="ml-1 text-secondary text-xs tracking-wider bg-accent sm:px-2 px-1 py-1 rounded">Nexus</span>
              </div>
              {/* Navigation Tabs */}
              <nav className="flex-1" aria-label="Main Navigation">
                <ul className="flex flex-col gap-1">
                  {navItems.map((item, idx) => (
                    <li key={item.label} className="w-full">
                      <button
                        className={`
                          group flex items-center gap-2 w-full rounded-md px-2 md:px-3 py-2
                          text-base sm:text-lg ${activeTab === idx ? "bg-primary text-white font-semibold" : "hover:bg-accent/20 text-text-secondary"}
                          focus:outline-none focus-visible:ring-2 focus-visible:ring-primary
                          transition select-none duration-150 ease-in
                        `}
                        aria-current={activeTab === idx ? "page" : undefined}
                        tabIndex={0}
                        onClick={() => {
                          onTabChange?.(idx);
                          if (window.innerWidth < 768) toggleMobile();
                        }}
                        onKeyDown={e => {
                          if (e.key === "Enter" || e.key === " ") {
                            onTabChange?.(idx);
                            if (window.innerWidth < 768) toggleMobile();
                          }
                        }}
                      >
                        <span className={activeTab === idx ? "text-white" : "text-accent text-xl"}>
                          {item.icon}
                        </span>
                        <span className="truncate">{item.label}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
              {/* Device Sync Status */}
              <div className="mt-auto flex flex-col gap-1 pt-4 pb-2 sm:pb-0">
                <div className="flex items-center gap-2 text-sm pl-1">
                  <span className={`inline-block w-2 h-2 rounded-full ${deviceSync.color} mr-2`} aria-label="Device sync status" />
                  <span>Device Sync: <span className="font-bold">{deviceSync.status}</span></span>
                </div>
                <div className="text-xs text-text-secondary pl-1">All your devices are securely synchronized.</div>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
