import { useState } from 'react';
import DynamicCursor from './components/DynamicCursor/DynamicCursor'
import Noise from './components/Noise/Noise'
import Parallax from './components/Parallax/Parallax'
import Audio from './components/Audio/Audio';
import PersoTrigger from './components/PersoTrigger/PersoTrigger';

function App() {

  return (
    <>
      <Noise />
      <main className="main">
        <Parallax />
        <PersoTrigger />
      </main>
      {/* <Audio /> */}
      <DynamicCursor />
    </>
  )
}

export default App
