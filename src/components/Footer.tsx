import Link from "next/link";

const shopLinks = [
	{ label: "Shop all", href: "/" },
	{ label: "New arrivals", href: "/new-arrivals" },
	{ label: "Collections", href: "/collections" },
];

const helpLinks = [
	{ label: "Contact us", href: "/contact" },
	{ label: "Shipping & returns", href: "/shipping" },
	{ label: "FAQs", href: "/faq" },
];

export default function Footer() {
	return (
		<footer className="bg-slate-950 text-slate-300">
			<div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.3fr_1fr_1fr_1.5fr] lg:px-8">
				<div>
					<Link href="/" className="text-xl font-black tracking-tight text-white">
						NextCommerce<span className="text-cyan-400">.</span>
					</Link>
					<p className="mt-5 max-w-xs text-sm leading-6 text-slate-400">
						Thoughtful products for everyday living, selected with a little more care.
					</p>
				</div>

				<div>
					<h2 className="text-sm font-bold uppercase tracking-[0.16em] text-white">Shop</h2>
					<ul className="mt-5 space-y-3">
						{shopLinks.map((link) => (
							<li key={link.href}>
								<Link href={link.href} className="text-sm transition hover:text-cyan-400">
									{link.label}
								</Link>
							</li>
						))}
					</ul>
				</div>

				<div>
					<h2 className="text-sm font-bold uppercase tracking-[0.16em] text-white">Support</h2>
					<ul className="mt-5 space-y-3">
						{helpLinks.map((link) => (
							<li key={link.href}>
								<Link href={link.href} className="text-sm transition hover:text-cyan-400">
									{link.label}
								</Link>
							</li>
						))}
					</ul>
				</div>

				<div>
					<h2 className="text-sm font-bold uppercase tracking-[0.16em] text-white">Join our newsletter</h2>
					<p className="mt-5 text-sm leading-6 text-slate-400">
						Get product updates and occasional offers, straight to your inbox.
					</p>
					<form action="/subscribe" method="post" className="mt-5 flex">
						<label htmlFor="footer-email" className="sr-only">Email address</label>
						<input
							id="footer-email"
							name="email"
							type="email"
							required
							placeholder="Email address"
							className="min-w-0 flex-1 rounded-l-lg border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
						/>
						<button
							type="submit"
							className="rounded-r-lg bg-cyan-400 px-4 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300"
						>
							Join
						</button>
					</form>
				</div>
			</div>

			<div className="border-t border-slate-800">
				<div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
					<p>© 2026 NextCommerce. All rights reserved.</p>
					<div className="flex gap-5">
						<Link href="/privacy" className="transition hover:text-slate-300">Privacy</Link>
						<Link href="/terms" className="transition hover:text-slate-300">Terms</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
