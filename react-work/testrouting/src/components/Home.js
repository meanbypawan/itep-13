import Header from "./Header";

function Home(){
    console.log("Home Executed,,,,");
    return <>
      <Header/>
      <div className="container">
         <h3>Home Component...</h3>
      </div>
    </>
}

export default Home;