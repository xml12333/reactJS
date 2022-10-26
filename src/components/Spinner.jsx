import spinner from "../assets/spinner.gif";
const Spinner = () => {
  return (
    <div className="spinner">
      <img  width={180} src={spinner} alt="Loading..." />
    </div>
  );
};

export default Spinner;
