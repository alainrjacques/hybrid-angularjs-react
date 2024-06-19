import { StrictMode, FunctionComponent, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { mountToAngular } from "./mountToAngular";
import ErrorBoundary from "./components/ErrorBoundary";

export function buildReactApp(
  Page: FunctionComponent<any>,
  injectNames: string[] = [],
  bindingNames: string[] = []
) {
    console.log("TESTTER")
  return mountToAngular(
    ({ ...props }) => {
      return (
        <StrictMode>
     
            <ErrorBoundary>
              <Suspense fallback={<>Loading...</>}>
                <Page {...props} />
              </Suspense>
            </ErrorBoundary>
       
        </StrictMode>
      );
    },
    bindingNames,
    injectNames
  );
}
