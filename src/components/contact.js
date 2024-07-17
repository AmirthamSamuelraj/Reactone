import WhatsAppIcon from "./wappicon"; 
import MailIcon from "./email";
// const contact = () => {
//     return (
//         <div className="container mt-5 justify-content-center align-content-center" >
//             <section id="contact">
//                 <div className="container text-center">
//                     <h2>Find me on</h2>
//                     <h2>and feel free to connect with me!</h2>
//                 </div>
//                 {/* <div className="container icons ">
//                 <a href="https://github.com/AmirthamSamuelraj"><i class="bi bi-github "></i></a>
//                 </div> */}
//                 <div className="  text-center">
//                 <div className=" container  ">
//                 <div className="row p-1">
//                     <div className="col  "><a href="https://github.com/AmirthamSamuelraj" className=" text-dark"><i className="bi bi-github icons fs-sm-2 "></i></a></div>
//                     <div className="col   "><a href=" https://mail.google.com/mail/u/0/#inbox?compose=new"><i className="bi bi-envelope-fill icons email-icon"></i></a></div>
//                     <div className="col "><a href="https://www.instagram.com/rima_s802/?next=%2F&hl=en"><i className="bi bi-instagram icons instagram-icon"></i></a></div>
//                     <div className="col  "><WhatsAppIcon /></div>
//                     <div className="col  "><a href=" https://www.linkedin.com/in/amirthasamuelraj/" className=" text-primary"> <i class="bi bi-linkedin icons"></i></a></div>

//                 </div>
//                 </div>
//                 </div>
//             </section>
//         </div>
//     );
// }
 
// export default contact;
const Contact = () => {
    return (
        <section className="bg-dark mb-1">
        <div className="container mt-5  p-3" id="contact">
            <div className="row">
                <div className="col-12 col-md-6 p-2 ms-4 text-center text-danger text-md-start">
                        <h1>Contact</h1>
                        <h3>Feel free to react out!</h3>
                </div>
                <div className="col-12 col-md-3 ms-5 p-2 text-md-start text-white text-start ">
                    {/* <div className="mailicon">
                    <i className="bi bi-envelope-fill "></i>
                    <small className="ms-3 fs-5">amirtham802@gmail.com</small>
                    </div> */}
                    <div>
                    <MailIcon
                    email="amirtham802@gmail.com"  
                    subject="Hello"
                    body="I would like to connect with you."/>
                    </div>
                    <div className="linkedlnicon  ">
                    <a href=" https://www.linkedin.com/in/amirthasamuelraj/" className=" text-primary text-decoration-none"> <i class="bi bi-linkedin icons"></i></a>
                    <small className="ms-3 fs-5">amirtham</small>
                    </div>
                    <div className="githubicon">
                    <a href="https://github.com/AmirthamSamuelraj" className=" text-light text-decoration-none"><i className="bi bi-github icons   "> </i></a>
                    <small className="ms-2 fs-5">amirthasamuelraj</small>
                    </div>
                    <div className="whatsappicon text-decoration-none">
                    <WhatsAppIcon   />
                    </div>
                    {/* <div className="  text-decoration-none">
                    <a href=" https://www.instagram.com/amirthasamuelraj/"><i className="bi bi-instagram instagram-icon"></i></a>
                    <small className="ms-3 fs-5">amirthasamuelraj</small>
                    </div> */}
                </div>
            </div>
        </div>
        </section>
    );
}
 
export default Contact;