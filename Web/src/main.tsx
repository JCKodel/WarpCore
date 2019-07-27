import * as m from "mithril";
import { App } from "./warpCore/src/components";

export class Main {
    view() {
        return (
            <App />
        );
    }
}

m.mount(document.body as HTMLElement, App);