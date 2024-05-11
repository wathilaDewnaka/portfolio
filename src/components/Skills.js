import { skills } from "../data/Data";

export default function Skills({theme}){
    return(
        <div id="skills" className="d-flex justify-content-center position-relative align-items-center">
            <div className="position-relative d-flex justify-content-between align-items-center flex-column pt-1 pb-6" style={{gap: "12px"}}>
                <div className="font-weight-bold fs-2 mt-2" style={{color: theme.text_primary}}>Skills</div>
                <div className="text-center" style={{color: theme.text_secondary}}>
                    My education has been a journey of self-discovery and growth. My educational details are as follows.
                </div>

                <div className="d-flex flex-wrap mt-3 justify-content-center">
                    {skills.map((skill, index) => (
                        <div key={index} className="d-flex justify-content-center flex-wrap mb-3">
                            <div className="d-flex justify-content-center flex-wrap mb-3 mx-3" style={{color: theme.text_primary}}>
                                <img src={skill.image} alt={skill.name} width={"24px"} height={"24px"} style={{marginRight: "5px"}}/>
                                {skill.name}
                            </div>
                        </div>
                    ))}
                </div>


                  

                

                
            </div>
        </div>
    )
}