import About from "./Personal";
import Skills from "./Skills/Skills";
import { useActive } from '../../Context/Context';
import Experience from './Experience';
import Projects from './Projects';
import Education from './Education'

function InputForm() {
    const { isActive } = useActive();
    return (
        <div className="border-l-zinc-200 border-r-zinc-100 pl-4 -mx-4 min-h-screen border border-b-0">
            {isActive == "About" ? <About />
                : isActive == "Skills" ? < Skills />
                    : isActive == "Experience" ? <Experience />
                        : isActive == "Projects" ? <Projects />
                            : isActive == "Education" ? <Education /> : ""
            }
        </div>
    );
}

export default InputForm;
