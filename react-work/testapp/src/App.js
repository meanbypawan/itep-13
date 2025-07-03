import { Component } from "react";
import Header from "./components/Header";
import Carosoule from "./components/Carosoule";
import Exp from "./components/Exp";
import Category from "./components/Category";
import About from "./components/About";
import Other from "./components/Other";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return <>
      <Header/>
      <Carosoule/>
      <Exp/>
      <Category/>
      <About/>
      <Other/>
      <Footer/>
    </>
  }
}
export default App;