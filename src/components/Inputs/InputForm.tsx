import About from "./Personal";
import Skills from "./Skills/Skills";
import { useActive } from '../../Context/Context';
import Experience from './Experience';
import Projects from './Projects';
import Education from './Education'
import DownloadPDF from "../DownloadPDF";

function InputForm() {
    const { isActive } = useActive();
    return (
        <div className="border-l-0 border-r-zinc-100 pl-4 -mx-4 min-h-screen border border-b-0 border-t-0">
            {isActive == "About" ? <About />
                : isActive == "Skills" ? < Skills />
                    : isActive == "Experience" ? <Experience />
                        : isActive == "Projects" ? <Projects />
                            : isActive == "Education" ? <Education />
                                : isActive == "Download" ? <DownloadPDF /> : ""
            }
        </div>
    );
}

export default InputForm;
