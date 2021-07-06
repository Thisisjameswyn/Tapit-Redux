import React from "react";
import Header from "./Header";
import KegControl from "./KegControl";

function App()
{
  return (
    <React.Fragment>
      <h1>It's a tap room!</h1>
      <Header />
      <KegControl />
    </React.Fragment>
  );
}
export default App;