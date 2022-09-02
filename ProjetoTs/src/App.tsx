import './App.css'


//Components
import Footer from './components/Footer'
import Header from './components/Header'
import TeskForm from "../src/components/TeskForm"
import TeskList from './components/TeskList'

function App() {

  return (
    <div>
      <Header />
      <main className="main">
        <div>
          <h2>O que você vai fazer</h2>
          <TeskForm />
        </div>
        <div>
          <h2>Suas tarefas</h2>
          <TeskList />
        </div>
      </main>
      <Footer />
    </div>
  )
  
}

export default App
