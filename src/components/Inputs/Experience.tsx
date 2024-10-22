import { useState } from "react";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { useActive } from '../../Context/Context';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Input } from "../ui/input";
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import toast from "react-hot-toast";
import { Textarea } from "../ui/textarea";
import { useUserData } from '../../Context/UserData'; // Import the UserData context

interface Company {
    jobTitle: string;
    companyName: string;
    startDate: string;
    endDate: string;
    jobDescription: string;
}

const Experience = () => {
    const { setIsActive } = useActive();
    const { userData, setUserData } = useUserData();
    const [companies, setCompanies] = useState<Company[]>(userData.companies);

    const addCompany = () => {
        if (companies.length >= 3) {
            toast.error("Cannot add more than 3 companies");
            return;
        }
        const newCompany = { jobTitle: "", companyName: "", startDate: "", endDate: "", jobDescription: "" };
        const updatedCompanies = [newCompany, ...companies];
        setCompanies(updatedCompanies);
        setUserData({ ...userData, companies: updatedCompanies }); // Update context
    };

    const deleteCompany = (index: number) => {
        const updatedCompanies = companies.filter((_, i) => i !== index);
        setCompanies(updatedCompanies);
        setUserData({ ...userData, companies: updatedCompanies }); // Update context
    };

    return (
        <div className='pt-24 pr-4 flex flex-col items-start gap-9 justify-start min-h-screen'>
            <div className="flex flex-col items-start gap-1">
                <h1 className='text-4xl font-bold text-transparent bg-gradient-to-b from-blue-600 to-blue-400 bg-clip-text'>
                    Work Experience.
                </h1>
                <p className="text-xs text-zinc-600">If you don't have any past  work experiences, you can skip this section.</p>
            </div>

            <Button onClick={addCompany}><AddIcon />Add a company</Button>

            {companies.map((company, index) => (
                <div key={index} className="w-full flex flex-col gap-9 mt-4 border rounded-lg px-4 py-6">
                    <div className="flex items-center gap-6 w-full">
                        <div className="w-1/2 flex flex-col items-start gap-2">
                            <Label htmlFor={`companyName-${index}`}>Company's Name</Label>
                            <Input
                                type="text"
                                name={`companyName-${index}`}
                                value={company.companyName}
                                onChange={(e) => {
                                    const updatedCompanies = [...companies];
                                    updatedCompanies[index].companyName = e.target.value;
                                    setCompanies(updatedCompanies);
                                    setUserData({ ...userData, companies: updatedCompanies }); // Update context
                                }}
                            />
                        </div>
                        <div className="w-1/2 flex flex-col items-start gap-2">
                            <Label htmlFor={`jobTitle-${index}`}>Job Title</Label>
                            <Input
                                type="text"
                                name={`jobTitle-${index}`}
                                value={company.jobTitle}
                                onChange={(e) => {
                                    const updatedCompanies = [...companies];
                                    updatedCompanies[index].jobTitle = e.target.value;
                                    setCompanies(updatedCompanies);
                                    setUserData({ ...userData, companies: updatedCompanies }); // Update context
                                }}
                            />
                        </div>

                    </div>
                    <div className="flex items-center gap-6 w-full">
                        <div className="w-1/2 flex flex-col items-start gap-2">
                            <Label htmlFor={`startDate-${index}`}>Start Date</Label>
                            <Input
                                type="date"
                                name={`startDate-${index}`}
                                value={company.startDate}
                                onChange={(e) => {
                                    const updatedCompanies = [...companies];
                                    updatedCompanies[index].startDate = e.target.value;
                                    setCompanies(updatedCompanies);
                                    setUserData({ ...userData, companies: updatedCompanies }); // Update context
                                }}
                            />
                        </div>
                        <div className="w-1/2 flex flex-col items-start gap-2">
                            <Label htmlFor={`endDate-${index}`}>End Date</Label>
                            <Input
                                type="date"
                                name={`endDate-${index}`}
                                value={company.endDate}
                                onChange={(e) => {
                                    const updatedCompanies = [...companies];
                                    updatedCompanies[index].endDate = e.target.value;
                                    setCompanies(updatedCompanies);
                                    setUserData({ ...userData, companies: updatedCompanies }); // Update context
                                }}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col items-start gap-2 w-full">
                        <Label htmlFor={`jobDescription-${index}`}>Your Contribution</Label>
                        <Textarea
                            className="h-32" style={{ resize: 'none' }}
                            name={`jobDescription-${index}`}
                            value={company.jobDescription}
                            onChange={(e) => {
                                const updatedCompanies = [...companies];
                                updatedCompanies[index].jobDescription = e.target.value; // Correctly update jobDescription
                                setCompanies(updatedCompanies);
                                setUserData({ ...userData, companies: updatedCompanies }); // Update context
                            }}
                        />
                    </div>

                    <div className="flex justify-end">
                        <Button variant="destructive" onClick={() => deleteCompany(index)}><DeleteIcon />Delete</Button>
                    </div>
                </div>
            ))}

            <div className="flex items-center gap-6 justify-between w-full">
                <Button variant={"outline"} onClick={() => setIsActive("About")}>Back</Button>
                <Button className="flex items-center gap-6" onClick={() => setIsActive("Skills")}>Next <ArrowForwardIosIcon /></Button>
            </div>
        </div>
    );
};

export default Experience;
