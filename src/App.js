import React from "react";
import Header from "./components/layout/Header";
import Content from "./components/layout/Content";

const App = () => {
  return (
    <>
      <Header data-testid="header"></Header>
      <Content></Content>
    </>
  );
};

export default App;
