import errorGif from "./error.gif";

const ErrorMessage = () => {
  return (
    <div>
      <img
        style={{
          display: "block",
          width: "250px",
          height: "250px",
          objectFit: "contain",
          margin: "0 auto",
        }}
        src={errorGif}
        alt="Error"
      />
    </div>
  );
};

export default ErrorMessage;
