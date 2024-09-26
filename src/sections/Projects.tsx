import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

const portfolioProjects = [
	{
		company: "Example One",
		year: "2024",
		title: "Example One",
		results: [
			{ title: "Next.js, Tailwind, TypeScript" },
			{ title: "Site rápido e Intuitivo" },
			{ title: "Responsivo" },
		],
		link: "#",
		image: darkSaasLandingPage,
	},
	{
		company: "Example Two",
		year: "2021",
		title: "Example Two",
		results: [
			{ title: "Next.js, Tailwind, TypeScript" },
			{ title: "Site rápido e Intuitivo" },
			{ title: "Responsivo" },
		],
		link: "#",
		image: lightSaasLandingPage,
	},
	{
		company: "Example Three",
		year: "2023",
		title: "AI Startup Landing Page",
		results: [
			{ title: "Next.js, Tailwind, TypeScript" },
			{ title: "Site rápido e Intuitivo" },
			{ title: "Responsivo" },
		],
		link: "#",
		image: aiStartupLandingPage,
	},
];

export const ProjectsSection = () => {
	return (
		<section className="pb-16 lg:py-24">
			<div className="container">
				<div className="fex justify-center">
					<p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center text-transparent bg-clip-text">
						Resultados
					</p>
				</div>
				<h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
					Projetos em destaque
				</h2>
				<p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">
					Veja como eu transformo conceitos em projetos digitais engajados
				</p>
				<div className="mt-10 md:mt-20 flex flex-col gap-20">
					{portfolioProjects.map((project) => (
						<div
							key={project.title}
							className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10  after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white-20 px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 after:pointer-events-none"
						>
							<div
								className="absolute inset-0 -z-10 opacity-5"
								style={{
									backgroundImage: `url(${grainImage.src})`,
								}}
							/>
							<div className="lg:grid lg:grid-cols-2 lg:gap-16">
								<div className="lg:pb-16">
									<div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
										<span>{project.company}</span>
										<span>&bull;</span>
										<span>{project.year}</span>
									</div>
									<h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
										{project.title}
									</h3>
									<hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
									<ul className="flex flex-col gap-4 mt-4 md:mt-5">
										{project.results.map((result) => (
											<li
												key={result.title}
												className="flex gap-2 text-sm md:text-base text-white/50"
											>
												<CheckCircleIcon className="size-5 md:size-6" />
												<span>{result.title}</span>
											</li>
										))}
									</ul>
									<a href={project.link}>
										<button
											type="button"
											className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8"
										>
											<span>Veja Online</span>
											<ArrowUpRightIcon className="size-4" />
										</button>
									</a>
								</div>
								<div className="relative">
									<Image
										src={project.image}
										alt={project.title}
										className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none "
									/>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
