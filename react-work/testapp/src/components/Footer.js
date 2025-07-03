import { Component } from "react";

class Footer extends Component{
    render(){
        return <>
            <footer className="container-fluid footer_section ">
              <div className="container">
                <p>
                  &copy; <span id="displayDate"></span> All Rights Reserved By
                  <a href="https://html.design/">Free Html Templates</a>
                </p>
              </div>
            </footer>
        </>
    }
}
export default Footer