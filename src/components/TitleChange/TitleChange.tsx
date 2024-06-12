import React from "react";
import { Helmet } from "react-helmet-async";

const TitleChange: React.FC<{ componentName: string }> = ({
  componentName,
}) => {
  return (
    <Helmet>
      <title>{componentName}</title>
    </Helmet>
  );
};

export default TitleChange;
