import Thumbnails from "./Thumbnails";

const Movies = ({ resData }) => {
  return (
    <>
      <div>
        <Thumbnails result={resData} />
      </div>
    </>
  );
};

export default Movies;
