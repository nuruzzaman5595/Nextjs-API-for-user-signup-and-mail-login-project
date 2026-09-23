"use client";

import Link from "next/link";
import { useState } from "react";

const navigation = [
	{ label: "Shop", href: "/" },
	{ label: "New arrivals", href: "/new-arrivals" },
	{ label: "Collections", href: "/collections" },
	{ label: "About", href: "/about" },
];

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<header className="border-b border-slate-200 bg-white text-slate-950">
			<div className="mx-auto flex max-w-7xl items-center gap-6 px-6 py-4 lg:px-8">
				<Link href="/" className="shrink-0 text-xl font-black tracking-tight" onClick={() => setMenuOpen(false)}>
					NextCommerce<span className="text-cyan-600">.</span>
				</Link>

				<nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
					{navigation.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="text-sm font-medium text-slate-600 transition hover:text-cyan-700"
						>
							{item.label}
						</Link>
					))}
				</nav>

				<form action="/search" className="ml-auto hidden max-w-xs flex-1 md:flex" role="search">
					<label htmlFor="site-search" className="sr-only">
						Search products
					</label>
					<input
						id="site-search"
						name="q"
						type="search"
						placeholder="Search products"
						className="w-full rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
					/>
				</form>

				<div className="ml-auto flex items-center gap-4 md:ml-0">
					<Link href="/login" className="hidden text-sm font-semibold text-slate-700 transition hover:text-cyan-700 sm:block">
						Log in
					</Link>
					<Link
						href="/cart"
						className="text-sm font-semibold text-slate-700 transition hover:text-cyan-700"
						aria-label="Shopping cart with 0 items"
					>
						Cart <span className="text-cyan-700">(0)</span>
					</Link>
					<button
						type="button"
						className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-slate-200 lg:hidden"
						aria-expanded={menuOpen}
						aria-controls="mobile-navigation"
						aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
						onClick={() => setMenuOpen((open) => !open)}
					>
						<span className="h-0.5 w-5 bg-slate-700" />
						<span className="h-0.5 w-5 bg-slate-700" />
						<span className="h-0.5 w-5 bg-slate-700" />
					</button>
				</div>
			</div>

			{menuOpen && (
				<div id="mobile-navigation" className="border-t border-slate-100 px-6 py-5 lg:hidden">
					<form action="/search" className="mb-5 flex md:hidden" role="search">
						<label htmlFor="mobile-site-search" className="sr-only">
							Search products
						</label>
						<input
							id="mobile-site-search"
							name="q"
							type="search"
							placeholder="Search products"
							className="w-full rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
						/>
					</form>
					<nav className="flex flex-col gap-4" aria-label="Mobile navigation">
						{navigation.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className="text-sm font-semibold text-slate-700"
								onClick={() => setMenuOpen(false)}
							>
								{item.label}
							</Link>
						))}
						<Link href="/login" className="text-sm font-semibold text-slate-700" onClick={() => setMenuOpen(false)}>
							Log in
						</Link>
					</nav>
				</div>
			)}
		</header>
	);
}
