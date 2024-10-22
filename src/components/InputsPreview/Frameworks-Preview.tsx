import { useUserData } from "@/Context/UserData";

const FrameworksPreview = () => {
    const { userData } = useUserData();

    return (
        <div className="flex flex-col items-start w-full gap-4 px-4 -mt-2 capitalize">

            <div className="flex items-end gap-2">
                {userData.frameworks.length > 0 && <h1 className="font-medium tracking-tight text-xl">Frameworks:</h1>}
                <ul className="flex items-center gap-1">
                    {userData.frameworks.map((item, idx) => {
                        // Only render <li> if both title and proficiency are non-empty
                        return (
                            <li key={idx} className="text-[1rem]">
                                {item.title}{idx < userData.frameworks.length - 1 && ","}
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

export default FrameworksPreview;
