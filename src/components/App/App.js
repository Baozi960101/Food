import React, { useEffect, useState } from "react";
import Cover from "../../Page/Home";
import TopHeadder from "../Header";
import Bottom from "../Bottom";
import FoodHome from "../../Page/Food/Home/HomeIndex";
import DetailedArticle from "../../Page/Food/Home/DetailedArticleIndex";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import { SlugContext } from "../../context";
import { ScrollToTop } from "../../ScrollToTop";

export default function App() {
  const [fooDSlug, setFooDSlug] = useState("");

  function BlogPost() {
    let { slug } = useParams();
    useEffect(() => {
      setFooDSlug(slug);
    }, []);

    return <DetailedArticle />;
  }

  return (
    <>
      <SlugContext.Provider value={{ fooDSlug }}>
        <Router>
          <ScrollToTop />
          <TopHeadder />
          <Switch>
            <Route exact path="/">
              <Cover />
            </Route>
            <Route exact path="/food">
              <FoodHome />
            </Route>
            <Route path="/food/post/:slug">
              <BlogPost />
            </Route>
          </Switch>
          <Bottom />
        </Router>
      </SlugContext.Provider>
    </>
  );
}
