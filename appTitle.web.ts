/* eslint-disable simple-header/header */
import definePlugin from "@utils/types";

export default definePlugin({
    name: "AppTitle",
    description:
        "Changes the document title of Discord Web to match the desktop version",
    authors: [
        {
            name: "Myuwi",
            id: 186854817560395778n,
        },
    ],
    patches: [
        {
            find: 'join(" | ")',
            replacement: [
                {
                    // Move "Discord" from the beginning to the end
                    match: /return\[(\i),(\i),(\i)\]/,
                    replace: "return[$2,$3,$1]",
                },
                {
                    // Replace last "|" with "-"
                    match: /(join\(" \| "\))/,
                    replace: '$1.replace(/\\|(?=[^|]*$)/, "-")',
                },
                {
                    // Remove notification count badge
                    match: /(function \i\(\i\)\{)let{notificationCount:\i}.*?}/,
                    replace: '$1return ""}',
                },
            ],
        },
    ],
});
