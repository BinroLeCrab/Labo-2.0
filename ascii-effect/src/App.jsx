import { useState } from 'react'
import BgVideo from './components/BgVideo/BgVideo'
import Noise from './components/Noise/Noise'
import CanvasVideo from './components/CanvasVideo/CanvasVideo'
import ControlsPanel from './components/ControlsPanel/ControlsPanel'

function App() {

  return (
    <>
    <Noise />
    <main className='main'>
      {/* <p>ASCII effect</p> */}
      {/* <CanvasVideo srcUrl='/assets/IDLES.mp4' /> */}
      <CanvasVideo srcUrl='/assets/TURNSTILE.mp4' />
      {/* <BgVideo srcUrl='/assets/TURNSTILE.mp4' /> */}
      <ControlsPanel />
    </main>
    </>
  )
}

export default App
