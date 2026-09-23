import Link from "next/link";

const principles = [
	{
		number: "01",
		title: "Useful first",
		text: "Every product should solve a real problem or make an everyday ritual feel better.",
	},
	{
		number: "02",
		title: "Made to last",
		text: "We choose thoughtful materials and honest construction over short-lived trends.",
	},
	{
		number: "03",
		title: "Less, but better",
		text: "A focused collection helps you discover what you need without endless scrolling.",
	},
];

export default function AboutPage() {
	return (
		<div className="min-h-screen bg-slate-50 text-slate-950">
			<main>
				<section className="border-b border-slate-200 bg-cyan-50">
					<div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:px-8 lg:py-28">
						<div>
							<p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-700">About NextCommerce</p>
							<h1 className="mt-6 max-w-3xl text-5xl font-black tracking-tight sm:text-6xl">
								Better things for everyday life.
							</h1>
						</div>
						<p className="max-w-lg text-lg leading-8 text-slate-600">
							We make it easier to find useful, beautiful products that earn a lasting place in your home and routine.
						</p>
					</div>
				</section>

				<section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
					<div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
						<div>
							<p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-700">Our story</p>
							<h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">A calmer way to shop.</h2>
						</div>
						<div className="space-y-6 text-base leading-8 text-slate-600">
							<p>
								There is no shortage of choice online. The hard part is knowing what is actually worth your time and money.
							</p>
							<p>
								NextCommerce is a carefully edited store for everyday goods. We look for clear purpose, considered design,
								and quality you can feel from the first use.
							</p>
						</div>
					</div>
				</section>

				<section className="border-y border-slate-200 bg-white">
					<div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
						<div className="mb-12 max-w-xl">
							<p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-700">What guides us</p>
							<h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">Good products have a point of view.</h2>
						</div>
						<div className="grid gap-8 md:grid-cols-3">
							{principles.map((principle) => (
								<article key={principle.number} className="border-t-2 border-cyan-400 pt-6">
									<p className="text-sm font-bold text-cyan-700">{principle.number}</p>
									<h3 className="mt-6 text-xl font-bold">{principle.title}</h3>
									<p className="mt-4 text-sm leading-7 text-slate-600">{principle.text}</p>
								</article>
							))}
						</div>
					</div>
				</section>

				<section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8 lg:py-28">
					<div>
						<p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-700">Find your next favorite</p>
						<h2 className="mt-5 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
							Start with the things we love most.
						</h2>
					</div>
					<Link
						href="/"
						className="inline-flex w-fit rounded-lg bg-slate-950 px-6 py-3 text-sm font-bold text-white transition hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
					>
						Explore the shop
					</Link>
				</section>
			</main>
		</div>
	);
}
