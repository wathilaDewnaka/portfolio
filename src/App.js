import { useState } from 'react';
import './App.css'
import { darkTheme,lightTheme } from './utilities/Theme';
import Navbar from './components/Navbar';
import Details from './components/Details';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import ProjectExpand from './components/ProjectExpand';
import Footer from './components/Footer';


// const Wrapper = styled.div`
//   background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
//   width: 100%;
//   clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
// `

function App() {
    const [theme,setTheme] = useState(darkTheme)
    const [open,setOpen] = useState({state: false, project: null})
    
    return (
        <div style={{backgroundColor: theme.bg}}>
            <Navbar theme={theme} setTheme={setTheme}/>

            <div style={{backgroundColor: theme.bg,width: "100%",overflowX: "hidden",height: "!00%"}}>
               <Details theme={theme}/>
               <Skills theme={theme}/>
            </div>

            <Projects  theme={theme} open={open} setOpen={setOpen}/>

            <div style={{backgroundColor: theme.bg,width: "100%",overflowX: "hidden",height: "!00%"}}>
               <Education theme={theme}/>
            </div>

            <Footer theme={theme}/>


            {open  && <ProjectExpand theme={theme} open={open} setOpen={setOpen}/>}
        </div>
    );
}

export default App;
