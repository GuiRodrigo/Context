import React, { useContext } from 'react'

import Context from './Context'

export default function Label() {
    const [Url, setUrl] = useContext(Context);

    return (
        <div>
            <h2>URL da page</h2>
            <h3>{Url}</h3> 
            <button type="button" onClick={() => setUrl('/network')} >
                Mudar Url
            </button>
            <br />
            <button type="button" onClick={() => setUrl('/faturas')}>
                Mudar Url dnv
            </button>
        </div>
    )
}