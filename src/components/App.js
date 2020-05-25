import React from "react";
import Search from "./Search/Search";
import { getPopularTitles, getTitlesByQuery } from "../services/anime";
import Grid from "./Grid/Grid";
import ItemPage from "../components/ItemPage/ItemPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { uniqWith } from "lodash";

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
        // animelist: [...this.state.animelist, ...response.animelist],
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
      <Router>
        <div>
          <Search setSearch={this.setSearch} />
          <Switch>
            <Route path="/title/:id">
              <ItemPage items={animelist} />
            </Route>
            <Route path="/">
              <Grid
                hasNextPage={hasNextPage}
                isNextPageLoadinh={isNextPageLoading}
                items={animelist}
                loadNextPage={this.loadNextPage}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
