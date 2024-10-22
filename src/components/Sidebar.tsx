import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import HandymanIcon from '@mui/icons-material/Handyman';
import SchoolIcon from '@mui/icons-material/School';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import { useActive } from '../Context/Context';

function Sidebar() {
    const { isActive, setIsActive } = useActive();
    const components = [
        { title: "About", icon: <PersonIcon fontSize="large" /> },
        { title: "Experience", icon: <WorkIcon fontSize="large" /> },
        { title: "Skills", icon: <HandymanIcon fontSize="large" /> },
        { title: "Education", icon: <SchoolIcon fontSize="large" /> },
        { title: "Projects", icon: <FolderCopyIcon fontSize="large" /> },
    ]

    console.log(useActive);

    return (
        <div className="w-32 h-full p-4 border-r-[1px] border-zinc-300">
            <div className="flex flex-col items-start justify-start gap-8 h-full pt-24">
                {components.map((item, idx) => {
                    return (
                        <div onClick={() => setIsActive(item.title)} key={idx} className={`flex flex-col items-center cursor-pointer hover:bg-zinc-300 ${isActive === item.title ? "bg-zinc-300" : "bg-zinc-100"} transition-all duration-500 ease-in-out rounded-lg py-3 w-full gap-2`}>
                            {item.icon}
                            <h1 className='text-center text-[0.8rem]'>{item.title}</h1>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Sidebar;
