import ExperienceInfo from "./Inputs/ExperienceInfo";
import PersonalInfo from "./Inputs/PersonalInfo";
import FrameworksInfo from "./Inputs/Skills/FrameworksInfo";
import LanguageInfo from "./Inputs/Skills/LanguageInfo";
import SoftSkillsInfo from "./Inputs/Skills/SoftSkillsInfo";
import TechnicalSkillsInfo from "./Inputs/Skills/TechnicalSkillsInfo";
import { useUserData } from '../Context/UserData';

function CVPreview() {
    const { userData } = useUserData();

    return (
        <div className="flex items-center justify-start flex-wrap pt-24 gap-4 flex-col h-full w-full pr-4 border-zinc-300 border-[1px]">
            <PersonalInfo />
            <ExperienceInfo />
            {userData.technicalSkills.length > 0 && <TechnicalSkillsInfo />}
            {userData.frameworks.length > 0 && <FrameworksInfo />}
            {userData.softSkills.length > 0 && <SoftSkillsInfo />}
            {userData.languages.length > 0 && <LanguageInfo />}
        </div>
    );
}

export default CVPreview;
