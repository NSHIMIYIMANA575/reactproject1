//display hello
import { Header } from "./components/Header"
import { Navbar } from "./components/navbar"
import { Table } from "./components/Table"
import { Arrays} from "./components/Arrays"
import Classes from "./components/Class"
import { TestProps } from "./props/TestProps"
import { UseState } from "./Hooks/UseState"
import { Effect } from "./Hooks/Effect"

import { BrowserRouter,Route,Routes } from "react-router-dom"
import { Footer } from "./components/Footer"

export const App=() =>{
  return( 
  <BrowserRouter>
    <Navbar/>

  <Routes>
    <Route path="/"element={<Header/>} />
    <Route path="/arrays"element={<Arrays/>} />
    <Route path="/table"element={<Table/>} />
    <Route path="/effect"element={<Effect />} />
    </Routes>
    {/* <Navbar />
    <p style={{color:"red"}}> hello world </p>
    <Header/>
    <Table />
    <Arrays />
    <Classes/>
    <TestProps name="Anastase"age={53} cars={["bmw","honda"]}/>
   */}
   {/* <UseState/>
   <Effect/> */}
<Footer/>
  </BrowserRouter>
  )}
export default App
