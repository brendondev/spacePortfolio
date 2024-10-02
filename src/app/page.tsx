import { AboutSection } from "@/sections/About";
import { Header } from "@/sections/Header";
import { Heemeraldction } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
export default function Home() {
	return (
		<div>
			<Header />
			<Heemeraldction />
			<ProjectsSection />
			<TapeSection />
			<AboutSection />
			<ContactSection />
			<Footer />
		</div>
	);
}
