import { skills } from '../data';

const Skills = () => {
	return `<section class="container" id="skills">
            <h3 class="font-bold text-blue-600 text-2xl text-center">WHAT I DO</h3>
            <h4 class="text-white font-bold text-3xl mt-2 text-center">
              SPECIALIZING IN
            </h4>
            <div
              class="max-w-[980px] mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-7 mt-8"
            >
              <!-- Card skill 1 -->
              <div class="flex flex-col gap-8 bg-slate-800/80 rounded-xl px-6 py-5">
                <div class="flex gap-4  justify-center">
                  <img
                    class="p-3 rounded-md bg-slate-700"
                    src="./src/images/skill-fe.svg"
                    alt=""
                  />
                  <h5 class="text-2xl font-semibold text-white">
                    Front-end <br />Developer
                  </h5>
                </div>
                <p class="text-lg text-slate-400 text-center">
                  ${skills.frontEnds
										.map((skill, index, array) =>
											index === array.length - 1 ? `${skill}` : `${skill}, `
										)
										.join('')}
                </p>
              </div>

              <!-- Card skill 2 -->
              <div class="flex flex-col gap-8 bg-slate-800/80 rounded-xl px-6 py-5">
                <div class="flex gap-4 justify-center">
                  <img
                    class="p-3 rounded-md bg-slate-700"
                    src="./src/images/skill-ui.svg"
                    alt=""
                  />
                  <h5 class="text-2xl font-semibold text-white ">
                    Back-end <br />Developer
                  </h5>
                </div>
                <p class="text-lg text-slate-400 text-center">
                ${skills.backEnds
									.map((skill, index, array) =>
										index === array.length - 1 ? `${skill}` : `${skill}, `
									)
									.join('')}
                </p>
              </div>
            </div>
          </section>`;
};

export default Skills;
