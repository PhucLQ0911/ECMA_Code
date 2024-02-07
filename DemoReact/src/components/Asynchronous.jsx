function Asynchronous() {
  const loadScript = () => {
    console.log('Load function ');
  };

  const isLoadScript = () => {
    console.log('Load function done!');
  };

  const doFunction = () => {
    loadScript();
    isLoadScript();
  };

  return doFunction();
}

export default Asynchronous;
