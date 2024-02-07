/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-target-blank */

const ContactComponent = (props) => {
	return (
		<section className="container" id="contact">
			<div className="max-w-5xl mx-auto bg-slate-800/80 rounded-xl">
				<div className="text-center py-16">
					<h3 className="text-2xl md:text-3xl font-bold text-white">
						Have any project in mind ?
					</h3>
					<button className="mt-4 px-4 py-3 font-semibold text-sm text-white rounded-md bg-blue-500 hover:scale-105 hover:bg-blue-600 active:scale-95 transition-all duration-300">
						Contact me
					</button>
					{props.contacts.map((contact, index) => (
						<div key={index}>
							<h2 className="text-xl text-white mt-3">
								{contact.title} - {contact.value}
							</h2>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ContactComponent;
