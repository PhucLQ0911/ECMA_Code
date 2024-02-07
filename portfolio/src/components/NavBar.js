import { info } from '../data';
const NavBar = () => {
  return `<nav id="navbar">
            <div class="container flex items-center justify-between">
              <a href="#">
                <img src="${info.logo}" alt="" />
              </a>
              <input
                type="checkbox"
                class="peer hidden"
                name="hamburger"
                id="hamburger"
              />
              <label
                class="peer-checked:hamburger block cursor-pointer p-2 md:hidden"
                for="hamburger"
              >
                <div
                  class="m-auto h-0.5 w-6 rounded bg-white transition duration-300"
                ></div>

                <div
                  class="m-auto mt-2 h-0.5 w-6 rounded bg-white transition duration-300"
                ></div>
              </label>

              <div
                class="absolute inset-x-0 top-20 flex -translate-x-full flex-col items-center gap-8 bg-slate-800 py-8 opacity-0 transition duration-300 peer-checked:translate-x-0 peer-checked:opacity-100 md:relative md:top-0 md:translate-x-0 md:flex-row md:bg-transparent md:py-0 md:opacity-100"
              >
                <a
                  href="#about"
                  class="text-white hover:border-b hover:border-white hover:pb-2 transition-all duration-300"
                  >ABOUT</a
                >
                <a
                  href="#skills"
                  class="text-white hover:border-b hover:border-white hover:pb-2 transition-all duration-300"
                  >WHAT I DO</a
                >
                <a
                  href="#portfolio"
                  class="text-white hover:border-b hover:border-white hover:pb-2 transition-all duration-300"
                  >WORK</a
                >
                <a
                  href="#contact"
                  class="text-white hover:border-b hover:border-white hover:pb-2 transition-all duration-300"
                  >CONTACT</a
                >
              </div>
            </div>
          </nav>`;
};

export default NavBar;
