import React, { Suspense, lazy, useEffect, useState } from "react";

import "./App.css";
import { OpenServices, serviceStateChanger } from "./types/types";
import Loading from "./components/Loading/Loading";
import NavButtons from "./components/NavButtons/NavButtons";
import TitleChange from "./components/TitleChange/TitleChange";
const Count = lazy(() => import("./components/Count/Count"));
const UsersOperationGET = lazy(
  () => import("./components/UsersOperationGET/UsersOperationGET")
);
const UsersAdvancedOperations = lazy(
  () => import("./components/UserOperations/UsersAdvancedOperations")
);

const App: React.FC = () => {
  const [openServices, setOpenServices] = useState<OpenServices>({
    Count: false,
    UsersOperationGET: false,
    UsersAdvancedOperations: false,
  });

  useEffect(() => {}, [openServices]);

  const serviceStateChanger: serviceStateChanger = (nameOfService) => {
    const servicesNames = Object.keys(openServices);
    const newObj: { [key: string]: boolean } = {};
    servicesNames.forEach((name: string) => {
      newObj[name] = false;
    });

    setOpenServices((prev) => {
      return { ...prev, ...newObj, [nameOfService]: true };
    });
  };

  return (
    <Suspense fallback={<Loading />}>
      <TitleChange componentName="AppCollection" />
      <NavButtons serviceStateChanger={serviceStateChanger} />

      {openServices.Count && <Count setOpenServices={setOpenServices} />}
      {openServices.UsersOperationGET && (
        <UsersOperationGET setOpenServices={setOpenServices} />
      )}
      {openServices.UsersAdvancedOperations && (
        <UsersAdvancedOperations setOpenServices={setOpenServices} />
      )}
    </Suspense>
  );
};

export default App;
