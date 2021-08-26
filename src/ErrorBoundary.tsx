import { Component, ErrorInfo, ReactNode } from "react";
import { Link, Redirect } from "react-router-dom";

interface StateType {
  hasError: boolean;
  redirect: boolean;
}

class ErrorBoundary extends Component {
  state = { hasError: false, redirect: false };

  static getDerivedStateFromError(): StateType {
    return { hasError: true, redirect: false };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    // Log this to Sentry, Azure Monitor, New Relic, TrackJS
    console.error("ErrorBoundary caught an error", error, info);
    setTimeout(() => {
      this.setState({ redirect: true });
    }, 5000);
  }

  render(): ReactNode {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    } else if (this.state.hasError) {
      return (
        <h2>
          This listing has an error. <Link to="/">Click here</Link> to go back
          to the home page.
        </h2>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
