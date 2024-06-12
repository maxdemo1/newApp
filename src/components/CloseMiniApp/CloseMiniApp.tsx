import React from "react";
import { setOpenServicesComponent } from "../../types/types";

const CloseMiniApp: React.FC<setOpenServicesComponent> = ({
  setOpenServices,
  appName,
}) => {
  return (
    <button
      onClick={() => {
        setOpenServices((prev) => ({ ...prev, [appName]: false }));
      }}
    >
      Close miniApp
    </button>
  );
};

export default CloseMiniApp;
