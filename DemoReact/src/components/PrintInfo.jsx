/* eslint-disable react/prop-types */

const PrintInfo = (props) => {
  return (
    <div className="shadow shadow-slate-700 rounded p-4">
      <h1 className="text-lg">{props.myInfo.myName}</h1>
      <span>{props.myInfo.age}</span>
      <h2>{props.myInfo.address}</h2>
    </div>
  );
};

export default PrintInfo;
