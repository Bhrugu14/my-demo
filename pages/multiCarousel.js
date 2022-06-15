import { NavBar } from "../component";
const MultiCarousel = () => {
  return (
    <div className="mainContainer">
      <NavBar />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          position: "absolute",
          bottom: 0,
          width: "100vw",
          overflow: "scroll",
        }}
      >
        {[...Array(50)].map((i, k) => {
          return (
            <div key={k} className="bottomCard">
              a
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default MultiCarousel;
