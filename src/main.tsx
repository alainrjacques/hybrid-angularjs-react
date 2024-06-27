import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ErrorBoundary from "@/components/ErrorBoundary";
import { RouteProviderDefined } from "@/router";

const CONTAINER = document.getElementById("react-view");

createRoot(CONTAINER!).render(
  <StrictMode>
    <ErrorBoundary>
      <RouteProviderDefined />
    </ErrorBoundary>
  </StrictMode>
);
