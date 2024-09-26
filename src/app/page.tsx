import { AboutSection } from "@/sections/About";
import { Header } from "@/sections/Header";
import { Heemeraldction } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
export default function Home() {
	return (
		<div>
			<Header />
			<Heemeraldction />
			<ProjectsSection />
			<TapeSection />
			<AboutSection />
		</div>
	);
}
