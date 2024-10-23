import { useUserData } from "@/Context/UserData";
import CodeIcon from '@mui/icons-material/Code';
import VisibilityIcon from '@mui/icons-material/Visibility';

const TechnicalSkillsPreview = () => {
    const { userData } = useUserData();

    return (
        <div className="flex flex-col items-start w-full gap-4 px-4 pt-6 capitalize">
            {userData.projects.length > 0 && (
                <h1 className="font-bold uppercase text-3xl">Projects</h1>
            )}

            <ul className="flex flex-col list-disc items-start gap-1 w-full max-w-full">
                {userData.projects.map((project, idx) => {
                    return (
                        <li key={idx} className="flex flex-col items-start gap-2 w-full">
                            <div className="flex items-center w-full justify-between">
                                <a href={project.livePreview} target="_blank" className="font-medium uppercase text-xl hover:underline">
                                    {project.title}
                                </a>
                                <div className="flex items-center gap-5">
                                    {project.sourceCode && (
                                        <a
                                            title="Live Preview"
                                            className="w-8 h-8 hover:bg-zinc-200 transition-all flex items-center justify-center border rounded-lg"
                                            href={project.sourceCode}
                                            target="_blank"
                                        >
                                            <VisibilityIcon fontSize="small" />
                                        </a>
                                    )}
                                    {project.sourceCode && (
                                        <a
                                            title="Source Code"
                                            className="w-8 h-8 hover:bg-zinc-200 transition-all flex items-center justify-center border rounded-lg"
                                            href={project.sourceCode}
                                            target="_blank"
                                        >
                                            <CodeIcon />
                                        </a>
                                    )}
                                </div>
                            </div>
                            {/* Ensure proper text wrapping and alignment */}
                            <p className="w-full h-auto break-words text-[0.8rem] normal-case max-w-5xl">
                                {project.description}
                            </p>
                        </li>
                    );
                })}
            </ul>
        </div>

    );
};

export default TechnicalSkillsPreview;
