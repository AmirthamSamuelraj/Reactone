
const Project = () => {
     return (
        <section className="bg-dark  " id="project">
        <div className="Project  ">
            <div className=" container" >
                <h2 className='h3 text-center text-warning '>Here are some Projects done by me!</h2>
            <div className="container   p-3">
                <div className=" row justify-content-center align-items-center">
                    <div className="col-12 col-md-4 mb-3  ">
                                  
                    <div className="card custom-card " style={{width: "18rem;"}}>
                    <img src="./image/avenger.jpg" className="card-img-top custom-img img-fluid"   alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title text-info fw-bold">Flick Finder</h5>
                    <p className="card-text   fw-bold p-2">  Using JavaScript, I developed a project to fetch movies dynamically from an API. The application seamlessly retrieves and displays movie details, offering users a responsive and engaging interface to explore their favorite films.</p>
                    </div>
                    </div>
                        </div>
                        <div className="col-12 col-md-4 mb-3">
                                  
                                  <div className="card custom-card  " style={{width: "18rem;"}}>
                                  <img src="./image/self.png" className="card-img-top custom-img  img-fluid" alt="..."/>
                                  <div className="card-body">
                                  <h5 className="card-title text-info fw-bold">Creative Showcase</h5>
                                  <p className="card-text   fw-bold">My portfolio, created with React and Bootstrap,
                                 showcases my web development skills and projects. 
                                    It features responsive design and intuitive navigation for a seamless user experience, 
                                    highlighting my proficiency in frontend development.






.</p>
                                  </div>
                                  </div>
                                      </div>
                                      <div className="col-12 col-md-4 mb-3">
                                  
                                  <div className="card custom-card  " style={{width: "18rem;"}}>
                                  <img src="./image/todo.png" className="card-img-top custom-img  img-fluid" alt="..."/>
                                  <div className="card-body">
                                  <h5 className="card-title text-info fw-bold">Task tracker</h5>
                                  <p className="card-text   fw-bold">  My task tracker project, developed with JavaScript, helps users efficiently manage their tasks. Featuring an intuitive interface, it allows for easy task creation, editing, and completion tracking.This application enhances productivity through seamless task management." </p>
                                  </div>
                                  </div>
                                      </div>
                </div>
            </div>
             </div>
        </div>
        </section>
    );
}
 
export default Project;