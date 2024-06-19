import { Component, ReactNode, ErrorInfo } from "react";

interface Props {
  children: ReactNode;
  errorUI?: ReactNode;
}
interface State {
  hasError: boolean;
}
// Error boundary must be a Class component (for now)
class ErrorBoundary extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  public static getDerivedStateFromError(): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (!this.state.hasError) return this.props.children;
    return this.props.errorUI ? this.props.errorUI : <>Oops! error</>;
  }
}

export default ErrorBoundary;
