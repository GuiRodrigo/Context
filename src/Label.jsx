import React, { useContext } from "react";

import Context from "./Context"

export default function Label() {
    const [url, setUrl] = useContext(Context);

    return (
        <div>
            <h3>{url}</h3>
            <button type="button" onClick={() => setUrl("outra Url ai")}>
                Mudar Url
            </button>
            <br />
            <button type="button" onClick={() => setUrl("uma outra outra Ulr")}>
                Mudar Url dnv
            </button>
        </div>
    )
}