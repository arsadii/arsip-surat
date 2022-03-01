import React from "react";
import { render } from "react-dom";
import { createInertiaApp } from "@inertiajs/inertia-react";
import { Toaster } from "react-hot-toast";
import { RecoilRoot } from "recoil";

createInertiaApp({
    resolve: (name) => require(`./Pages/${name}`),
    setup({ el, App, props }) {
        render(
            <RecoilRoot>
                <Toaster />
                <App {...props} />
            </RecoilRoot>,
            el
        );
    },
});
