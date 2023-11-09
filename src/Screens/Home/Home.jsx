import About from "../../Components/About/index"
import Intro from "../../Components/Intro/Intro"
import Match from "../../Components/Match/Match"
import Footer from "../../Components/Footer/Footer"
import ImcLayout from "../../Components/ImcLayout/ImcLayout"
import Header from "../../Components/Header/Header"
import React from "react"

function Home (){
  return (
    <div>
      <Header/>
      <Intro/>
      <ImcLayout/>
      <About/>
      <Match/>
      <Footer/>
    </div>
  )
}
export default Home;