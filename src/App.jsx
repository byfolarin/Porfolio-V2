import './App.css'
import H1 from './Components/H1'
import Nav from './Components/Nav'
import ImgChange from './Components/ImgChange'

function App() {
  return (
    <div className="h-screen flex flex-col justify-between mx-2 lg:mx-11 overflow-hidden">

        <Nav/>
          <div className="flex-grow">
            <ImgChange />
          </div>
        <H1/>

    </div>
  )
}

export default App
