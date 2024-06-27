import { createStore } from "zustand/vanilla";
import { IShellAngularjs } from "@/types";

interface InjectorProps {
  $location: any;
  $rootScope: any;
  shell: any;
}
export const hybridAppStore = createStore<{
  urlRoute: string;
  setUrlRoute: (url: string) => void;
  setInjectors: (props: InjectorProps) => void;
  injectedServices: {
    $scope: any | undefined;
    shell: IShellAngularjs | undefined;
    $location: any | undefined;
  };
}>()((set) => ({
  setUrlRoute: (urlRoute: string) => {
    set(() => ({
      urlRoute,
    }));
  },
  setInjectors: (injected) => {
    set(() => ({
      injectedServices: {
        $location: injected.$location,
        shell: injected.shell,
        $scope: injected.$rootScope,
      },
    }));
  },
  urlRoute: "",
  injectedServices: { $location: undefined, $scope: undefined, shell: undefined },
}));
