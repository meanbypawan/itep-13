import { Component } from "react";

class Header extends Component {
    render() {
        return <>
            <header className="header_section">
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg custom_nav-container">
                        <a className="navbar-brand" href="index.html">
                            <img src="images/logo.png" alt="" />
                            <span>
                                Spering
                            </span>
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav  ">
                                <li className="nav-item active">
                                    <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="about.html"> About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="work.html">Work </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="category.html"> Category </a>
                                </li>
                            </ul>
                            <div className="user_option">
                                <a href="">
                                    <span>
                                        Login
                                    </span>
                                </a>
                                <form className="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
                                    <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit"></button>
                                </form>
                            </div>
                        </div>
                        <div>
                            <div className="custom_menu-btn ">
                                <button>
                                    <span className=" s-1">

                                    </span>
                                    <span className="s-2">

                                    </span>
                                    <span className="s-3">

                                    </span>
                                </button>
                            </div>
                        </div>

                    </nav>
                </div>
            </header>
        </>
    }
}

export default Header;