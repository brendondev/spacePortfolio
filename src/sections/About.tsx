import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { CertifiesItems } from "@/components/CertifiesItems";

const toolboxItems = [
	{
		title: "Javascript",
		iconType: JavascriptIcon,
	},
	{
		title: "Node.js",
		iconType: JavascriptIcon,
	},
	{
		title: "React",
		iconType: JavascriptIcon,
	},
	{
		title: "TypeScript",
		iconType: JavascriptIcon,
	},
	{
		title: "Next.js",
		iconType: JavascriptIcon,
	},
	{
		title: "Git",
		iconType: JavascriptIcon,
	},
	{
		title: "Docker",
		iconType: JavascriptIcon,
	},
	{
		title: "PHP",
		iconType: JavascriptIcon,
	},
];

const hobbies = [
	{
		title: "Livros",
		emoji: "📖",
		left: "5%",
		top: "5%",
	},
	{
		title: "Filmes",
		emoji: "🎞️",
		left: "50%",
		top: "5%",
	},
	{
		title: "Jogos",
		emoji: "🎮",
		left: "10%",
		top: "35%",
	},
	{
		title: "Músicas",
		emoji: "🎶",
		left: "35%",
		top: "40%",
	},
	{
		title: "Exercícios",
		emoji: "🏋️‍♂️",
		left: "75%",
		top: "45%",
	},
];

const certifiesItems = [
	{
		title: "NLW Pocket: Javascript - Full-stack Intermediário",
		iconType: JavascriptIcon,
		link: "#",
	},
	{
		title: "Enable",
		iconType: JavascriptIcon,
		link: "#",
	},
];

export const AboutSection = () => {
	return (
		<div className="py-20 lg:py-28">
			<div className="container">
				<SectionHeader
					title="Sobre mim"
					eyebrown="Me conheça"
					description="Saiba o que faço e o que me inspira no mundo do desenvolvimento!"
				/>
				<div className="mt-20 flex flex-col gap-8">
					<div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
						<Card className="h-[320px] md:col-span-2 lg:col-span-1">
							<CardHeader
								title="Certificados"
								description="Explore the books shaping"
							/>
							<div className="w-40 mx-auto">
								<CertifiesItems items={certifiesItems} className="mt-5" />
							</div>
						</Card>
						<Card className="h-[320px] p-0 md:col-span-3 lg:col-span-2">
							<CardHeader
								title="Tecnologias"
								description="Veja as tecnologias que utilizo para desenvolver"
								className="px-6 pt-6"
							/>
							<ToolboxItems items={toolboxItems} className="mt-6 " />
							<ToolboxItems
								items={toolboxItems}
								className="mt-6"
								itemsWrapperClassName="-translate-x-1/2"
							/>
						</Card>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
						<Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
							<CardHeader
								title="Além do Código"
								description="Meus hobbies por trás do mundo digital"
								className="px-6 py-6"
							/>
							<div className="relative flex-1">
								{hobbies.map((hobby) => (
									<div
										key={hobby.title}
										className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
										style={{
											left: hobby.left,
											top: hobby.top,
										}}
									>
										<span className="font-medium text-gray-950">
											{hobby.title}
										</span>
										<span>{hobby.emoji}</span>
									</div>
								))}
							</div>
						</Card>
						<Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
							<Image
								src={mapImage}
								alt="map"
								className="h-full w-full object-cover object-left-top"
							/>
							<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
								<Image
									src={smileMemoji}
									alt="smiling memoji"
									className="size-20"
								/>
							</div>
						</Card>
					</div>
				</div>
			</div>
		</div>
	);
};
