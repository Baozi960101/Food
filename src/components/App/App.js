import React, { useEffect, useState } from "react";
import TopHeadder from "../Header";
import Bottom from "../Bottom/Bottom";
import Food from "../../Page/Food";
import Travel from "../../Page/Travel";
import Healthy from "../../Page/Healthy";
import Casual from "../../Page/Casual";
import DetailedArticle from "../../Page/SingleArticle/SingleArticle";
import {
  HashRouter as Router,
  Switch,
  Route,
  useParams,
  useLocation,
} from "react-router-dom";
import { SlugContext } from "../../global/context";
import { ScrollToTop } from "../../global/ScrollToTop";
import Slideshow from "../../global/Slideshow";

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
              <Food />
            </Route>
            <Route exact path="/food">
              <Food />
            </Route>
            <Route exact path="/travel">
              <Travel />
            </Route>
            <Route exact path="/casual">
              <Casual />
            </Route>
            <Route exact path="/healthy">
              <Healthy />
            </Route>
            <Route exact path="/:slug">
              <BlogFoodPost />
            </Route>
          </Switch>
          <Bottom />
        </Router>
      </SlugContext.Provider>
    </>
  );
}
