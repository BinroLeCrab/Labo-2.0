import { useState } from 'react'
import BgVideo from './components/BgVideo/BgVideo'
import Noise from './components/Noise/Noise'

function App() {

  return (
    <>
    <Noise />
    <main className='main'>
      {/* <p>ASCII effect</p> */}
      <BgVideo srcUrl='/assets/TURNSTILE.mp4' />
    </main>
    </>
  )
}

export default App
