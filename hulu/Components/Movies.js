import { useQuery } from "@tanstack/react-query";
import Thumbnails from "./Thumbnails";
import { API_KEY } from "../utils/request";
import axios from "axios";

const Movies = ({ resData }) => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["cineData"],
    queryFn: async () => {
      return resData;
    },
  });
  if (isPending) return <div>loading...</div>;
  if (isError) {
    return <div>Error occur while fetching check your internet</div>;
  }
  return (
    <>
      <div>
        <Thumbnails result={data} />
      </div>
    </>
  );
};

export default Movies;
