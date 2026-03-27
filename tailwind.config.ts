import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
				mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					glow: 'hsl(var(--primary-glow))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
					glow: 'hsl(var(--secondary-glow))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				success: 'hsl(var(--success))',
				warning: 'hsl(var(--warning))',
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
					glow: 'hsl(var(--accent-glow))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
					border: 'hsl(var(--card-border))',
					hover: 'hsl(var(--card-hover))'
				},
				nav: {
					background: 'hsl(var(--nav-background))',
					foreground: 'hsl(var(--nav-foreground))',
					border: 'hsl(var(--nav-border))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					from: { opacity: '0' },
					to: { opacity: '1' },
				},
				'fade-in-up': {
					from: { opacity: '0', transform: 'translateY(20px)' },
					to: { opacity: '1', transform: 'translateY(0)' },
				},
				'slide-in-left': {
					from: { opacity: '0', transform: 'translateX(-16px)' },
					to: { opacity: '1', transform: 'translateX(0)' },
				},
				'ambient-1': {
					'0%, 100%': { transform: 'translate(0%, 0%) scale(1)' },
					'50%': { transform: 'translate(-4%, 6%) scale(1.06)' },
				},
				'ambient-2': {
					'0%, 100%': { transform: 'translate(0%, 0%) scale(1)' },
					'50%': { transform: 'translate(6%, -5%) scale(0.94)' },
				},
				'ambient-3': {
					'0%, 100%': { transform: 'translate(0%, 0%) scale(1)' },
					'50%': { transform: 'translate(5%, 8%) scale(1.08)' },
				},
				'ambient-4': {
					'0%, 100%': { transform: 'translate(0%, 0%) scale(1)' },
					'50%': { transform: 'translate(-7%, -4%) scale(0.92)' },
				},
				'particle-drift': {
					'0%, 100%': { transform: 'translate(0, 0)', opacity: '0.25' },
					'25%': { transform: 'translate(12px, -18px)', opacity: '0.55' },
					'50%': { transform: 'translate(-8px, 10px)', opacity: '0.35' },
					'75%': { transform: 'translate(14px, 12px)', opacity: '0.5' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out forwards',
				'fade-in-up': 'fade-in-up 0.65s ease-out forwards',
				'slide-in-left': 'slide-in-left 0.6s ease-out forwards',
				'ambient-1': 'ambient-1 28s ease-in-out infinite',
				'ambient-2': 'ambient-2 36s ease-in-out infinite',
				'ambient-3': 'ambient-3 22s ease-in-out infinite',
				'ambient-4': 'ambient-4 32s ease-in-out infinite',
				'particle-drift': 'particle-drift 14s ease-in-out infinite',
			},
		}
	},
	// plugins: [require("tailwindcss-animate")], // Temporarily disabled to prevent Framer Motion conflicts
} satisfies Config;
