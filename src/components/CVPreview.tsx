import ExperienceInfo from "./InputsPreview/Experience-Preview";
import PersonalInfo from "./InputsPreview/Personal-Preview";
import FrameworksInfo from "./InputsPreview/Frameworks-Preview";
import LanguageInfo from "./InputsPreview/Language-Preview";
import SoftSkillsInfo from "./InputsPreview/SoftSkills-Preview";
import TechnicalSkillsInfo from "./InputsPreview/TechnicalSkills-Preview";
import { useUserData } from '../Context/UserData';
import AboutMe from "./InputsPreview/AboutMe-Preview";

function CVPreview() {
    const { userData } = useUserData();

    return (
        <div className="flex items-center justify-start flex-wrap pt-24 gap-4 flex-col h-full w-full pr-4 border-zinc-100 border-[1px]">
            <PersonalInfo />
            <ExperienceInfo />
            {userData.technicalSkills.length > 0 && <TechnicalSkillsInfo />}
            {userData.frameworks.length > 0 && <FrameworksInfo />}
            {userData.softSkills.length > 0 && <SoftSkillsInfo />}
            {userData.languages.length > 0 && <LanguageInfo />}
            <AboutMe />
        </div>
    );
}

export default CVPreview;
