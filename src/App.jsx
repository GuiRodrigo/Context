import React, { useState } from 'react'
import Context from './Context'
import Label from './Label'

function App() {
  const [url, setUrl] = useState('/')

  return (
    <Context.Provider value={[url, setUrl]}>
      <div>
        <span> TREINANDO CONTEXT </span>

        <Label/>

      </div>
    </Context.Provider>
  );
}

export default App;
