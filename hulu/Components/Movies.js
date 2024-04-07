import { useQuery } from "@tanstack/react-query";
import Thumbnails from "./Thumbnails";
import { API_KEY } from "../utils/request";
import axios from "axios";

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
