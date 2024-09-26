import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import { TechIcon } from "@/components/TechIcon";

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

export const AboutSection = () => {
	return (
		<div>
			<SectionHeader
				title="Sobre mim"
				eyebrown="Me conheça"
				description="Saiba o que faço e o que me inspira no mundo do desenvolvimento!"
			/>
			<Card>
				<div>
					<StarIcon />
					<h3>My Reads</h3>
					<p>Explore the books shaping my perspectives</p>
				</div>
				<Image src={bookImage} alt="Book cover" />
			</Card>
			<Card>
				<div>
					<StarIcon />
					<h3>Tecnologias</h3>
					<p>Veja as tecnologias que utilizo para desenvolver</p>
				</div>
				<div>
					{toolboxItems.map((item) => (
						<div key={item.title}>
							<TechIcon component={item.iconType} />
							<span>{item.title}</span>
						</div>
					))}
				</div>
			</Card>
		</div>
	);
};
