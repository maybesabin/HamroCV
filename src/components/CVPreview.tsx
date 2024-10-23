import ExperienceInfo from "./InputsPreview/Experience-Preview";
import PersonalInfo from "./InputsPreview/Personal-Preview";
import FrameworksPreview from "./InputsPreview/Frameworks-Preview";
import LanguagePreview from "./InputsPreview/Language-Preview";
import SoftSkillsPreview from "./InputsPreview/SoftSkills-Preview";
import TechnicalSkillsPreview from "./InputsPreview/TechnicalSkills-Preview";
import { useUserData } from '../Context/UserData';
import AboutMe from "./InputsPreview/AboutMe-Preview";
import EducationPreview from "./InputsPreview/Education-Preview";
import ProjectsPreview from "./InputsPreview/Projects-Preview"
function CVPreview() {
    const { userData } = useUserData();

    return (
        <div className="flex items-center justify-start flex-wrap pt-24 gap-4 flex-col h-full w-full pr-4 border-zinc-100 border-[1px]">
            {userData.firstName && <PersonalInfo />}
            {userData.technicalSkills.length > 0 && <TechnicalSkillsPreview />}
            {userData.frameworks.length > 0 && <FrameworksPreview />}
            {userData.softSkills.length > 0 && <SoftSkillsPreview />}
            {userData.languages.length > 0 && <LanguagePreview />}
            {userData.projects.length > 0 && <ProjectsPreview />}
            {userData.companies.length > 0 && <ExperienceInfo />}
            {userData.summary && <AboutMe />}
            {userData.education.length > 0 && <EducationPreview />}
        </div>
    );
}

export default CVPreview;
