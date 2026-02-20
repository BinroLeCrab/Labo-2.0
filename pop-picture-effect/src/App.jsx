import Noise from './components/Noise/Noise'
import Content from './components/Content/Content'
import PopPictures from './components/PopPictures/PopPictures'

function App() {

  return (
    <main className='main'>
      <Noise />
      <PopPictures>
        <Content />
      </PopPictures>
    </main>
  )
}

export default App
