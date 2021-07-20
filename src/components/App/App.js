import React, { useEffect, useState } from "react";
import Cover from "../../Page/Home";
import TopHeadder from "../Header";
import Bottom from "../Bottom";
import FoodHome from "../../Page/Food/Home/HomeIndex";
import DetailedArticle from "../../Page/Food/Home/DetailedArticleIndex";
import { ArticleId } from "../../API";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";

export default function App() {
  function BlogPost() {
    const [idPost, setIdPost] = useState("");

    let { slug } = useParams();

    useEffect(() => {
      ArticleId(slug).then((data) => {
        console.log(data);
      });
    }, []);

    return <DetailedArticle />;
  }

  return (
    <>
      <Router>
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
    </>
  );
}
