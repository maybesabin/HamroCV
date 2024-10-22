import { useUserData } from "@/Context/UserData";

const SoftSkillsInfo = () => {
    const { userData } = useUserData();

    return (
        <div className="flex flex-col items-start w-full gap-4 px-4">

            <div className="flex items-center gap-4">
                {userData.softSkills.length > 0 && <h1 className="uppercase font-bold text-xl">Soft Skills:</h1>}
                <ul className="flex items-center gap-1">
                    {userData.softSkills.map((item, idx) => {
                        return (
                            <li key={idx} className="font-medium text-[1rem] capitalize">
                                {item.title} {idx < userData.softSkills.length - 1 && ","}
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

export default SoftSkillsInfo;
