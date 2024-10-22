import { useUserData } from "@/Context/UserData";

const FrameworksInfo = () => {
    const { userData } = useUserData();

    return (
        <div className="flex flex-col items-start w-full gap-4 px-4">

            <div className="flex items-center gap-4">
                {userData.frameworks.length > 0 && <h1 className="uppercase font-bold text-xl">Frameworks:</h1>}
                <ul className="flex items-center gap-1">
                    {userData.frameworks.map((item, idx) => {
                        // Only render <li> if both title and proficiency are non-empty
                        return (
                            <li key={idx} className="font-medium text-[1rem] capitalize">
                                {item.title} {idx < userData.frameworks.length - 1 && ","}
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

export default FrameworksInfo;
