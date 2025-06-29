/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
      },
    },
  },
  plugins: [],
  // Ensure all styles are included in production
  safelist: [
    'bg-white',
    'bg-gray-200',
    'bg-gray-700',
    'bg-gray-800',
    'text-2xl',
    'font-bold',
    'mb-4',
    'min-h-screen',
    'flex',
    'items-center',
    'justify-center',
    'w-full',
    'max-w-3xl',
    'p-6',
    'rounded-2xl',
    'shadow-lg',
    'transition-all',
    'duration-500',
    'ease-in-out',
    'fixed',
    'top-4',
    'left-4',
    'space-x-2',
    'z-50',
    'rounded-full',
    'hover:bg-gray-300',
    'hover:bg-gray-600',
    'hover:scale-110',
    'active:scale-95',
    'hover:shadow-xl',
    'dark:bg-gray-700',
    'dark:bg-gray-800',
    'dark:hover:bg-gray-600'
  ]
} 