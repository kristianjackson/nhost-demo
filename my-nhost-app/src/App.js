import { NhostClient, NhostReactProvider } from '@nhost/react'

const nhost = new NhostClient({
  backendUrl: ProcessingInstruction.env.REACT_APP_NHOST_BACKEND_URL || ''
})

function App() {
  return (
    <NhostReactProvider nhost={nhost}>
      <BrowserRouter>{/* ... */}</BrowserRouter>
    </NhostReactProvider>
  )
}

export default App