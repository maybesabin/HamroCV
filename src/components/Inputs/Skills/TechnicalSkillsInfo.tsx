import { useUserData } from "@/Context/UserData";

const TechnicalSkillsInfo = () => {
    const { userData } = useUserData();

    return (
        <div className="flex flex-col items-start w-full gap-4 px-4 pt-6">
            {(userData.languages.length > 0 || userData.frameworks.length > 0 || userData.technicalSkills.length > 0 || userData.softSkills.length > 0) && (
                <h1 className="font-bold uppercase text-3xl">Skills</h1>
            )}

            <div className="flex items-center gap-4">
                {userData.technicalSkills.length > 0 && <h1 className="uppercase font-bold text-xl">Technical Skills: </h1>}
                <ul className="flex items-center gap-1">
                    {userData.technicalSkills.map((item, idx) => {
                        return (
                            <li key={idx} className="font-medium text-[1rem] capitalize">
                                {item.title} {idx < userData.technicalSkills.length - 1 && ","}
                            </li>
                        );
                    }
                    )
                    }
                </ul>
            </div>
        </div>
    );
};

export default TechnicalSkillsInfo;
