const addStyles = {
  width: "100px",
  height: "100px",
  borderRadius: "10px",
  margin: "20px",
  boxShadow:
    "0 5px 5px -3px rgb(0 0 0 / 20%), 0 8px 10px 1px rgb(0 0 0 / 14%), 0 3px 14px 2px rgb(0 0 0 / 12%)",
};
export default function GameButton({ color, click }) {
  return (
    <button
      onClick={() => click(color)}
      className="btn btn-lg"
      style={{
        backgroundImage: `url(${color})`,
        backgroundSize: "cover",
        ...addStyles,
      }}
    ></button>
  );
}
