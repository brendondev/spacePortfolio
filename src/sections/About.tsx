import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import { TechIcon } from "@/components/TechIcon";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";

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
	},
	{
		title: "Filmes",
		emoji: "🎞️",
	},
	{
		title: "Jogos",
		emoji: "🎮",
	},
	{
		title: "Músicas",
		emoji: "🎶",
	},
	{
		title: "Exercícios",
		emoji: "🏋️‍♂️",
	},
];

export const AboutSection = () => {
	return (
		<div className="py-20">
			<div className="container">
				<SectionHeader
					title="Sobre mim"
					eyebrown="Me conheça"
					description="Saiba o que faço e o que me inspira no mundo do desenvolvimento!"
				/>
				<div className="mt-20 flex flex-col gap-8">
					<Card className="h-[320px]">
						<CardHeader
							title="My Reads"
							description="Explore the books shaping my perspectives"
						/>
						<div className="w-40 mx-auto mt-8">
							<Image src={bookImage} alt="Book cover" />
						</div>
					</Card>
					<Card className="h-[320px] p-0">
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
					<Card>
						<CardHeader
							title="Além do Código"
							description="Meus hobbies por trás do mundo digital"
						/>
						<div>
							{hobbies.map((hobby) => (
								<div key={hobby.title}>
									<span>{hobby.title}</span>
									<span>{hobby.emoji}</span>
								</div>
							))}
						</div>
					</Card>
					<Card>
						<Image src={mapImage} alt="map" />
						<Image src={smileMemoji} alt="smiling memoji" />
					</Card>
				</div>
			</div>
		</div>
	);
};
