import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import AppFooter from "./components/AppFooter";
import AppMainContainer from "./components/AppMainContainer";

const AppLayout = () => {
  return (
    <div className="layout">
      <Header />
      <AppMainContainer />
      <AppFooter />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
