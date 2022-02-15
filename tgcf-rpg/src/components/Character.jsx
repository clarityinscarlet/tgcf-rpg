import xl from "../assets/xl.png";

const Character = () => {
  const charaName = "xie lian";

  return (
    <div className="character">
      <img
        className="charaimg"
        src={xl}
        alt={`playable character:${charaName}`}
      />
      {charaName}
    </div>
  );
};

export default Character;
