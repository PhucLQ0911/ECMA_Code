/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-target-blank */

const ProjectComponent = (props) => {
	return (
		<section className="container" id="portfolio">
			<h3 className="font-bold text-blue-600 text-2xl text-center">
				PORTFOLIO
			</h3>
			<h4 className="text-white font-bold text-3xl mt-2 text-center">
				LATEST PROJECT
			</h4>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-8">
				{props.projects.map((project, index) => (
					<div
						key={index}
						className="flex flex-col bg-slate-800/80 rounded-xl overflow-hidden"
					>
						<img src={project.linkImg} alt="true" />
						<div className="px-5 py-4">
							<h4 className="text-2xl font-medium text-white text-center">
								{project.title}
							</h4>
							<div className="flex flex-row justify-around">
								<a
									target="_blank"
									href={project.linkDemo}
									className="inline-flex mt-4 px-4 py-3 font-semibold text-sm text-white rounded-md bg-blue-500 hover:scale-105 hover:bg-blue-600 active:scale-95 transition-all duration-300 cursor-pointer"
								>
									View Demo
								</a>
								<a
									target="_blank"
									href={project.linkCode}
									className="inline-flex mt-4 px-4 py-3 font-semibold text-sm text-white rounded-md bg-blue-500 hover:scale-105 hover:bg-blue-600 active:scale-95 transition-all duration-300 cursor-pointer"
								>
									Source Code
								</a>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default ProjectComponent;
