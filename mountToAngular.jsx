import NgComponent from "ngcomponent";
import { createRoot } from "react-dom/client";

export function mountToAngular(FC, bindingNames = null, injectNames =[]) {
    const names = bindingNames || (FC.propTypes && (Object.keys(FC.propTypes))) || [];

    return {
        bindings: Object.fromEntries(names.map(_ => [_,"<"])),
        controller: ["$element", ...injectNames, 
          class extends NgComponent {
            static get $$ngIsClass() {
                return true;
            }
            root = undefined;
            isDestroyed = false;
            injectedProps = undefined;
            constructor($element, ...injectedProps) {
                super();
                this.injectedProps = {};
                injectNames.forEach((name, i) => {
                    this.injectedProps[name] = injectedProps[i]
                });
                this.state.root = createRoot(this.$element[0]);
            }
            render() {
                if(!this.isDestroyed) {
                    this.state.root.render(<FC {...this.props} {...this.injectedProps} />)
                }
            }
            componentWillUnmount() {
                this.isDestroyed = true;
                this.state.root.unmount();
            }
          }
    ]
    }
}