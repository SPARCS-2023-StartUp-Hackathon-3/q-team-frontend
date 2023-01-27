import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { Main, MyPage, Onboarding, Sign } from "./pages";
import NotFound from "./NotFound";
import { useEffect } from "react";
import { useCookies } from "react-cookie";

const MainRoutes = () => {
  const [cookies] = useCookies(["loginkey"]);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // 로그인 되었을 때 -> 로그인, 회원가입, 렌딩페이지 접근 불가
    if (
      cookies.loginkey &&
      (location.pathname === "/login" ||
        location.pathname === "/login/signup" ||
        location.pathname === "/")
    ) {
      navigate("/main");
    }
    // 로그인 안 되었을 때 -> 로그인, 회원가입, 렌딩 페이지만 접근 가능
    else if (
      cookies.loginkey === undefined &&
      location.pathname !== "/login" &&
      location.pathname !== "/login/signup" &&
      location.pathname !== "/"
    ) {
      console.log(cookies.loginkey);
      navigate("/login");
    } else {
      console.log("correct routes");
    }
  }, [cookies.sessionKey, location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<Onboarding />} />
      <Route path="/main" element={<Main />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/login/*" element={<Sign />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default MainRoutes;
