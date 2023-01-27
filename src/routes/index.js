import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { Main, MyPage } from "./pages";
import NotFound from "./NotFound";
import { useEffect } from "react";
import { useCookies } from 'react-cookie';

const MainRoutes = () => {
  const [cookies] = useCookies(["loginkey"]);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if(cookies.loginkey === undefined ){
        navigate("/login");
      } else if ( cookies.loginkey ){
        navigate("/main");
      } else {
        console.log("correct routes");
      }
  }, [cookies.sessionKey, location.pathname]);


  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/mypage" element={<MyPage />}></Route>
      <Route path="/*" element={<NotFound />}></Route>
    </Routes>
  );
};

export default MainRoutes;
