import { info } from '../data';

const Hero = () => {
  return `<div class="bg-hero-img">
            <div class="flex items-center justify-center flex-col h-screen">
              <h1 class="text-white font-bold text-5xl md:text-6xl">
                I'm ${info.fullname}
              </h1>
              <h2 class="text-white text-3xl font-bold mt-2">${info.positions
                .map((position, index, array) =>
                  index === array.length - 1 ? `${position}` : `${position}, `
                )
                .join('')} Developer</h2>
              <div class="flex items-center justify-center gap-8 mt-5">
                <a
                  href="${info.linkIg}"
                  class="text-slate-900 hover:text-white hover:bg-slate-900 transition duration-300 ease-out flex items-center justify-center w-12 h-12 bg-white rounded-full"
                >
                  <i class="bx bxl-instagram text-3xl"></i>
                </a>
                <a
                  href="${info.linkGit}"
                  class="text-slate-900 hover:text-white hover:bg-slate-900 transition duration-300 ease-out flex items-center justify-center w-12 h-12 bg-white rounded-full"
                >
                  <i class="bx bxl-github text-3xl"></i>
                </a>
                <a
                  href="${info.linkFb}"
                  class="text-slate-900 hover:text-white hover:bg-slate-900 transition duration-300 ease-out flex items-center justify-center w-12 h-12 bg-white rounded-full"
                >
                  <i class="bx bxl-facebook text-3xl"></i>
                </a>
              </div>
            </div>
          </div>`;
};

export default Hero;
