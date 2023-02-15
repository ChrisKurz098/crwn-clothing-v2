import NavigationBar from "./routes/NavigationBar/NavigationBar.component";
import Home from "./routes/Home/Home.components";
import UserAuth from "./routes/UserAuth/UserAuth.component";
import { Route, Routes } from "react-router";

import Shop from "./routes/Shop/Shop.component";

const App = () => {


  return (
    <>
      <Routes>
        <Route path='/' element={<NavigationBar />}>
          <Route index element={<Home/>} />
          <Route path="shop" element={<Shop/>}/>
          <Route path="/signin" element={<UserAuth/>} />
        </Route>
      </Routes>

    </>
  );
};

export default App;
