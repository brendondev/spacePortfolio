export const Header = () => {
	return (
		<div className="flex justify-center items-center relative top-3 z-10">
			<nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur-md">
				<a href="/#" className="nav-item">
					Home
				</a>
				<a href="/#" className="nav-item">
					Projetos
				</a>
				<a href="/#" className="nav-item">
					Sobre mim
				</a>
				<a
					href="/contato"
					className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
				>
					Contato
				</a>
			</nav>
		</div>
	);
};
