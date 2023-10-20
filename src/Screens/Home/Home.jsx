import About from "../../Components/About/index"
import Intro from "../../Components/Intro/Intro"
import Match from "../../Components/Match/Match"
import Footer from "../../Components/Footer/Footer"


function Home (){
  return (
    <div>
      <Intro/>
      <About/>
      <Match/>
      <Footer/>
    </div>
  )
}
export default Home;