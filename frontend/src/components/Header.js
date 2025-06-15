import React from "react";
import { motion } from "framer-motion";

// PUBLIC_INTERFACE
/**
 * Header bar for EchoGuard featuring avatar, notification bell, and device sync indicator.
 */
export default function Header({ onMenuClick }) {
  // Placeholder user data
  const avatarUrl = "https://ui-avatars.com/api/?name=Echo+User&background=8A2BE2&color=fff";
  // Placeholder notification state
  const notificationsCount = 2;
  // Placeholder sync icon state
  const isSynced = true;

  return (
    <header className="flex items-center justify-between gap-2 px-2 sm:px-4 py-3 border-b border-border bg-background dark:bg-[#181826] z-20 md:pl-72 w-full sticky top-0">
      {/* Hamburger for mobile */}
      <div className="md:hidden flex items-center mr-1">
        <button
          aria-label="Toggle sidebar"
          onClick={onMenuClick}
          className="p-2 rounded-md hover:bg-accent/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent transition"
          tabIndex={0}
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" className="text-primary">
            <path d="M4 6h16M4 12h16M4 18h16" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>
      {/* Brand (visible on mobile, visually hidden on desktop) */}
      <div className="flex md:hidden items-center gap-2 flex-shrink-0">
        <span className="h-8 w-8 rounded-full flex items-center justify-center bg-primary text-white text-xl font-bold shadow-lg">Ξ</span>
        <span className="text-xl font-extrabold tracking-tight text-primary">EchoGuard</span>
      </div>
      {/* Spacer for desktop right alignment */}
      <div className="flex-1 min-w-[8px]" />
      {/* Main controls */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Notification Bell */}
        <motion.button
          aria-label="Notifications"
          className="relative rounded-full p-2 bg-transparent hover:bg-accent/10 transition focus:outline-none focus:ring-2 focus:ring-accent"
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" className="text-accent">
            <path d="M12 22a2 2 0 0 1-2-2h4a2 2 0 0 1-2 2Zm6-6V11a6 6 0 0 0-5-5.92V5a1 1 0 0 0-2 0v.08A6 6 0 0 0 6 11v5l-1.29 1.29A1 1 0 0 0 6 19h12a1 1 0 0 0 .71-1.71Z" strokeWidth="2" strokeLinecap="round" />
          </svg>
          {notificationsCount > 0 && (
            <motion.span
              className="absolute -top-1.5 -right-1.5 w-4 h-4 flex items-center justify-center bg-red-500 text-[11px] text-white rounded-full border-2 border-background font-bold z-10"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              {notificationsCount}
            </motion.span>
          )}
        </motion.button>
        {/* Device Sync Icon */}
        <motion.div
          className="flex items-center gap-1 px-2 py-1 rounded bg-accent/10"
          initial={{ scale: 1 }}
          animate={{ scale: isSynced ? 1 : 0.98 }}
          transition={{ duration: 0.2 }}
        >
          <svg width="20" height="20" fill="none" className="text-primary">
            <path d="M3 12a8 8 0 0 1 13.5-6.74" stroke="#00FF7F" strokeWidth="2" strokeLinecap="round" />
            <path d="M21 12a8 8 0 0 1-15.5 6.74" stroke="#8A2BE2" strokeWidth="2" strokeLinecap="round" />
            <circle cx="16" cy="6" r="2" fill="#00FF7F" />
            <circle cx="8" cy="18" r="2" fill="#8A2BE2" />
          </svg>
          <span className="hidden md:inline text-xs font-medium text-secondary">{isSynced ? "Synced" : "Syncing..."}</span>
        </motion.div>
        {/* User Avatar */}
        <motion.div
          className="relative"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          title="User Account"
        >
          <img src={avatarUrl} alt="User avatar" className="h-9 w-9 rounded-full border-2 border-primary shadow"/>
        </motion.div>
      </div>
    </header>
  );
}
