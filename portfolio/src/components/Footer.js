import { info } from '../data';

const Footer = () => {
  return `<footer class="bg-slate-800/80">
            <div class="container py-6">
              <img class="mx-auto" src="${info.logo}" alt="" />
              <p class="text-lg font-medium text-white text-center mt-2">
                Copyright 2024 ${info.fullname}.
              </p>
            </div>
          </footer>`;
};

export default Footer;
