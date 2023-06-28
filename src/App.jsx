import { useEffect } from "react";
import "./App.css";
import { fetchDataFromApi } from "./utils/api";
import { useSelector, useDispatch } from "react-redux";
import { getapiconfiguration } from "./store/HomeSlice";
import Home from "./pages/home/home";
import Error from "./pages/404/error";
import Explore from "./pages/explore/explore";
import SearchResult from "./pages/searchResult/searchResult";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./pages/details/details";
function App() {
  const dispatch = useDispatch();
  const url = useSelector((state) => state);
  console.log(url);

  useEffect(() => {
    fetchApiConfig();
  }, []);
  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration").then((res) => {
      console.log(res);
      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      };
      dispatch(getapiconfiguration(url));
    });
  };
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/search/:query" element={<SearchResult />} exact />
          <Route path="/:mediaType/:id" element={<Details />} exact />
          <Route path="/explore/:mediaType" element={<Explore />} exact />
          <Route path="*" element={<Error />} exact />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
