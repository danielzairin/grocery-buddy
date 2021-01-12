function Card({ background, children }) {
  return (
    <div
      className={`card shadow ${background === "dark" ? "text-light" : null}`}
    >
      <div className={`card-body bg-${background}`}>{children}</div>
    </div>
  );
}

export default Card;
