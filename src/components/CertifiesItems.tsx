import { twMerge } from "tailwind-merge";
import { TechIcon } from "./TechIcon";

export const CertifiesItems = ({
	items,
	className,
	itemsWrapperClassName,
}: {
	items: {
		title: string;
		iconType: React.ElementType;
		link: string;
	}[];
	className?: string;
	itemsWrapperClassName?: string;
}) => {
	return (
		<div className={twMerge("flex gap-8 flex-nowrap", className)}>
			{items.map((item) => (
				<a key={item.title} href={item.link} className="block">
					<div
						className={twMerge(
							"items-center justify-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg h-[180px] w-[200px] flex flex-wrap",
							itemsWrapperClassName,
						)}
					>
						<TechIcon component={item.iconType} />
						<span className="font-semibold">{item.title}</span>
					</div>
				</a>
			))}
		</div>
	);
};
