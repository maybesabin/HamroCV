import { Button } from "../../ui/button";
import AddIcon from '@mui/icons-material/Add';
import { useUserData } from '../../../Context/UserData';
import toast from "react-hot-toast";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import DeleteIcon from '@mui/icons-material/Delete';
import { Label } from "@/components/ui/label";

type TechnicalSkillsProps = {
    skillsData: { technicalSkills: { title: string }[] };
    setSkillsData: React.Dispatch<React.SetStateAction<any>>;
};

const TechnicalSkills = ({ skillsData, setSkillsData }: TechnicalSkillsProps) => {
    const { userData, setUserData } = useUserData();
    const [technicalSkills, setTechnicalSkills] = useState<{ title: string }[]>(skillsData.technicalSkills || []);

    const addTechnicalSkill = () => {
        if (technicalSkills.length >= 10) {
            toast.error("Cannot add more than 10 technical skills");
            return;
        }
        const newSkill = { title: "" };
        const updatedSkills = [...technicalSkills, newSkill];

        setTechnicalSkills(updatedSkills);
        setSkillsData((prev: any) => ({
            ...prev,
            technicalSkills: updatedSkills,
        }));
        setUserData({ ...userData, technicalSkills: updatedSkills });
    };

    const deleteTechnicalSkill = (index: number) => {
        const updatedSkills = technicalSkills.filter((_, i) => i !== index);
        setTechnicalSkills(updatedSkills);
        setSkillsData((prev: any) => ({
            ...prev,
            technicalSkills: updatedSkills,
        }));
        setUserData({ ...userData, technicalSkills: updatedSkills });
    };

    return (
        <div className="flex flex-col items-start gap-2 w-full">
            <Label>Technical Skills</Label>

            <Button onClick={addTechnicalSkill}>
                <AddIcon /> Add Technical Skill
            </Button>

            {/* Container for the technical skills inputs */}
            <div className="grid grid-cols-2 gap-4 w-full">
                {technicalSkills.map((skill, idx) => {
                    return (
                        <div key={idx} className="flex items-center gap-4 w-full">
                            <Input
                                type="text"
                                placeholder="Technical Skill"
                                name={`technicalSkillTitle-${idx}`}
                                value={skill.title}
                                onChange={(e) => {
                                    const updatedSkills = [...technicalSkills];
                                    updatedSkills[idx].title = e.target.value;
                                    setTechnicalSkills(updatedSkills);
                                    setSkillsData((prev: any) => ({
                                        ...prev,
                                        technicalSkills: updatedSkills,
                                    }));
                                    setUserData({ ...userData, technicalSkills: updatedSkills });
                                }}
                                className="flex-grow"
                            />
                            <Button
                                variant="destructive"
                                className="w-24 flex-shrink-0"
                                onClick={() => deleteTechnicalSkill(idx)}
                            >
                                <DeleteIcon /> Delete
                            </Button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TechnicalSkills;
