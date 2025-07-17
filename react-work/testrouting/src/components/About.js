import Header from "./Header";

function About(){
    console.log("about executed....");
    return <>
      <Header/>
      <div className="container mt-3">
        <h3>About component...</h3>
      </div>
    </>
}

export default About;