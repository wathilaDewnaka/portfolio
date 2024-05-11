import { useState } from "react"
import { darkTheme, lightTheme } from "../utilities/Theme"

export default function Navbar({theme,setTheme}){

    const [mobile,setMobile] = useState(false);

    return(
        <div className="d-flex align-items-center position-sticky justify-content-center top-0"style={{backgroundColor: theme.bg, height: "80px",zIndex: 10}}>
            <div className="d-flex py-0 px-6 align-items-center" style={{height: "60px", width: "100%", zIndex: 1, maxWidth: "1200px", justifyContent: "space-between"}}>
                <div className="py-0 px-2 fs-3 d-flex text-decoration-none justify-content-start align-items-center" style={{width: "80%", cursor: "pointer", color: theme.text_primary}}>Portfolio</div>
                
                <div className="d-block d-sm-block d-md-none d-lg-none d-xl-none d-xxl-none position-absolute top-0 end-0" style={{transform: "translate(-100%, 60%)"}}>
                    <i className="bi bi-list" style={{fontSize: "25px", color: theme.text_primary}} onClick={() => setMobile(!mobile)}></i>
                </div>
                
                <ul className="py-0 px-2 d-flex justify-content-center align-items-center d-none d-sm-none d-md-flex d-lg-flex" style={{width: "100%", listStyle: "none", gap: "32px"}}>
                    <a className="text-decoration-none" href={"#details"} style={{cursor: "pointer" , color: (theme === darkTheme) ? "white" : "blue"}}>About</a>
                    <a className="text-decoration-none" href={"#skills"} style={{cursor: "pointer" , color: (theme === darkTheme) ? "white" : "blue"}}>Skills</a>
                    <a className="text-decoration-none" href={"#projects"} style={{cursor: "pointer", color: (theme === darkTheme) ? "white" : "blue"}}>Projects</a>
                    <a className="text-decoration-none" href={"#education"} style={{cursor: "pointer", color: (theme === darkTheme) ? "white" : "blue"}}>Education</a>
                </ul>
                <div className="d-flex align-items-center justify-content-end px-0 py-2" style={{width: "80%", height: "100%"}}>
                    <a href="https://github.com/wathilaDewnaka/" target="_blank" className="rounded-3 d-flex align-items-center justify-content-center py-0 px-5 bg-transparent text-decoration-none d-none d-sm-none d-md-flex d-lg-flex" style={{height: "70%", cursor: "pointer", border: "1.8px solid", borderColor: theme.primary, color: theme.primary , marginRight: "30px"}}>GiHub Profile</a>
                    {theme == lightTheme && <i className="bi bi-toggle-off ml-3 d-none d-sm-none d-md-flex d-lg-flex" style={{fontSize: "40px", color: "black", cursor: "pointer"}} onClick={() => {setTheme(darkTheme)}}></i>}
                    {theme == darkTheme && <i className="bi bi-toggle-on ml-3 d-none d-sm-none d-md-flex d-lg-flex" style={{fontSize: "40px", color: "white", cursor: "pointer"}} onClick={() => {setTheme(lightTheme)}}></i>}
                </div>
            </div>


            {mobile && (
                <div className="d-flex d-sm-flex d-md-none d-lg-none d-xl-none d-xxl-none flex-column justify-content-center position-absolute end-0 py-6 text-center mobile-menu" style={{ 
                    width: "100%", 
                    background: (theme === lightTheme) ? "white" : theme.card_light, 
                    transform: (mobile ? 'translateY(0)' : 'translateY(-100%)'),
                    transition: "all 0.3s ease-in-out",
                    opacity: (mobile ? '100%' : '0'),
                    zIndex: (mobile ? '1000' : '-1000'),
                    gap: "16px",
                    top: "80px"
                }}>
                    <a className="text-decoration-none pt-3" href={"#details"} style={{ cursor: "pointer", transition: "all 0.2s ease-in-out", color: (theme === darkTheme) ? "white" : "blue" }} onClick={() => setMobile(!mobile)}>About</a>
                    <a className="text-decoration-none" href={"#skills"} style={{ cursor: "pointer", transition: "all 0.2s ease-in-out", color: (theme === darkTheme) ? "white" : "blue" }} onClick={() => setMobile(!mobile)}>Skills</a>
                    <a className="text-decoration-none" href={"#projects"} style={{ cursor: "pointer", transition: "all 0.2s ease-in-out", color: (theme === darkTheme) ? "white" : "blue" }} onClick={() => setMobile(!mobile)}>Projects</a>
                    <a className="text-decoration-none" href={"#education"} style={{ cursor: "pointer", transition: "all 0.2s ease-in-out", color: (theme === darkTheme) ? "white" : "blue" }} onClick={() => setMobile(!mobile)}>Education</a>
                    <a target="_blank" href="https://github.com/wathilaDewnaka/" className="text-decoration-none bg-transparent rounded-3 p-3" style={{ color: theme.text_primary, background: theme.primary, cursor: "pointer", transition: "all 0.2s ease-in-out" }} onClick={() => setMobile(!mobile)}>GitHub Page</a>

                    {theme == lightTheme && <i className="bi bi-toggle-off ml-3" style={{fontSize: "40px", color: "black", cursor: "pointer"}} onClick={() => {setTheme(darkTheme)}}></i>}
                    {theme == darkTheme && <i clasName="bi bi-toggle-on ml-3" style={{fontSize: "40px", color: "white", cursor: "pointer"}} onClick={() => {setTheme(lightTheme)}}></i>}
                </div>
            )}

            
        </div>

        
    )
}