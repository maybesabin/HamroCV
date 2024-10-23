import { useState } from "react";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { useActive } from '../../Context/Context';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Input } from "../ui/input";
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import toast from "react-hot-toast";
import { useUserData } from '../../Context/UserData';

interface Education {
    degree: string,
    institutionName: string,
    location: string,
    startDate: string;
    endDate: string;
}


const Education = () => {
    const { setIsActive } = useActive();
    const { userData, setUserData } = useUserData();
    const [educations, setEducations] = useState<Education[]>(userData.education);

    const addEducation = () => {
        if (educations.length >= 3) {
            toast.error("Cannot add more than 3 qualifications.");
            return;
        }
        const newEducation = { degree: "", institutionName: "", location: "", startDate: "", endDate: "" };
        const updatedEducations = [newEducation, ...educations];
        setEducations(updatedEducations);
        setUserData({ ...userData, education: updatedEducations }); // Update context
    };

    const deleteCompany = (index: number) => {
        const updatedEducations = educations.filter((_, i) => i !== index);
        setEducations(updatedEducations);
        setUserData({ ...userData, education: updatedEducations }); // Update context
    };
    return (
        <div className='pt-24 pr-4 flex flex-col items-start gap-9 justify-start min-h-screen'>
            <h1 className='text-4xl font-bold text-transparent bg-gradient-to-b from-blue-600 to-blue-400 bg-clip-text'>
                Education.
            </h1>

            <Button onClick={addEducation}><AddIcon />Add a qualification</Button>

            {educations.map((education, index) => (
                <div key={index} className="w-full flex flex-col gap-9 mt-4 border rounded-lg px-4 py-6">
                    <div className="flex items-center gap-6 w-full">
                        <div className="w-1/2 flex flex-col items-start gap-2">
                            <Label htmlFor={`degreeName-${index}`}>Degree Name</Label>
                            <Input
                                type="text"
                                name={`degreeName-${index}`}
                                value={education.degree}
                                onChange={(e) => {
                                    const updatedEducations = [...educations];
                                    updatedEducations[index].degree = e.target.value;
                                    setEducations(updatedEducations);
                                    setUserData({ ...userData, education: updatedEducations }); // Update context
                                }}
                            />
                        </div>
                        <div className="w-1/2 flex flex-col items-start gap-2">
                            <Label htmlFor={`institutionName-${index}`}>Institution Name</Label>
                            <Input
                                type="text"
                                name={`institutionName-${index}`}
                                value={education.institutionName}
                                onChange={(e) => {
                                    const updatedEducations = [...educations];
                                    updatedEducations[index].institutionName = e.target.value;
                                    setEducations(updatedEducations);
                                    setUserData({ ...userData, education: updatedEducations }); // Update context
                                }}
                            />
                        </div>

                    </div>

                    <div className="flex items-center gap-6 w-full">
                        <div className="w-1/2 flex flex-col items-start gap-2">
                            <Label htmlFor={`location-${index}`}>Institution Location</Label>
                            <Input
                                type="text"
                                name={`location-${index}`}
                                value={education.location}
                                onChange={(e) => {
                                    const updatedEducations = [...educations];
                                    updatedEducations[index].location = e.target.value;
                                    setEducations(updatedEducations);
                                    setUserData({ ...userData, education: updatedEducations }); // Update context
                                }}
                            />
                        </div>
                        <div className="w-1/2 flex flex-col items-start gap-2">
                            <Label htmlFor={`startDate-${index}`}>Start Date</Label>
                            <Input
                                type="date"
                                name={`startDate-${index}`}
                                value={education.startDate}
                                onChange={(e) => {
                                    const updatedEducations = [...educations];
                                    updatedEducations[index].startDate = e.target.value;
                                    setEducations(updatedEducations);
                                    setUserData({ ...userData, education: updatedEducations }); // Update context
                                }}
                            />
                        </div>

                    </div>

                    <div className="flex items-end justify-start gap-6 w-full">
                        <div className="flex flex-col items-start gap-2">
                            <Label htmlFor={`endDate-${index}`}>End Date</Label>
                            <Input
                                type="date"
                                name={`endDate-${index}`}
                                value={education.endDate}
                                onChange={(e) => {
                                    const updatedEducations = [...educations];
                                    updatedEducations[index].endDate = e.target.value;
                                    setEducations(updatedEducations);
                                    setUserData({ ...userData, education: updatedEducations }); // Update context
                                }}
                            />
                        </div>
                        <div className="flex items-center justify-end w-full">
                            <Button variant="destructive" onClick={() => deleteCompany(index)}><DeleteIcon />Delete</Button>
                        </div>
                    </div>
                </div>
            ))}

            <div className="flex items-center gap-6 justify-between w-full">
                <Button variant={"outline"} onClick={() => setIsActive("Skills")}>Back</Button>
                <Button className="flex items-center gap-6" onClick={() => setIsActive("Projects")}>Next <ArrowForwardIosIcon /></Button>
            </div>
        </div>
    )
}

export default Education