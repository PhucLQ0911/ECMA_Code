/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-target-blank */
const HeroComponent = (props) => {
	return (
		<div className="bg-hero-img">
			<div className="flex items-center justify-center flex-col h-screen">
				<h1 className="text-white font-bold text-5xl md:text-6xl">
					I&apos;m {props.about.fullname}
				</h1>

				<h2 className="text-white text-xl font-bold mt-2">
					{props.about?.positions?.map((position, index, array) => (
						<span key={index}>
							{position} {index === array.length - 1 ? '' : ', '}
						</span>
					))}
					<span>Developer</span>
				</h2>

				<div className="flex items-center justify-center gap-8 mt-5">
					<a
						href={props.about.linkCv}
						target="_blank"
						className="text-slate-900 hover:text-white hover:bg-slate-900 transition duration-300 ease-out flex items-center justify-center w-12 h-12 bg-white rounded-full"
					>
						<i className="bx bx-file text-3xl"></i>
					</a>

					<a
						href={props.about.linkGit}
						className="text-slate-900 hover:text-white hover:bg-slate-900 transition duration-300 ease-out flex items-center justify-center w-12 h-12 bg-white rounded-full"
						target="_blank"
					>
						<i className="bx bxl-github text-3xl" />
					</a>

					<a
						href={props.about.linkFb}
						target="_blank"
						className="text-slate-900 hover:text-white hover:bg-slate-900 transition duration-300 ease-out flex items-center justify-center w-12 h-12 bg-white rounded-full"
					>
						<i className="bx bxl-facebook text-3xl" />
					</a>
				</div>
			</div>
		</div>
	);
};

export default HeroComponent;
