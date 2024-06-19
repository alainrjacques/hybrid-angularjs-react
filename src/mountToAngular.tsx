import NgComponent from "ngcomponent";
import { createRoot } from "react-dom/client";
import { FunctionComponent } from "react";

export function mountToAngular<Props extends { [k: string]: any }>(
  FC: FunctionComponent<Props>,
  bindingNames: (keyof Props)[] | null = null,
  injectNames: string[] = [],
) {
  const names =
    bindingNames || (FC.propTypes && (Object.keys(FC.propTypes) as (keyof Props)[])) || [];

  return {
    bindings: Object.fromEntries(names.map(name => [name,"<"])),
    controller: [
      "$element",
      ...injectNames,
      class extends NgComponent<Props, { root: any }> {
        static get $$ngIsClass() {
          return true;
        }
        root: any;
        isDestroyed = false;
        injectedProps: { [name: string]: any };
        constructor(
          private $element: any,
          ...injectedProps: any[]
        ) {
          super();
          this.injectedProps = {};
          injectNames.forEach((name, i) => {
            this.injectedProps[name] = injectedProps[i];
          });
          this.state.root = createRoot(this.$element[0]);
        }
        render() {
          if (!this.isDestroyed) {
            this.state.root.render(<FC {...this.props} {...(this.injectedProps as any)} />);
          }
        }
        componentWillUnmount() {
          this.isDestroyed = true;
          this.state.root.unmount();
        }
      },
    ],
  };
}
