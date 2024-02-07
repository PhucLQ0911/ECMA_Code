const render = (content, target) => {
  target.insertAdjacentHTML('beforeend', content());
};

export { render };
