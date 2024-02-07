const NavbarComponent = () => {
	return (
		<nav className="bg-slate-800">
			<div className="container flex items-center justify-between">
				<a href="true">
					<img src="./src/images/logo.svg" alt="true" />
				</a>
				<input
					type="checkbox"
					className="peer hidden"
					name="hamburger"
					id="hamburger"
				/>
				<label
					className="peer-checked:hamburger block cursor-pointer p-2 md:hidden"
					htmlFor="hamburger"
				>
					<div className="m-auto h-0.5 w-6 rounded bg-white transition duration-300"></div>

					<div className="m-auto mt-2 h-0.5 w-6 rounded bg-white transition duration-300"></div>
				</label>

				<div className="absolute inset-x-0 top-20 flex -translate-x-full flex-col items-center gap-8 bg-slate-800 py-8 opacity-0 transition duration-300 peer-checked:translate-x-0 peer-checked:opacity-100 md:relative md:top-0 md:translate-x-0 md:flex-row md:bg-transparent md:py-0 md:opacity-100">
					<a
						href="#about"
						className="text-white hover:border-b hover:border-white hover:pb-2 transition-all duration-300"
					>
						ABOUT
					</a>
					<a
						href="#skills"
						className="text-white hover:border-b hover:border-white hover:pb-2 transition-all duration-300"
					>
						WHAT I DO
					</a>
					<a
						href="#portfolio"
						className="text-white hover:border-b hover:border-white hover:pb-2 transition-all duration-300"
					>
						WORK
					</a>
					<a
						href="#contact"
						className="text-white hover:border-b hover:border-white hover:pb-2 transition-all duration-300"
					>
						CONTACT
					</a>
				</div>
			</div>
		</nav>
	);
};

export default NavbarComponent;
