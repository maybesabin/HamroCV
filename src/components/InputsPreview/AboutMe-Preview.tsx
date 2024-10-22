import { useUserData } from "@/Context/UserData";

const AboutMePreview = () => {
    const { userData } = useUserData();
    return (
        <div className="flex flex-col items-start gap-2 px-4 w-full pt-6">
            {userData.summary && <h1 className="font-bold uppercase text-3xl">About Me</h1>}
            <h3 className="font-medium text-[0.8rem] w-full max-w-5xl break-words">{userData.summary}</h3>
        </div>
    )
}

export default AboutMePreview