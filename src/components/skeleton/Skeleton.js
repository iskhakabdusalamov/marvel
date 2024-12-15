import "./skeleton.css";

const Skeleton = () => {
  return (
    <div>
      <p className="skeleton__charSelect">
        Please select a character to see information
      </p>
      <div className="skeleton">
        <div className="pulse skeleton__header">
          <div className="pulse skeleton__circle"></div>
          <div className="pulse skeleton__mini"></div>
        </div>
        <div className="pulse skeleton__block"></div>
        <div className="pulse skeleton__block"></div>
        <div className="pulse skeleton__block"></div>
      </div>
    </div>
  );
};

export default Skeleton;
