import { FunctionComponent, ReactNode } from "react";

export interface Routes {
  path: string;
  element: ReactNode;
  searchName?: string;
  module?: "Management";
  /** @deprecated */
  angularjsOptions?: {
    duplicateName?: boolean;
    name: string;
    Component: FunctionComponent<any>;
    excludeFromSearch?: boolean;
    bindingNames?: Array<string>;
  };
}
