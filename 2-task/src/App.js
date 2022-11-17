import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import MainContent from './components/MainContent/MainContent'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
