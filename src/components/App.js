import React from "react";
import Header from "./Header/Header";
import { getPopularTitles, getTitlesByQuery } from "../services/anime";
import Grid from "./Grid/Grid";
import ItemPage from "../components/ItemPage/ItemPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { uniqWith } from "lodash";
import AnimatedSwitch from "./AnimatedSwitch/AnimatedSwitch";
import Theme from "./Theme";
import GlobalStyle from "./GlobalStyle";

class App extends React.Component {
  state = {
    search: "",
    animelist: [],
    offset: 0,
    hasNextPage: true,
    isNextPageLoading: false,
  };

  loadNextPage = async () => {
    if (!this.state.isNextPageLoading) {
      await this.setState({ isNextPageLoading: true });
      let response;
      if (!this.state.search) {
        response = await getPopularTitles(this.state.offset);
      } else {
        response = await getTitlesByQuery(this.state.search, this.state.offset);
      }
      await this.setState({
        offset: ++this.state.offset,
        isNextPageLoading: false,
        animelist: uniqWith(
          [...this.state.animelist, ...response.animelist],
          (a, b) => a.id === b.id
        ),
        hasNextPage: response.hasNextPage,
      });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.search !== prevState.search) {
      this.setState({ offset: 0, animelist: [] });
    }
  }

  setSearch = (value) => {
    this.setState({ search: value });
  };

  render() {
    const { hasNextPage, isNextPageLoading, animelist } = this.state;
    return (
      <Theme>
        <GlobalStyle />
        <Router>
          <Header setSearch={this.setSearch} />
          <AnimatedSwitch>
            <Route path="/anime/:id">
              <ItemPage items={animelist} />
            </Route>
            <Route path="/">
              <Grid
                hasNextPage={hasNextPage}
                isNextPageLoading={isNextPageLoading}
                items={animelist}
                loadNextPage={this.loadNextPage}
              />
            </Route>
          </AnimatedSwitch>
        </Router>
      </Theme>
    );
  }
}

export default App;
