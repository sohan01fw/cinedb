import Thumbnails from "./Thumbnails";

const Movies = ({ datas }) => {
  return (
    <>
      <div>
        <Thumbnails results={datas} />;
      </div>
    </>
  );
};

export default Movies;
