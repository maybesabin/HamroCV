import About from "./About";
import Skills from "./Skills/Skills";
import { useActive } from '../../Context/Context';
import Experience from './Experience';
import Projects from './Projects';
import Education from './Education'

function InputForm() {
    const { isActive } = useActive();
    return (
        <div>
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
