 
import intro from '../assets/images/intro (1).png';
import amir from '../assets/images/amir.jpg'; 

const Content = () => {
    return (
        <section className="Content bg-dark  ">
            <div className="container-fluid mb-4 mt-4">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-5 text-center text-white  text-md-start ">
                        <h1>
                            Hi there!
                        </h1>
                        <div className="bio text-white">
                            <h2 className=" h2 fw-light">I am <span className="display-4 custom-font fw-bolder 
                             "> Amirtham </span>
                            </h2>
                            <h2 className="h2 fw-light">Front-end Web Application Developer</h2>
                        </div>
                    </div>
                    <div className="col-md-5  mt-5  ">
                        
                        <img src={amir} alt="" className='img-fluid custom-card mt-4'  />
                        
                       
                    </div>
                </div>
            </div>
            <section className='bg-black p-3'>
            <div className="container   mt-5" id="about">
            <div className="  text-center mb-1 text-white">
                        <h2 className='let'>LET ME INTRODUCE MYSELF</h2><br></br>
                        </div>
                <div className="row ">
                    <div className=" col-12 col-md-8  ">
                        
                        <div className="container-md">
                            <div className="list-group">
                                <div className="list-group item text-white">
                                  
                                    
                                    <p className='lead custom-p'><i class="bi  bi-caret-right-fill custom-font"></i> Education: Completed Master of Computer Applications (MCA), providing a strong foundation in computer science and software development.</p> 
                                    
                                    <p className='lead custom-p'><i class="bi  bi-caret-right-fill me-1 custom-font"></i> Technical Skills: Proficient in Bootstrap and React for frontend development, with additional skills in Python for backend development and scripting.</p> 
                                    <p className='lead custom-p'><i class="bi  bi-caret-right-fill me-1 custom-font"></i>Passion: Dedicated to leveraging technology to create efficient and user-friendly solutions, with a keen interest in exploring innovative approaches in software development.</p>
                                     
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4  text-center ">
                        <img src={intro} className=" img-fluid rounded-circle custom"alt="" />
    
                    </div>
                </div>
            </div>
            </section>
        </section>
    );
}
 
export default Content;