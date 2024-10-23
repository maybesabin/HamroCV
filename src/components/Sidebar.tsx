import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import HandymanIcon from '@mui/icons-material/Handyman';
import SchoolIcon from '@mui/icons-material/School';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import { useActive } from '../Context/Context';

function Sidebar({ showSidebar }: { showSidebar: boolean }) {
    const { isActive, setIsActive } = useActive();
    const components = [
        { title: "About", icon: <PersonIcon fontSize="large" /> },
        { title: "Experience", icon: <WorkIcon fontSize="large" /> },
        { title: "Skills", icon: <HandymanIcon fontSize="large" /> },
        { title: "Education", icon: <SchoolIcon fontSize="large" /> },
        { title: "Projects", icon: <FolderCopyIcon fontSize="large" /> },
    ]

    return (

        <div className={`${showSidebar ? "flex" : "hidden"} lg:flex-col flex-row items-center lg:justify-start justify-between gap-8 pt-24 lg:w-32 w-full p-4`}>

            {components.map((item, idx) => {
                return (
                    <div onClick={() => setIsActive(item.title)} key={idx} className={`flex flex-col items-center cursor-pointer dark:text-white dark:bg-black dark:border dark:border-zinc-900 hover:bg-zinc-300 ${isActive === item.title ? "bg-zinc-300 dark:bg-zinc-800" : "bg-zinc-100"} transition-all duration-500 ease-in-out rounded-lg py-3 w-full gap-2`}>
                        {item.icon}
                        <h1 className='text-center text-[0.8rem]'>{item.title}</h1>
                    </div>
                )
            })}
        </div>

    );
}

export default Sidebar;
