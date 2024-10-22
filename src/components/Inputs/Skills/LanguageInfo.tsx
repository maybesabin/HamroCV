import { useUserData } from "@/Context/UserData";

const LanguageInfo = () => {
    const { userData } = useUserData();

    return (
        <div className="flex w-full flex-col items-start gap-4 px-4">

            <div className="flex items-center gap-4">
                {userData.languages.length > 0 && <h1 className="uppercase font-bold text-xl">Languages:</h1>}
                <ul className="flex items-center gap-1">
                    {userData.languages.map((item, idx) => {
                        // Only render <li> if both title and proficiency are non-empty
                        if (item.title.trim() && item.proficiency.trim()) {
                            return (
                                <li key={idx} className="font-medium text-[1rem] capitalize">
                                    {item.title} <span className="text-zinc-700 text-[0.8rem]">({item.proficiency})</span> {idx < userData.languages.length - 1 && ","}
                                </li>
                            );
                        }
                    })}
                </ul>
            </div>
        </div>
    );
};

export default LanguageInfo;
