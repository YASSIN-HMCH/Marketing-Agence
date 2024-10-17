import React , {useState} from 'react'
import './Financial.css'

function Training() {
    const [isMobile, setIsMobile] = useState(false);

    const toggleMenu = () => {
        setIsMobile(!isMobile);
    };
  return (
    <div>
    <header id="site-header" className="fixed-top">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href="/">
                        <i className="fab fa-wikipedia-w"></i>ork-up
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" onClick={toggleMenu}></span>
                    </button>
                    <div className={isMobile ? "collapse navbar-collapse": "navbar-collapse"} id="navbarScroll">
                        <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll">
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/services">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
        <div className="financial-container">
            <img className="financ" src="./assets/images/banner3.jpg" alt="" />
            <div className='both'>
            <h3 className='fi'>learn your business with us</h3>
            <h1 className="fin">Training services</h1>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-lg-4 col-md-6">
                <div class="box-wrap">
                    <div class="icon">
                        <i class="fas fa-donate"></i>
                    </div>
                    <h4 class="number">01</h4>
                    <h4><a href="#url">Corporate Training</a></h4>
                    <p> Workshops and seminars designed to enhance 
                        employee skills in areas like
                         leadershi , communication , and technical skills.</p>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 mt-md-0 mt-4">
                <div class="box-wrap">
                <div class="icon">
                        <i class="fas fa-donate"></i>
                    </div>
                    <h4 class="number">02</h4>
                    <h4><a href="#url">Professional Development</a></h4>
                    <p> Ongoing education for professionals to stay 
                        current in their field like : (certifications, workshops  ect...).</p>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 mt-lg-0 mt-4">
                <div class="box-wrap">
                <div class="icon">
                        <i class="fas fa-marker"></i>
                    </div>
                    <h4 class="number">03</h4>
                    <h4><a href="#url">Compliance Training</a></h4>
                    <p> Ensuring employees understand all regulations and legal 
                        requirements relevant to their industry. for good work</p>
          
                </div>
            </div>
            <div class="col-lg-4 col-md-6 mt-4">
                <div class="box-wrap">
                <div class="icon">
                        <i class="fas fa-user-tie"></i>
                    </div>
                    <h4 class="number">04</h4>
                    <h4><a href="#url">Onboarding Programs</a></h4>
                    <p> Training new hires to familiarize them with company policies, 
                        culture, and job responsibilities.</p>
        
                </div>
            </div>
            <div class="col-lg-4 col-md-6 mt-4">
                <div class="box-wrap">
                <div class="icon">
                        <i class="fas fa-marker"></i>
                    </div>
                    <h4 class="number">05</h4>
                    <h4><a href="#url">E-Learning Platforms</a></h4>
                    <p> Online courses that provide flexible learning opportunities
                        for various skills and topics .this is E-Learning Platforms</p>
                  
                </div>
            </div>
      
        </div>
      {/* <!-- footer --> */}
    <footer class="w3l-footer py-5">
        <div class="container pt-4">
            <div class="row">
                <div class="col-lg-4 sub-one-left">
                    <h6>About </h6>
                    <p>This initiative focuses on enhancing well-being by providing individuals
                         with essential resources and support. Through personalized guidance and
                          access to crucial tools, it empowers people to overcome challenges and 
                          achieve their goals. By fostering a sense of community and inclusivity,
                         it ensures that everyone has the opportunity to grow and thrive</p>
                    <ul class="social mt-4 pt-lg-1">
                        <li><a href="#facebook"><span class="fab fa-facebook-f"></span></a></li>
                        <li><a href="#twitter"><span class="fab fa-twitter"></span></a></li>
                        <li><a href="#linkedin"><span class="fab fa-linkedin-in"></span></a></li>
                        <li><a href="#google-plus"><span class="fab fa-google-plus-g"></span></a></li>
                        <li><a href="#instagram"><span class="fab fa-instagram"></span></a></li>
                    </ul>
                </div>
                <div class="col-lg-5 col-md-6 mt-lg-0 mt-5 px-lg-5 sub-two-right">
                    <h6>Recent Posts</h6>
                    <div class="footer-post">
                        <ul>
                            <li><a href="#post">Rachidi Khalid</a></li>
                            <li class="mx-2"><a href="#post">- Nov. 24 - </a></li>
                            <li><a href="#post">5 comments</a></li>
                        </ul>
                        <p class="post-footer"><a href="#post">Delivering New Customer Experiences with Workup.</a></p>
                    </div>
                    <div class="footer-post mt-4">
                        <ul>
                            <li><a href="#post">Amal EssaLami</a></li>
                            <li class="mx-2"><a href="#post">- fev. 23 - </a></li>
                            <li><a href="#post">3 comments</a></li>
                        </ul>
                        <p class="post-footer"><a href="#post">Discussing the current trends in the share market.</a>
                        </p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 mt-lg-0 mt-5 sub-one-left">
                    <h6>Contact </h6>
                    <div class="column2">
                        <div class="href1"><span class="fas fa-envelope-open"></span><a
                                href="mailto:info@example.com">info@example.com</a>
                        </div>
                        <div class="href2 my-3"><span class="fas fa-phone-alt"></span><a
                                href="tel:+44-123-456-78">+44-123-456-78</a>
                        </div>
                        <div>
                            <p class="contact-para mb-3"><span class="fas fa-map-marker-alt"></span>Morocco .
                                 Laayoune , 70000</p>
                        </div>
                        <div>
                            <p class="contact-para"><span class="fas fa-clock"></span>Office Hours: 9:30H- 19:00H</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="copyright-footer text-center mt-5 pt-sm-4 pt-2">
                <p>&copy; 2024 Workup. All rights reserved | Design by <a href="https://portfolio-yassin.vercel.app/">Hammouche Yassin</a>
                </p>
            </div>
        </div>
    </footer>
    {/* <!-- //footer --> */}







</div>
  )
}

export default Training