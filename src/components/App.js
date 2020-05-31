import React from "react";
import Search from "./Search/Search";
import { getPopularTitles, getTitlesByQuery } from "../services/anime";
import Grid from "./Grid/Grid";
import GridBG from "./GridBG/GridBG";
import ItemPage from "../components/ItemPage/ItemPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { uniqWith } from "lodash";
import { AnimatedSwitch, AnimatedRoute, spring } from "react-router-transition";
import Theme from "./Theme";
import GlobalStyle from "./GlobalStyle";

const switchRule = `
  position: relative;
  & > div {
    position: absolute;
  }
`;

function glide(val) {
  return spring(val, {
    stiffness: 174,
    damping: 24,
  });
}

const pageTransitions = {
  atEnter: {
    offset: 100,
  },
  atLeave: {
    offset: glide(-100),
  },
  atActive: {
    offset: glide(0),
  },
};

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
      <Theme>
        <GlobalStyle />
        <Router>
          <Search setSearch={this.setSearch} />
          <AnimatedSwitch
            css={switchRule}
            mapStyles={(styles) => ({
              transform: `translateX(${styles.offset}%)`,
            })}
            {...pageTransitions}
          >
            <AnimatedRoute
              path="/anime/:id"
              {...pageTransitions}
              component={() => <ItemPage items={animelist} />}
            >
              {/* <ItemPage items={animelist} /> */}
            </AnimatedRoute>
            <Route path="/">
              <Grid
                hasNextPage={hasNextPage}
                isNextPageLoading={isNextPageLoading}
                items={animelist}
                loadNextPage={this.loadNextPage}
              />
              {/* {this.state.animelist.length !== 0 && (
                <GridBG
                  item={
                    this.state.animelist[
                      Math.round(Math.random() * this.state.animelist.length)
                    ]
                  }
                />
              )} */}
            </Route>
          </AnimatedSwitch>
        </Router>
      </Theme>
    );
  }
}

export default App;
