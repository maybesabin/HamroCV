import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import AddIcon from '@mui/icons-material/Add';
import { useUserData } from "@/Context/UserData";
import { Button } from "../ui/button";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useActive } from '../../Context/Context';

const Personal = () => {
    const { userData, setUserData } = useUserData();
    const { setIsActive } = useActive();

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({ ...prevData, [name]: value }));
    };

    return (
        <div className='lg:pt-24 pt-6 pr-4 flex flex-col items-start gap-9 justify-start min-h-screen overscroll-y-scroll'>
            <h1 className='text-4xl font-bold text-transparent bg-gradient-to-b from-blue-600 to-blue-400 bg-clip-text'>
                Personal Information.
            </h1>

            <div className="flex xl:flex-row flex-col xl:items-center items-start gap-6 w-full">
                <div className="flex flex-col items-start gap-2 xl:w-1/2 w-full">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input type="text" value={userData.firstName} onChange={handleChange} name="firstName" />
                </div>
                <div className="flex flex-col items-start gap-2 xl:w-1/2 w-full">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input type="text" value={userData.lastName} onChange={handleChange} name="lastName" />
                </div>
            </div>

            <div className="flex items-center gap-6 w-full">
                <div className="flex flex-col items-start gap-2 w-1/2">
                    <Label htmlFor="city">City</Label>
                    <Input type="text" value={userData.city} onChange={handleChange} name="city" />
                </div>
                <div className="flex flex-col items-start gap-2 w-1/2">
                    <Label htmlFor="country">Country</Label>
                    <Input type="text" value={userData.country} onChange={handleChange} name="country" />
                </div>
            </div>

            <div className="flex xl:flex-row flex-col xl:items-center items-start gap-6 w-full">
                <div className="flex flex-col items-start gap-2 xl:w-1/2 w-full">
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" value={userData.email} onChange={handleChange} name="email" />
                </div>
                <div className="flex flex-col items-start gap-2 xl:w-1/2 w-full">
                    <Label htmlFor="phoneNumber">Phone</Label>
                    <div className="flex items-center gap-2 w-full">
                        <div className="flex items-center w-[5rem] relative">
                            <Input maxLength={3} placeholder={userData.countryCode} type="text" value={userData.countryCode} onChange={handleChange} name="countryCode" className="w-full flex items-center pl-6 justify-center" />
                            <span className="absolute text-zinc-400 top-[0.55rem] left-1.5">+</span>
                        </div>
                        <Input type="text" value={userData.phoneNumber} onChange={handleChange} name="phoneNumber" />
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-start gap-2 w-full">
                <Label htmlFor="summary">Summary</Label>
                <Textarea maxLength={450} name="summary" value={userData.summary} onChange={handleChange} placeholder="Describe yourself..." className="h-40 w-full max-w-full" style={{ resize: "none" }} />
            </div>

            <div className="flex xl:flex-row flex-col xl:items-center items-start gap-6 w-full">
                <div className="flex flex-col items-start gap-2 xl:w-1/2 w-full">
                    <Label htmlFor="githubProfile">Github URL</Label>
                    <Input type="text" value={userData.githubProfile} onChange={handleChange} name="githubProfile" />
                </div>
                <div className="flex flex-col items-start gap-2 xl:w-1/2 w-full">
                    <Label htmlFor="linkedinProfile">LinkedIn URL</Label>
                    <Input type="text" value={userData.linkedinProfile} onChange={handleChange} name="linkedinProfile" />
                </div>
            </div>

            <div className="flex flex-col items-start gap-2 w-full">
                <Label htmlFor="personalWebsite">Personal Website URL</Label>
                <div className="flex xl:flex-row flex-col xl:items-center items-start gap-4 w-full">
                    <Input value={userData.personalWebsite} onChange={handleChange} type="text" name="personalWebsite" />
                    <div className="flex items-center bg-blue-500 text-white font-semibold h-10 xl:w-48 w-40 text-xs cursor-pointer hover:bg-blue-600 rounded-full justify-center gap-2">
                        <AddIcon fontSize="small" />
                        <h3>Add Social Link</h3>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-6 justify-end w-full">
                <Button className="flex items-center gap-6" onClick={() => setIsActive("Experience")}>Next <ArrowForwardIosIcon /></Button>
            </div>
        </div>
    )
}

export default Personal;