import React from 'react';
import { Link, useParams } from "react-router-dom";
const SingleCoinPage = () => {
  const { id } = useParams();

  return <div>
      <Link to={"/"}>
        <h4>Go back</h4>
      </Link>
      <h3>About {id}</h3>
  </div>;
};

export default SingleCoinPage;
