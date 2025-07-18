import Category from "../categories/Category";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import FeatureProducts from "../products/FeatureProducts";
import ServiceOffered from "../service-offered/ServiceOffered";
import Slider from "../slider/Slider";

function Home() {
    return <>
        <Header />
        <Slider />
        <ServiceOffered />
        <Category />
        <FeatureProducts />
        <Footer />
    </>
}

export default Home;