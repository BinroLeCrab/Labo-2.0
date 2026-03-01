import { useState } from 'react';
import DynamicCursor from './components/DynamicCursor/DynamicCursor'
import Noise from './components/Noise/Noise'
import Parallax from './components/Parallax/Parallax'
import Audio from './components/Audio/Audio';
import PersoTrigger from './components/PersoTrigger/PersoTrigger';

function App() {

  const [someHovered, setSomeHovered] = useState(false);

  return (
    <>
      <Noise />
      <main className="main">
        <Parallax />
        <PersoTrigger setSomeHovered={setSomeHovered} />
      </main>
      <Audio setSomeHovered={setSomeHovered} />
      <DynamicCursor hovered={someHovered} />
    </>
  )
}

export default App
