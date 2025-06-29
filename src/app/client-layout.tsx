'use client';
import { useState, useEffect, ReactNode } from 'react';
import { Sun, Moon, Volume2, VolumeX } from 'lucide-react';

export function ClientLayout({ children }: { children: ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);
  const [muted, setMuted] = useState(true);

  // Initialize settings from localStorage
  useEffect(() => {
    const storedDark = localStorage.getItem('darkMode') === 'true';
    setDarkMode(storedDark);
    document.documentElement.classList.toggle('dark', storedDark);
    console.log('Initial dark mode:', storedDark);

    setMuted(true);
    document.querySelectorAll('audio').forEach((a) => (a.muted = true));
  }, []);

  // Toggle dark mode and persist
  const toggleDark = () => {
    const next = !darkMode;
    setDarkMode(next);
    localStorage.setItem('darkMode', next.toString());
    document.documentElement.classList.toggle('dark', next);
    console.log('Dark mode toggled to:', next);
    console.log('HTML classes:', document.documentElement.className);
  };

  // Toggle audio mute on all <audio> elements
  const toggleMute = () => {
    const next = !muted;
    setMuted(next);
    document.querySelectorAll('audio').forEach((a) => (a.muted = next));
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ease-in-out ${darkMode ? 'dark' : ''}`}>
      {/* Control buttons */}
      <div className="fixed top-4 left-4 flex space-x-2 z-50">
        <button
          onClick={toggleDark}
          aria-label="Toggle dark mode"
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 ease-in-out transform hover:scale-110 active:scale-95 shadow-lg hover:shadow-xl"
        >
          <div className="transition-transform duration-300 ease-in-out">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </div>
        </button>
        <button
          onClick={toggleMute}
          aria-label="Toggle audio mute"
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 ease-in-out transform hover:scale-110 active:scale-95 shadow-lg hover:shadow-xl"
        >
          <div className="transition-transform duration-300 ease-in-out">
            {muted ? <Volume2 size={20} /> : <VolumeX size={20} />}
          </div>
        </button>
      </div>

      {/* Page content */}
      <main className="flex items-center justify-center min-h-screen transition-all duration-500 ease-in-out">
        <div className="w-full max-w-3xl p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg transition-all duration-500 ease-in-out">
          {children}
        </div>
      </main>
    </div>
  );
} 