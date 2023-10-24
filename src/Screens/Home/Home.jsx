import About from "../../Components/About/index"
import Intro from "../../Components/Intro/Intro"
import Match from "../../Components/Match/Match"
import Footer from "../../Components/Footer/Footer"
import QuemUsa from "../../Components/QuemUsa/QuemUsa"


function Home (){
  return (
    <div>
      <Intro/>
      <About/>
      <QuemUsa/>
      <Match/>
      <Footer/>
    </div>
  )
}
export default Home;