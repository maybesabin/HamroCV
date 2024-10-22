import { Button } from "../../ui/button";
import { useActive } from '../../../Context/Context';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import TechnicalSkills from "./TechnicalSkills";
import Frameworks from "./Frameworks";
import SoftSkills from "./SoftSkills";
import Languages from "./Languages";
import { useState, useEffect } from "react";
import { useUserData } from "@/Context/UserData";  // Import user data context

const Skills = () => {
    const { userData, setUserData } = useUserData();  // Use user data context
    const [skillsData, setSkillsData] = useState({
        languages: userData.languages || [],
        frameworks: userData.frameworks || [],
        softSkills: userData.softSkills || [],
        technicalSkills: userData.technicalSkills || []
    });

    useEffect(() => {
        setUserData({ ...userData, languages: skillsData.languages, frameworks: skillsData.frameworks, softSkills: skillsData.softSkills, technicalSkills: skillsData.technicalSkills });
    }, [skillsData, setUserData, userData]);

    const { setIsActive } = useActive();
    return (
        <div className='pt-24 pr-4 flex flex-col items-start gap-9 justify-start min-h-screen'>
            <h1 className='text-4xl font-bold text-transparent bg-gradient-to-b from-blue-600 to-blue-400 bg-clip-text'>
                Skills.
            </h1>

            <TechnicalSkills skillsData={skillsData} setSkillsData={setSkillsData} />
            <Frameworks skillsData={skillsData} setSkillsData={setSkillsData} />
            <SoftSkills skillsData={skillsData} setSkillsData={setSkillsData} />
            <Languages skillsData={skillsData} setSkillsData={setSkillsData} />

            <div className="flex items-center gap-6 justify-between w-full">
                <Button variant={"outline"} onClick={() => setIsActive("Experience")}>Back</Button>
                <Button className="flex items-center gap-6" onClick={() => setIsActive("Education")}>Next <ArrowForwardIosIcon /></Button>
            </div>
        </div>
    )
}

export default Skills;
