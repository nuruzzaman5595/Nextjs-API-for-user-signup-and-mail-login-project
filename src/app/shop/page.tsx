const products = [
	{ name: "Everyday Carry Tote", category: "Bags", price: "$68", color: "bg-amber-100" },
	{ name: "Studio Ceramic Set", category: "Home", price: "$42", color: "bg-cyan-100" },
	{ name: "Field Notes Journal", category: "Stationery", price: "$18", color: "bg-rose-100" },
	{ name: "Daily Ritual Mug", category: "Kitchen", price: "$24", color: "bg-lime-100" },
	{ name: "Canvas Weekender", category: "Bags", price: "$96", color: "bg-sky-100" },
	{ name: "Ripple Glass Carafe", category: "Home", price: "$54", color: "bg-emerald-100" },
	{ name: "Soft Form Lamp", category: "Lighting", price: "$120", color: "bg-orange-100" },
	{ name: "Merino Lounge Socks", category: "Apparel", price: "$28", color: "bg-violet-100" },
];

const categories = ["All products", "Bags", "Home", "Stationery", "Kitchen", "Lighting", "Apparel"];

export default function ShopPage() {
	return (
		<main className="min-h-screen bg-slate-50 text-slate-950">
			<section className="border-b border-slate-200 bg-cyan-50">
				<div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
					<p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-700">The shop</p>
					<h1 className="mt-5 max-w-3xl text-5xl font-black tracking-tight sm:text-6xl">
						Objects with a useful point of view.
					</h1>
					<p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
						A considered collection of everyday goods, selected for the way they work, feel, and last.
					</p>
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20">
				<div className="flex flex-col gap-6 border-b border-slate-200 pb-6 lg:flex-row lg:items-center lg:justify-between">
					<div className="flex flex-wrap gap-2" aria-label="Product categories">
						{categories.map((category, index) => (
							<button
								key={category}
								type="button"
								className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
									index === 0
										? "bg-slate-950 text-white"
										: "bg-white text-slate-600 hover:bg-cyan-100 hover:text-cyan-800"
								}`}
							>
								{category}
							</button>
						))}
					</div>
					<p className="text-sm text-slate-500">{products.length} products</p>
				</div>

				<div className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
					{products.map((product) => (
						<article key={product.name} className="group">
							<div className={`flex aspect-4/5 items-end rounded-xl p-5 ${product.color}`}>
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
