/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-target-blank */

const AboutComponent = (props) => {
	return (
		<div>
			<section className="container" id="about">
				<div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
					<img src="./src/images/about-image.png" alt="true" />
					<div>
						<h3 className="font-bold text-blue-600 text-2xl">ABOUT ME</h3>
						<h4 className="text-white font-bold text-3xl mt-2">
							I&apos;m {props.about.fullname}
						</h4>
						<p className="text-lg text-slate-500 mt-8">
							{props.about.description}
						</p>
						<p className="text-lg text-slate-500 mt-2">
							{props.about.description}
						</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default AboutComponent;
