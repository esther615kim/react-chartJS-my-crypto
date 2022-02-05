import React from "react";
import { useParams } from "react-router-dom";

const SingleNews = () => {
  const { id } = useParams();
  return (
    <div>
      <h3>Single news page:{id}th News</h3>
    </div>
  );
};

export default SingleNews;
