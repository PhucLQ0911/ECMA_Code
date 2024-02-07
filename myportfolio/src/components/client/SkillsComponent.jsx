/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-target-blank */

const SkillsComponent = (props) => {
	return (
		<section className="container" id="skills">
			<h3 className="font-bold text-blue-600 text-2xl text-center">
				WHAT I DO
			</h3>
			<h4 className="text-white font-bold text-3xl mt-2 text-center">
				SPECIALIZING IN
			</h4>
			<div className="max-w-[980px] mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-7 mt-8">
				{/* Card skill 1 */}
				{props.skill.map((s, index) => (
					<div
						key={index}
						className="flex flex-col gap-8 bg-slate-800/80 rounded-xl px-6 py-5"
					>
						<div className="flex gap-4">
							<img
								className="p-3 rounded-md bg-slate-700"
								src={s.linkImg}
								alt="true"
							/>
							<h5 className="text-2xl font-semibold text-white">
								{s.title} <br />
							</h5>
						</div>
						<p className="text-lg text-slate-400">{s.skills}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default SkillsComponent;
