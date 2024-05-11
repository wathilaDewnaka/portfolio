import { MyDetails } from "../data/Data";
import Portfolio from "../images/wathila.jpeg"
import Typewriter from 'typewriter-effect';

export default function Details({theme}){
    return(
        <div id="details" className="d-flex justify-content-center align-items-center position-relative px-6 py-4" style={{background: theme.card_light}}>
            <div className="d-flex px-3 justify-content-between align-items-center flex-column-reverse flex-sm-row flex-md-row flex-lg-row flex-xl-row flex-xxl-row" style={{width: "100%", maxWidth: "1100px"}}>
                <div style={{width: "100%", color: theme.text_primary}}>
                    <div className="fw-bolder fs-1">Hi, I am <br/>
                        {MyDetails.name}
                    </div>

                    <div className="fs-2 fw-bold d-flex">I am a   <span style={{marginLeft: "9px", marginTop: "1px"}}>
                        <Typewriter
                            options={{
                                strings: MyDetails.roles,
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </span>
                    </div>
 
                    <div className="mb-4 lh-lg">{MyDetails.description}</div>

                    
                    <a className="py-2 px-0 fw-bold text-decoration-none btn rounded-4" href="https://drive.google.com/file/d/1dPPBmVBPTKC_20g855_5MvUyP7mShug6/view?usp=sharing" style={{width: "95%", maxWidth: "300px", color: "white", background: "linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%)"}}>Download Resume</a>
                    
                </div>
                <div className="d-flex align-items-center justify-content-center justify-content-sm-center justify-content-md-end justify-content-lg-end justify-content-xl-end justify-content-xxl-end"style={{width: "100%",gap: "12px"}}>
                    <img className="position-relative rounded-circle" style={{width: "100%", height: "100%", maxHeight: "400px", maxWidth: "400px"}} src={Portfolio} alt="portfolio-image"></img>
                </div>


            </div>
        </div>
    )
}