/* eslint-disable simple-header/header */
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
            find: "Duplicate keyboard shortcuts defined:",
            replacement: {
                match: "!c.isPlatformEmbedded",
                replace: "false",
            },
        },
    ],
});
