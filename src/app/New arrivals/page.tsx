const newProducts = [
	{ name: "Canvas Weekender", category: "Bags", price: "$96", color: "bg-sky-100" },
	{ name: "Ripple Glass Carafe", category: "Home", price: "$54", color: "bg-emerald-100" },
	{ name: "Soft Form Lamp", category: "Lighting", price: "$120", color: "bg-orange-100" },
	{ name: "Merino Lounge Socks", category: "Apparel", price: "$28", color: "bg-violet-100" },
	{ name: "Daily Carry Wallet", category: "Accessories", price: "$48", color: "bg-amber-100" },
	{ name: "Linen Table Runner", category: "Home", price: "$38", color: "bg-rose-100" },
	{ name: "Pocket Field Journal", category: "Stationery", price: "$16", color: "bg-cyan-100" },
	{ name: "Travel Brew Kit", category: "Kitchen", price: "$72", color: "bg-lime-100" },
];

export default function NewArrivalsPage() {
	return (
		<main className="min-h-screen bg-slate-50 text-slate-950">
			<section className="border-b border-slate-200 bg-cyan-50">
				<div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
					<p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-700">Just in</p>
					<h1 className="mt-5 max-w-3xl text-5xl font-black tracking-tight sm:text-6xl">
						New arrivals, ready for their place.
					</h1>
					<p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
						Fresh finds from makers we admire, brought together for the next chapter of your everyday routine.
					</p>
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20">
				<div className="flex items-center justify-between border-b border-slate-200 pb-6">
					<h2 className="text-xl font-bold">Latest products</h2>
					<p className="text-sm text-slate-500">{newProducts.length} new products</p>
				</div>

				<div className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
					{newProducts.map((product) => (
						<article key={product.name} className="group">
							<div className={`relative flex aspect-4/5 items-end rounded-xl p-5 ${product.color}`}>
								<span className="absolute left-5 top-5 rounded-full bg-slate-950 px-3 py-1 text-xs font-bold text-white">
									New
								</span>
								<span className="rounded-full bg-white/85 px-3 py-1 text-xs font-bold text-slate-800 backdrop-blur">
									View product
								</span>
							</div>
							<div className="mt-4 flex items-start justify-between gap-4">
								<div>
									<p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">{product.category}</p>
									<h2 className="mt-1 font-bold transition group-hover:text-cyan-700">{product.name}</h2>
								</div>
								<p className="shrink-0 text-sm font-semibold">{product.price}</p>
							</div>
						</article>
					))}
				</div>
			</section>
		</main>
	);
}
