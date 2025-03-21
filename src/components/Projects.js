import {projects} from "../data/Data"
import "../App.css"

export default function Projects({theme,open,setOpen}){
    return(
        <div id="projects" className="d-flex justify-content-center position-relative align-items-center" style={{background: "linear-gradient(343.07deg, rgba(132, 59, 206, 0.06) 5.71%, rgba(132, 59, 206, 0) 64.83%)"}}>
            <div className="position-relative d-flex justify-content-between align-items-center flex-column pt-1 pb-6" style={{gap: "12px"}}>
                <div className="font-weight-bold fs-2 mt-2" style={{color: theme.text_primary}}>Projects</div>
                <div className="text-center" style={{color: theme.text_secondary, maxWidth: "600px"}}>
                    I have worked on a wide range of projects. Here are some of my projects.
                </div>


                <div className="d-flex justify-content-start align-items-center flex-wrap mb-4" style={{paddingLeft: "40px"}}>
                    {projects.map((project, index) => (
                        <div key={index} className="mt-3 mx-3 rounded-3 py-4 px-3 project" style={{width: "330px", height: "600px", backgroundColor: theme.card, cursor: "pointer"}} onClick={() => setOpen({state: true, project: project})}>
                            <div className="d-flex flex-column px-1" style={{width: "100%"}}>
                            <img 
                                src={project.image} 
                                alt="project" 
                                className="rounded-2 object-contain" 
                                style={{
                                    height: "180px", 
                                    width: index !== 0 && index !== 3 ? "100%" : "130px",
                                    margin: "auto"
                                }} 
/>


                                <div className="fs-4 fw-bold mt-3" style={{color: theme.text_secondary}}>{project.title}</div>
                                <div className="fw-medium" style={{color: theme.text_secondary}}>{project.date}</div>
                                <div className="mt-2 " style={{color: theme.text_secondary}}>{project.description.length > 300 ? project.description.substring(0, 300) + " ..." : project.description}</div>
                            </div>
                        </div>
                    ))}
                </div>    

                

                
            </div>
        </div>
        
    )
}