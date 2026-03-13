import { OverlayUI } from './components/OverlayUI'
import { VideoPlayer } from './components/VideoPlayer'

function App() {
  return (
    <div
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <VideoPlayer />
      <OverlayUI />
    </div>
  )
}

export default App
