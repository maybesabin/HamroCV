import { useUserData } from "@/Context/UserData";
import DialpadIcon from '@mui/icons-material/Dialpad';
import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import { Separator } from "@/components/ui/separator"

const PersonalInfo = () => {
    const { userData } = useUserData();
    return (
        <>
            <div className="flex capitalize items-center justify-center gap-4">
                <div className="flex flex-col items-center">
                    <h1 className="font-bold text-4xl">
                        {userData.firstName}&nbsp;
                        {userData.lastName}
                    </h1>
                    <p className="text-zinc-400 text-xs">{userData.city}, {userData.country}</p>
                </div>
            </div>
            <div className="flex items-center justify-between px-4 w-full text-[0.85rem]">
                {userData.phoneNumber && <div className="flex items-center gap-2">
                    <DialpadIcon fontSize="small" />
                    {userData.countryCode}&nbsp;
                    {userData.phoneNumber}
                </div>}

                {userData.email && <a href={`mailto:${userData.email}`} target="_blank" className="flex items-center gap-2">
                    <MailIcon fontSize="small" />
                    {userData.email}
                </a>
                }

                {userData.githubProfile && <a href={`https://github.com/${userData.githubProfile}`} target="_blank" className="flex items-center gap-2">
                    <GitHubIcon fontSize="small" />
                    {userData.githubProfile}
                </a>
                }

                {userData.personalWebsite && <a href={`https://${userData.personalWebsite}`} target="_blank" className="flex items-center gap-2">
                    <LanguageIcon fontSize="small" />
                    {userData.personalWebsite}
                </a>
                }
            </div>
            {userData.firstName && <Separator />}
        </>
    )
}

export default PersonalInfo