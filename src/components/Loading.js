import React from "react";
import { Progress } from "reactstrap";

const Loading = () => (
      <div className="centredContainer">
        <Progress bar animated value="100">
          Loading
        </Progress>
      </div>
);

export default Loading;
