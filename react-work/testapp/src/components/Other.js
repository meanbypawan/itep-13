import { Component } from "react";

class Other extends Component {
    render() {
        return <>
            <section className="freelance_section ">
                <div id="accordion">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-5 offset-md-1">
                                <div className="detail-box">
                                    <div className="heading_container">
                                        <h2>
                                            Work Freelaner Has Done
                                        </h2>
                                    </div>
                                    <div className="tab_container">
                                        <div className="t-link-box" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            <div className="img-box">
                                                <img src="images/f1.png" alt="" />
                                            </div>
                                            <div className="detail-box">
                                                <h5>
                                                    $250 Million
                                                </h5>
                                                <h3>
                                                    Paid to Freelancers
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="t-link-box collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            <div className="img-box">
                                                <img src="images/f2.png" alt="" />
                                            </div>
                                            <div className="detail-box">
                                                <h5>
                                                    2 Million
                                                </h5>
                                                <h3>
                                                    Paid Invoices
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="t-link-box collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            <div className="img-box">
                                                <img src="images/f3.png" alt="" />
                                            </div>
                                            <div className="detail-box">
                                                <h5>
                                                    700,000
                                                </h5>
                                                <h3>
                                                    Worldwide Freelancer
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="t-link-box collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            <div className="img-box">
                                                <img src="images/f4.png" alt="" />
                                            </div>
                                            <div className="detail-box">
                                                <h5>
                                                    98%
                                                </h5>
                                                <h3>
                                                    Customer <br />
                                                    Satisfaction Rate
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="collapse show" id="collapseOne" aria-labelledby="headingOne" data-parent="#accordion">
                                    <div className="img-box">
                                        <img src="images/freelance-img.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="collapse" id="collapseTwo" aria-labelledby="headingTwo" data-parent="#accordion">
                                    <div className="img-box">
                                        <img src="images/freelance-img.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="collapse" id="collapseThree" aria-labelledby="headingThree" data-parent="#accordion">
                                    <div className="img-box">
                                        <img src="images/freelance-img.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="collapse" id="collapseFour" aria-labelledby="headingfour" data-parent="#accordion">
                                    <div className="img-box">
                                        <img src="images/freelance-img.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="client_section layout_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-10 mx-auto">
                            <div className="heading_container">
                                <h2>
                                    Testimonial
                                </h2>
                            </div>
                            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="detail-box">
                                            <h4>
                                                John Hissona
                                            </h4>
                                            <p>
                                                passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If youThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in s
                                            </p>
                                            <img src="images/quote.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="detail-box">
                                            <h4>
                                                John Hissona
                                            </h4>
                                            <p>
                                                passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If youThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in s
                                            </p>
                                            <img src="images/quote.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="detail-box">
                                            <h4>
                                                John Hissona
                                            </h4>
                                            <p>
                                                passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If youThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in s
                                            </p>
                                            <img src="images/quote.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="info_section ">
                <div className="info_container layout_padding-top">
                    <div className="container">
                        <div className="info_top">
                            <div className="info_logo">
                                <img src="images/logo.png" alt="" />
                                <span>
                                    Spering
                                </span>
                            </div>
                            <div className="social_box">
                                <a href="#">
                                    <img src="images/fb.png" alt="" />
                                </a>
                                <a href="#">
                                    <img src="images/twitter.png" alt="" />
                                </a>
                                <a href="#">
                                    <img src="images/linkedin.png" alt="" />
                                </a>
                                <a href="#">
                                    <img src="images/instagram.png" alt="" />
                                </a>
                                <a href="#">
                                    <img src="images/youtube.png" alt="" />
                                </a>
                            </div>
                        </div>

                        <div className="info_main">
                            <div className="row">
                                <div className="col-md-3 col-lg-2">
                                    <div className="info_link-box">
                                        <h5>
                                            Useful Link
                                        </h5>
                                        <ul>
                                            <li className=" active">
                                                <a className="" href="index.html">Home <span className="sr-only">(current)</span></a>
                                            </li>
                                            <li className="">
                                                <a className="" href="about.html">About </a>
                                            </li>
                                            <li className="">
                                                <a className="" href="work.html">Work </a>
                                            </li>
                                            <li className="">
                                                <a className="" href="category.html">Category </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-3 ">
                                    <h5>
                                        Offices
                                    </h5>
                                    <p>
                                        Readable content of a page when looking at its layoutreadable content of a page when looking at its layout
                                    </p>
                                </div>

                                <div className="col-md-3 col-lg-2 offset-lg-1">
                                    <h5>
                                        Information
                                    </h5>
                                    <p>
                                        Readable content of a page when looking at its layoutreadable content of a page when looking at its layout
                                    </p>
                                </div>

                                <div className="col-md-3  offset-lg-1">
                                    <div className="info_form ">
                                        <h5>
                                            Newsletter
                                        </h5>
                                        <form action="">
                                            <input type="email" placeholder="Email" />
                                            <button>
                                                Subscribe
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-9 col-md-10 mx-auto">
                                <div className="info_contact layout_padding2">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <a href="#" className="link-box">
                                                <div className="img-box">
                                                    <img src="images/location.png" alt="" />
                                                </div>
                                                <div className="detail-box">
                                                    <h6>
                                                        Location
                                                    </h6>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-md-4">
                                            <a href="#" className="link-box">
                                                <div className="img-box">
                                                    <img src="images/mail.png" alt="" />
                                                </div>
                                                <div className="detail-box">
                                                    <h6>
                                                        demo@gmail.com
                                                    </h6>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-md-5">
                                            <a href="#" className="link-box">
                                                <div className="img-box">
                                                    <img src="images/call.png" alt="" />
                                                </div>
                                                <div className="detail-box">
                                                    <h6>
                                                        Call +01 1234567890
                                                    </h6>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    }
}
export default Other;