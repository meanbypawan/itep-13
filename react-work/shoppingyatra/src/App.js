import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Slider from './components/slider/Slider';
import ServiceOffered from './components/service-offered/ServiceOffered';
import Category from './components/categories/Category';
import FeatureProducts from './components/products/FeatureProducts';
import Footer from './components/footer/Footer';

function App() {
  return <>
    <Header/>
    <Slider/>
    <ServiceOffered/>
    <Category/>
    <FeatureProducts/>
    <Footer/>
  </>
}

export default App;
