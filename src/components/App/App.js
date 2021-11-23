import React, { useEffect, useState } from "react";
import TopHeadder from "../Header";
import Bottom from "../Bottom";
import FoodHome from "../../Page/Food/Home/HomeIndex";
import TravelHome from "../../Page/Travel/Home/HomeIndex";
import DetailedArticle from "../../Page/Food/Home/DetailedArticleIndex";
import TravelDetailedArticle from "../../Page/Travel/Home/DetailedArticleIndex";
import {
  HashRouter as Router,
  Switch,
  Route,
  useParams,
  useLocation,
} from "react-router-dom";
import { SlugContext } from "../../context";
import { ScrollToTop } from "../../ScrollToTop";
import Slideshow from "../../Page/Home/Header/Slideshow";

export default function App() {
  const [fooDSlug, setFooDSlug] = useState("");
  const [travelSlug, setTravelSlug] = useState("");

  function BlogFoodPost() {
    let { slug } = useParams();
    let location = useLocation();
    useEffect(() => {
      setFooDSlug(slug);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);
    return <DetailedArticle />;
  }

  function BlogTravelPost() {
    let { slug } = useParams();
    let location = useLocation();
    useEffect(() => {
      setTravelSlug(slug);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);
    return <TravelDetailedArticle />;
  }

  return (
    <>
      <SlugContext.Provider
        value={{ fooDSlug, setFooDSlug, travelSlug, setTravelSlug }}
      >
        <Router>
          <TopHeadder />
          <ScrollToTop />
          <Slideshow />
          <Switch>
            <Route exact path="/">
              {/* <Cover /> */}
              <FoodHome />
            </Route>
            <Route exact path="/food">
              <FoodHome />
            </Route>
            <Route exact path="/travel">
              <TravelHome />
            </Route>
            <Route path="/food/post/:slug">
              <BlogFoodPost />
            </Route>
            <Route path="/travel/post/:slug">
              <BlogTravelPost />
            </Route>
          </Switch>
          <Bottom />
        </Router>
      </SlugContext.Provider>
    </>
  );
}
