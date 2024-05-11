import {education} from "../data/Data"

export default function Education({theme}){
    return(
        <div id="education" className="d-flex justify-content-center position-relative align-items-center">
            <div className="position-relative d-flex justify-content-between align-items-center flex-column pt-1 pb-6" style={{gap: "12px"}}>
                <div className="font-weight-bold fs-2 mt-2" style={{color: theme.text_primary}}>Education</div>
                <div className="text-center" style={{color: theme.text_secondary}}>
                    My education has been a journey of self-discovery and growth. My educational details are as follows.
                </div>


                <div className="d-flex flex-column justify-content-center align-items-center mt-3" style={{width: "100%", maxWidth: "1000px"}}>
                    {education.map((education, index) => (
                        <ul key={index} className="rounded-2 mt-1" style={{backgroundColor: theme.card,color: theme.text_secondary, listStyle: "none"}}>
                            <li className="p-4">
                                <div className="fs-3 fw-bolder">{education.degree}</div>
                                <div className="fs-5 fw-bold mt-2">{education.school}</div>
                                <div className="mt-2">{education.date}</div>
                                <div className="mt-2">{education.desc}</div>
                                <div className="mt-2">Grade : {education.grade}</div>
                            </li>

                        </ul>
                    ))}
                </div>    

                

                
            </div>
        </div>
        
    )
}