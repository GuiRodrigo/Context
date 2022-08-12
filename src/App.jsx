import React, { useState } from 'react'
import Context from './Context'
import Label from './Label'

function App() {
  const [url, setUrl] = useState('url qualquer')

  return (
    <Context.Provider value={[url, setUrl]}>
      <div>
        <span> TREINANDO CONTEXT </span>
        <p> {url} </p>

        <Label />

      </div>
    </Context.Provider>
  );
}

export default App;
