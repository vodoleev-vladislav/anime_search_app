import React, { useState, useEffect } from "react";
import Search from "./Search/Search";
import Grid from "./Grid/Grid";
import { getPopularTitles } from "../services/anime";
import { ThemeConsumer } from "styled-components";

// const App = () => {
//   const [search, setSearch] = useState("");
//   const [animelist, setAnimelist] = useState([]);
//   const [offset, setOffset] = useState(0);
//   const [hasNextPage, setHasNextPage] = useState(true);
//   const [isNextPageLoading, setIsNextPageLoading] = useState(false);

//   const loadNextPage = async () => {
//     setIsNextPageLoading(true);
//     const response = await getPopularTitles(offset);
//     (() => {
//       setOffset(offset + 1);
//       setIsNextPageLoading(false);
//       setAnimelist([...animelist, ...response.animelist]);
//       setHasNextPage(response.hasNextPage);
//     })();
//   };

//   return (
//     <div>
//       <Search setSearch={setSearch} />
//       <Grid
//         hasNextPage={hasNextPage}
//         isNextPageLoadinh={isNextPageLoading}
//         items={animelist}
//         loadNextPage={loadNextPage}
//       />
//     </div>
//   );
// };

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
      const response = await getPopularTitles(this.state.offset);
      await this.setState({
        offset: ++this.state.offset,
        isNextPageLoading: false,
        animelist: [...this.state.animelist, ...response.animelist],
        hasNextPage: response.hasNextPage,
      });
    }
  };

  setSearch = (value) => {
    this.setState({ search: value });
  };

  render() {
    const { hasNextPage, isNextPageLoading, animelist } = this.state;
    return (
      <div>
        <Search setSearch={this.setSearch} />
        <Grid
          hasNextPage={hasNextPage}
          isNextPageLoadinh={isNextPageLoading}
          items={animelist}
          loadNextPage={this.loadNextPage}
        />
      </div>
    );
  }
}

export default App;
