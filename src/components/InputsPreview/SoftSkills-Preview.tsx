import { useUserData } from "@/Context/UserData";

const SoftSkillsPreview = () => {
    const { userData } = useUserData();

    return (
        <div className="flex flex-col items-start w-full gap-4 px-4 -mt-2 capitalize">

            <div className="flex items-end gap-2">
                {userData.softSkills.length > 0 && <h1 className="font-medium tracking-tight text-xl">Soft Skills:</h1>}
                <ul className="flex items-center gap-1">
                    {userData.softSkills.map((item, idx) => {
                        return (
                            <li key={idx} className="text-[1rem]">
                                {item.title}{idx < userData.softSkills.length - 1 && ","}
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

export default SoftSkillsPreview;
