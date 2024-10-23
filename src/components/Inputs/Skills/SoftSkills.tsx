import { Button } from "../../ui/button";
import AddIcon from '@mui/icons-material/Add';
import { useUserData } from '../../../Context/UserData';
import toast from "react-hot-toast";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import DeleteIcon from '@mui/icons-material/Delete';
import { Label } from "@/components/ui/label";

type SoftSkillsProps = {
    skillsData: { softSkills: { title: string }[] };
    setSkillsData: React.Dispatch<React.SetStateAction<any>>;
};

const SoftSkills = ({ skillsData, setSkillsData }: SoftSkillsProps) => {
    const { userData, setUserData } = useUserData();
    const [softSkills, setSoftSkills] = useState<{ title: string }[]>(skillsData.softSkills || []);

    const addSoftSkill = () => {
        if (softSkills.length >= 5) {
            toast.error("Cannot add more than 5 soft skills");
            return;
        }
        const newSkill = { title: "" };
        const updatedSkills = [...softSkills, newSkill];

        setSoftSkills(updatedSkills);
        setSkillsData((prev: any) => ({
            ...prev,
            softSkills: updatedSkills,
        }));
        setUserData({ ...userData, softSkills: updatedSkills });
    };

    const deleteSoftSkill = (index: number) => {
        const updatedSkills = softSkills.filter((_, i) => i !== index);
        setSoftSkills(updatedSkills);
        setSkillsData((prev: any) => ({
            ...prev,
            softSkills: updatedSkills,
        }));
        setUserData({ ...userData, softSkills: updatedSkills });
    };

    return (
        <div className="flex flex-col items-start gap-2 w-full">
            <Label>Soft Skills</Label>

            <Button onClick={addSoftSkill}>
                <AddIcon />Add Soft Skill
            </Button>

            <div className="grid xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-2 grid-cols-1 gap-4 w-full">
                {softSkills.map((skill, idx) => {
                    return (
                        <div key={idx} className="flex items-center gap-4 w-full">
                            <Input
                                type="text"
                                placeholder="Soft Skills"
                                name={`softSkillTitle-${idx}`}
                                value={skill.title}
                                onChange={(e) => {
                                    const updatedSkills = [...softSkills];
                                    updatedSkills[idx].title = e.target.value;
                                    setSoftSkills(updatedSkills);
                                    setSkillsData((prev: any) => ({
                                        ...prev,
                                        softSkills: updatedSkills,
                                    }));
                                    setUserData({ ...userData, softSkills: updatedSkills });
                                }}
                                className="flex-grow"
                            />
                            <Button
                                variant="destructive"
                                className="w-24 flex-shrink-0"
                                onClick={() => deleteSoftSkill(idx)}
                            >
                                <DeleteIcon /> Delete
                            </Button>
                        </div>
                    );
                })}
            </div>
        </div >
    );
};

export default SoftSkills;
