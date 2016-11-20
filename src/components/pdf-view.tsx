import * as React from "react";


export function PdfView(props: {pdf: string}) {
    return <iframe style={{"width": "100%", "height":"100%", "boxSizing": "border-box"}} src={`http://mozilla.github.io/pdf.js/web/viewer.html?file=${encodeURIComponent(props.pdf)})`}></iframe>
}