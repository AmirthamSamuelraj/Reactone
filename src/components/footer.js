import WhatsAppIcon from "./footerw";
const Footer = () => {
    return ( 
        <div id="Footer">
             <div class="containern  bg-dark ">
             <nav className="navbar   navbar-expand-lg navbar-light   header">
               
                <p className="lead  ms-5 mb-1 text-warning cedarville-cursive-regular">Designed and Developed by Amirtham</p>
             
              
            
                <p className="lead nav text-warning cedarville-cursive-regular ms-5 mb-1">
                copyright<i class="bi bi-c-circle"></i>2024sa</p>
                
                <div className="   collapse navbar-collapse justify-content-end align-center " id="navbarNav"></div>
                <ul className="nav justify-content-end  ">
                    <li className="nav-item m-3 ">
                    <a href="https://github.com/AmirthamSamuelraj" className=" text-dark"><i className="bi bi-github text-light"></i></a>
                    </li>
                    {/* <li className="nav-item m-3">
                    <a href="#" data-bs-toggle="tooltip" data-bs-title="Another one here too"><i className="bi bi-envelope-fill  email-icon"></i></a>
                    </li> */}
                    <li className="nav-item m-3">
                    <a 
                     href="mailto:amirtham802@gmail.com?subject=Hello&body=I%20would%20like%20to%20connect%20with%20you"
                        style={{ textDecoration: 'none' }} // Optional, removes underline
                    >
                    <i 
                    className="bi bi-envelope-fill icons email-icon" 
                    style={{  cursor: 'pointer'  }}
                    ></i></a></li>
     
                    {/* <li className="nav-item m-3">
                    <a href=" https://www.instagram.com/amirthasamuelraj"><i className="bi bi-instagram instagram-icon"></i></a>
                    </li> */}
                    <li className="nav-item m-3">
                    <WhatsAppIcon/>
                    </li>
                    <li className="nav-item m-3">
                    <div className="col  "><a href=" https://www.linkedin.com/in/amirthasamuelraj/" className=" text-primary"> <i class="bi bi-linkedin "></i></a></div>
                    </li>
                    </ul>
                     
                     
                </nav>
            </div>

        </div>
    );
}
 
export default Footer;