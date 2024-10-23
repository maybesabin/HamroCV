import { useUserData } from "@/Context/UserData";
import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import { Separator } from "@/components/ui/separator"
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const PersonalPreview = () => {
    const { userData } = useUserData();
    return (
        <div className="min-w-full flex flex-col gap-2 relative">
            <div className="flex capitalize items-center justify-center gap-4 w-full">
                <div className="flex flex-col items-center">
                    <h1 className="font-bold text-5xl">
                        {userData.firstName}&nbsp;
                        {userData.lastName}
                    </h1>
                </div>
            </div>
            <div className="text-zinc-400 text-xs flex flex-col items-end absolute -top-7 -right-2 gap-1">
                {(userData.city || userData.country) &&
                    <div className="flex items-end gap-1 capitalize">
                        {userData.city}, {userData.country}
                    </div>
                }
                {userData.phoneNumber && <div className="flex items-end gap-1">
                    +{userData.countryCode}&nbsp;
                    {userData.phoneNumber}
                </div>}
            </div>
            <div className="flex items-center justify-between 2xl:justify-evenly px-4 pt-4 w-full text-[0.85rem]">

                {userData.email && <a href={`mailto:${userData.email}`} target="_blank" className="tracking-tight flex items-center gap-1">
                    <MailIcon fontSize="small" />
                    {userData.email}
                </a>
                }

                {userData.githubProfile && <a href={userData.githubProfile} target="_blank" className="tracking-tight flex items-center gap-1">
                    <GitHubIcon fontSize="small" />
                    Github Profile
                </a>
                }

                {userData.linkedinProfile && <a href={userData.linkedinProfile} target="_blank" className="flex tracking-tight items-center gap-1">
                    <LinkedInIcon fontSize="small" />
                    LinkedIn Profile
                </a>}

                {userData.personalWebsite && <a href={`https://${userData.personalWebsite}`} target="_blank" className="tracking-tight flex items-center gap-1">
                    <LanguageIcon fontSize="small" />
                    {userData.personalWebsite}
                </a>
                }


            </div>
            {userData.firstName && <Separator className="dark:bg-zinc-200" />}
        </div>
    )
}

export default PersonalPreview