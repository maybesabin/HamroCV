import { useState } from "react";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { useActive } from '../../Context/Context';
import { Input } from "../ui/input";
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import toast from "react-hot-toast";
import { useUserData } from '../../Context/UserData';
import { Textarea } from "../ui/textarea";

interface Projects {
    title: string,
    sourceCode: string,
    livePreview: string,
    description: string,
}

const Projects = () => {
    const { setIsActive } = useActive();
    const { userData, setUserData } = useUserData();
    const [projects, setProjects] = useState<Projects[]>(userData.projects);

    const addProject = () => {
        if (projects.length >= 5) {
            toast.error("Cannot add more than 5 projects.");
            return;
        }
        const newProject = { title: "", sourceCode: "", livePreview: "", description: "" };
        const updatedProjects = [newProject, ...projects];
        setProjects(updatedProjects);
        setUserData({ ...userData, projects: updatedProjects }); // Update context
    };

    const deleteProject = (index: number) => {
        const updatedProjects = projects.filter((_, i) => i !== index);
        setProjects(updatedProjects);
        setUserData({ ...userData, projects: updatedProjects }); // Update context
    };

    return (
        <div className='pt-24 pr-4 dark:text-white flex flex-col items-start gap-9 justify-start min-h-screen'>
            <h1 className='text-4xl font-bold dark:text-white text-transparent bg-gradient-to-b from-blue-600 to-blue-400 bg-clip-text'>
                Projects.
            </h1>

            <Button onClick={addProject}><AddIcon />Add a project</Button>

            {projects.map((project, index) => (
                <div key={index} className="w-full flex flex-col gap-9 mt-4 border rounded-lg px-4 py-6">
                    <div className="flex items-center gap-6 w-full">
                        <div className="w-1/2 flex flex-col items-start gap-2">
                            <Label htmlFor={`projectName-${index}`}>Project Name</Label>
                            <Input
                                type="text"
                                name={`projectName-${index}`}
                                value={project.title}
                                onChange={(e) => {
                                    const updatedProjects = [...projects];
                                    updatedProjects[index].title = e.target.value;
                                    setProjects(updatedProjects);
                                    setUserData({ ...userData, projects: updatedProjects }); // Update context
                                }}
                            />
                        </div>
                        <div className="w-1/2 flex flex-col items-start gap-2">
                            <Label htmlFor={`sourceCode-${index}`}>Source Code Link</Label>
                            <Input
                                type="text"
                                name={`sourceCode-${index}`}
                                value={project.sourceCode}
                                onChange={(e) => {
                                    const updatedProjects = [...projects];
                                    updatedProjects[index].sourceCode = e.target.value;
                                    setProjects(updatedProjects);
                                    setUserData({ ...userData, projects: updatedProjects }); // Update context
                                }}
                            />
                        </div>

                    </div>

                    <div className="flex items-start justify-between gap-6 w-full">
                        <div className="w-1/2 flex flex-col items-start gap-2">
                            <Label htmlFor={`description-${index}`}>Description</Label>
                            <Textarea
                                maxLength={300}
                                name={`description-${index}`}
                                value={project.description}
                                className="h-52"
                                style={{ resize: "none" }}
                                onChange={(e) => {
                                    const updatedProjects = [...projects];
                                    updatedProjects[index].description = e.target.value;
                                    setProjects(updatedProjects);
                                    setUserData({ ...userData, projects: updatedProjects }); // Update context
                                }}
                            />
                        </div>
                        <div className="flex flex-col items-start justify-start gap-4 w-1/2">
                            <div className="w-full flex flex-col items-start gap-2">
                                <Label htmlFor={`livePreview-${index}`}>Live Preview Link</Label>
                                <Input
                                    type="text"
                                    name={`livePreview-${index}`}
                                    value={project.livePreview}
                                    onChange={(e) => {
                                        const updatedProjects = [...projects];
                                        updatedProjects[index].livePreview = e.target.value;
                                        setProjects(updatedProjects);
                                        setUserData({ ...userData, projects: updatedProjects }); // Update context
                                    }}
                                />
                            </div>
                            <div className="flex justify-start w-full">
                                <Button variant="destructive" onClick={() => deleteProject(index)}><DeleteIcon />Delete</Button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            <div className="flex items-center gap-6 justify-between w-full">
                <Button variant={"outline"} onClick={() => setIsActive("Education")}>Back</Button>
            </div>
        </div>
    )
}

export default Projects