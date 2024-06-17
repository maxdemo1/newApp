import React from "react";
import image from "../../assets/picture/loading/loading.svg";

const Loading: React.FC = () => {
  return (
    <div>
      <img src={image} alt="Loading" width={100} height={100} />
    </div>
  );
};

export default Loading;
