import Home from "./routes/Home/Home.components";
import { Route, Routes } from "react-router";

const App = () => {


  return (
    <>
      <nav> Navigation</nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>

    </>
  );
};

export default App;
