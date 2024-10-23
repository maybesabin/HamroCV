import { Button } from "../../ui/button";
import AddIcon from '@mui/icons-material/Add';
import { useUserData } from '../../../Context/UserData';
import toast from "react-hot-toast";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import DeleteIcon from '@mui/icons-material/Delete';
import { Label } from "@/components/ui/label";

type FrameworksProps = {
    skillsData: { frameworks: { title: string }[] };
    setSkillsData: React.Dispatch<React.SetStateAction<any>>;
};

const Frameworks = ({ skillsData, setSkillsData }: FrameworksProps) => {
    const { userData, setUserData } = useUserData();
    const [frameworks, setFrameworks] = useState<{ title: string }[]>(skillsData.frameworks || []);

    const addFramework = () => {
        if (frameworks.length >= 10) {
            toast.error("Cannot add more than 10 frameworks");
            return;
        }
        const newFramework = { title: "" };
        const updatedFrameworks = [...frameworks, newFramework];

        setFrameworks(updatedFrameworks);
        setSkillsData((prev: any) => ({
            ...prev,
            frameworks: updatedFrameworks,
        }));
        setUserData({ ...userData, frameworks: updatedFrameworks });
    };

    const deleteFramework = (index: number) => {
        const updatedFrameworks = frameworks.filter((_, i) => i !== index);
        setFrameworks(updatedFrameworks);
        setSkillsData((prev: any) => ({
            ...prev,
            frameworks: updatedFrameworks,
        }));
        setUserData({ ...userData, frameworks: updatedFrameworks });
    };

    return (
        <div className="flex flex-col items-start gap-2 w-full">
            <Label>Frameworks</Label>

            <Button onClick={addFramework}>
                <AddIcon />Add Framework
            </Button>

            <div className="grid grid-cols-2 gap-4 w-full">
                {frameworks.map((framework, idx) => {
                    return (
                        <div key={idx} className="flex items-center gap-4 w-full">
                            <Input
                                type="text"
                                placeholder="Framework"
                                name={`frameworkTitle-${idx}`}
                                value={framework.title}
                                onChange={(e) => {
                                    const updatedFrameworks = [...frameworks];
                                    updatedFrameworks[idx].title = e.target.value;
                                    setFrameworks(updatedFrameworks);
                                    setSkillsData((prev: any) => ({
                                        ...prev,
                                        frameworks: updatedFrameworks,
                                    }));
                                    setUserData({ ...userData, frameworks: updatedFrameworks });
                                }}
                                className="input"
                            />
                            <Button variant="destructive" className="w-24" onClick={() => deleteFramework(idx)}>
                                <DeleteIcon />Delete
                            </Button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Frameworks;
