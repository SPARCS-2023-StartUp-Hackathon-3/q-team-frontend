import { Routes, Route } from "react-router-dom";
import { Main, MyPage } from "./pages";
import NotFound from "./NotFound";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/mypage" element={<MyPage />}></Route>
      <Route path="/*" element={<NotFound />}></Route>
    </Routes>
  );
};

export default MainRoutes;
