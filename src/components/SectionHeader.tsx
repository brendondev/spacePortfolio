import { describe } from "node:test";

export const SectionHeader = ({
	title,
	eyebrown,
	description,
}: { title: string; eyebrown: string; description: string }) => {
	return (
		<>
			<div className="fex justify-center">
				<p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center text-transparent bg-clip-text">
					{eyebrown}
				</p>
			</div>
			<h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
				{title}
			</h2>
			<p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">
				{description}
			</p>
		</>
	);
};
