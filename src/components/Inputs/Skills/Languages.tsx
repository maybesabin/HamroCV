import { Button } from "../../ui/button";
import AddIcon from '@mui/icons-material/Add';
import { useUserData } from '../../../Context/UserData';
import toast from "react-hot-toast";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import DeleteIcon from '@mui/icons-material/Delete';

type LanguagesProps = {
    skillsData: { languages: { title: string; proficiency: string }[] };
    setSkillsData: React.Dispatch<React.SetStateAction<any>>;
};

const Languages = ({ skillsData, setSkillsData }: LanguagesProps) => {
    const { userData, setUserData } = useUserData();
    const [languages, setLanguages] = useState(skillsData.languages || []);

    useEffect(() => {
        setSkillsData((prev: any) => ({
            ...prev,
            languages,
        }));
        setUserData({ ...userData, languages });  // Update user data whenever languages state changes
    }, [languages, setSkillsData, setUserData, userData]);

    const addLanguages = () => {
        if (languages.length >= 3) {
            toast.error("Cannot add more than 3 languages");
            return;
        }
        const newLanguage = { title: "", proficiency: "" };
        setLanguages([newLanguage, ...languages]);
    };

    const deleteLanguage = (index: number) => {
        const updatedLanguages = languages.filter((_, i) => i !== index);
        setLanguages(updatedLanguages);
    };

    return (
        <div className="flex flex-col items-start gap-2 w-full">
            <h1 className="text-xl font-semibold">Languages</h1>

            <Button onClick={addLanguages}>
                <AddIcon />Add a Language
            </Button>

            <div className="grid grid-cols-1 gap-4 w-[75%]">
                {languages.map((language, idx) => (
                    <div key={idx} className="flex items-center gap-4 w-full">
                        <Input
                            type="text"
                            className="w-full"
                            placeholder="Language"
                            value={language.title}
                            onChange={(e) => {
                                const updatedLanguages = [...languages];
                                updatedLanguages[idx].title = e.target.value;
                                setLanguages(updatedLanguages);
                            }}
                        />
                        <Select
                            value={language.proficiency}
                            onValueChange={(value: string) => {
                                const updatedLanguages = [...languages];
                                updatedLanguages[idx].proficiency = value;
                                setLanguages(updatedLanguages);
                            }}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Proficiency" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Basic">Basic</SelectItem>
                                <SelectItem value="Conversational">Conversational</SelectItem>
                                <SelectItem value="Fluent">Fluent</SelectItem>
                                <SelectItem value="Native">Native</SelectItem>
                            </SelectContent>
                        </Select>
                        <Button variant="destructive" className="w-24" onClick={() => deleteLanguage(idx)}>
                            <DeleteIcon />Delete
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Languages;
