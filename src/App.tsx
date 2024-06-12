import React, { Suspense, lazy } from "react";

import "./App.css";

import Loading from "./components/Loading/Loading";

import HomePage from "./Pages/HomePage";

import { Route, Routes } from "react-router-dom";
import WelcomePage from "./Pages/WelcomePage";
import Redirect from "./components/Redirect/Redirect";

const CountPage = lazy(() => import("./Pages/CountPage"));
const UsersOperationGETPage = lazy(
  () => import("./Pages/UsersOperationGETPage")
);
const UsersAdvancedOperationsPage = lazy(
  () => import("./Pages/UsersAdvancedOperationsPage")
);

const App: React.FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <HomePage />

      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="redux_counter" element={<CountPage />} />
        <Route path="redux_simple_get" element={<UsersOperationGETPage />} />
        <Route
          path="redux_advanced_async"
          element={<UsersAdvancedOperationsPage />}
        />
        <Route path="*" element={<Redirect />} />
      </Routes>
    </Suspense>
  );
};

export default App;
