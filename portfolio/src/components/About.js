import { info } from '../data';

const About = () => {
  return `<section class="container" id="about">
            <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
              <img src="./src/images/about-image.png" alt="" />
              <div>
                <h3 class="font-bold text-blue-600 text-2xl">ABOUT ME</h3>
                <h4 class="text-white font-bold text-3xl mt-2">I'm ${info.fullname}</h4>
                <p class="text-lg text-slate-500 mt-8">
                  ${info.des1}
                </p>
                <p class="text-lg text-slate-500 mt-2">
                ${info.des2}
                </p>
              </div>
            </div>
          </section>`;
};

export default About;
