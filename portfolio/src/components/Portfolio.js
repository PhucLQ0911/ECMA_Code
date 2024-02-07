const Portfolio = (project) => {
  console.log(project);
  return `<div class="flex flex-col bg-slate-800/80 rounded-xl overflow-hidden">
            <img src="${project.imgDemo}" alt="" />
            <div class="px-5 py-4">
              <h4 class="text-2xl font-medium text-white">
                ${project.nameProject}
              </h4>
              <div class="flex flex-row justify-around">
                <a
                  href="${project.linkDemo}"
                  class="inline-flex mt-4 px-4 py-3 font-semibold text-sm text-white rounded-md bg-blue-500 hover:scale-105 hover:bg-blue-600 active:scale-95 transition-all duration-300"
                  >View Demo</a
                >
                <a
                  href="${project.linkSourceCode}"
                  class="inline-flex mt-4 px-4 py-3 font-semibold text-sm text-white rounded-md bg-blue-500 hover:scale-105 hover:bg-blue-600 active:scale-95 transition-all duration-300"
                  >Source Code</a
                >
              </div>
            </div>
          </div>`;
};

export default Portfolio;
