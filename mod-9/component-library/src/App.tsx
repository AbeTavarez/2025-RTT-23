// import './App.css'
import AlertBox from "./components/AlertBox/AlertBox"


function App() {

  return (
    <>
     <h1>Components Library</h1>

     <AlertBox type="success" message="Hello World"/>
     <AlertBox type="error" message="Hello World"/>
     <AlertBox type="info" message="Hello World"/>
     <AlertBox type="warning" message="Hello World"/>
    </>
  )
}

export default App
