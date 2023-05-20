/* eslint-disable header/header */
import definePlugin from "@utils/types";

export default definePlugin({
    name: "RestoreCtrlTab",
    description: "Restores Ctrl+Tab and Ctrl+Shift+Tab keybinds on Discord Web",
    authors: [
        {
            name: "Myuwi",
            id: 186854817560395778n,
        },
    ],
    patches: [
        {
            find: '"ctrl+shift+tab","ctrl+tab",',
            replacement: {
                match: '"ctrl+shift+tab","ctrl+tab",',
                replace: "",
            },
        },
    ],
});
