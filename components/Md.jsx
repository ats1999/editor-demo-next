import React from "react";
import dynamic from "next/dynamic";

// import "@toast-ui/editor/dist/toastui-editor.css";
// import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";
// import "@toast-ui/editor/dist/toastui-editor-viewer.css";
// import "tui-color-picker/dist/tui-color-picker.css";
// import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
// import "@toast-ui/chart/dist/toastui-chart.css";
// import "@toast-ui/editor-plugin-table-merged-cell/dist/toastui-editor-plugin-table-merged-cell.css";
// import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";

// // theme
// //https://github.com/PrismJS/prism-themes/tree/master/themes
// import "prismjs/themes/prism-okaidia.css";
// import "katex/dist/katex.min.css";
// import "mde10/dist/toast.css";
// import "mdv10/dist/toast.css";

// export const Editor = MDE;
// export const Viewer = MDV;




const E = dynamic(() => import("mde10"), {
  ssr: false,
  loading: () => <h1>Loading...</h1>,
});

const V = dynamic(() => import("mdv10"), {
  ssr: false,
  loading: () => <h1>Getting data...</h1>,
});

export function Editor(props){
    return <E {...props} />;
}

export function Viewer(props){
    return <V {...props} />;
}

