import React from "react";
import { Link, Redirect } from "react-router-dom";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, redirect: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidUpdate() {
    if (this.state.hasError)
      setTimeout(() => this.setState({ redirect: true }), 5000);
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          {this.state.redirect && <Redirect push to="/" />}
          <h1>
            {/* {this.props.errors((error) => (
              <>error.details</>
            ))} */}
            Something went wrong. Click <Link to="/">here</Link> to go back to
            the home page or wait five seconds
          </h1>
        </>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
