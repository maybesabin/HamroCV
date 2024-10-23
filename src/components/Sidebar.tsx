import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import HandymanIcon from '@mui/icons-material/Handyman';
import SchoolIcon from '@mui/icons-material/School';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import { useActive } from '../Context/Context';
import { useMediaQuery } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

function Sidebar({ showSidebar }: { showSidebar: boolean }) {
    const { isActive, setIsActive } = useActive();
    const isMediumScreen = useMediaQuery('(min-width: 768px)');

    const components = [
        { title: "About", icon: <PersonIcon fontSize={isMediumScreen ? "large" : "medium"} /> },
        { title: "Experience", icon: <WorkIcon fontSize={isMediumScreen ? "large" : "medium"} /> },
        { title: "Skills", icon: <HandymanIcon fontSize={isMediumScreen ? "large" : "medium"} /> },
        { title: "Education", icon: <SchoolIcon fontSize={isMediumScreen ? "large" : "medium"} /> },
        { title: "Projects", icon: <FolderCopyIcon fontSize={isMediumScreen ? "large" : "medium"} /> },
        { title: "Download", icon: <DownloadIcon fontSize={isMediumScreen ? "large" : "medium"} /> }
    ]
    return (

        <div className={`${showSidebar ? "flex" : "hidden"} lg:flex-col flex-row items-center lg:justify-start justify-between md:gap-8 gap-2 pt-24 lg:w-32 w-full px-4 md:pb-4 pb-0`}>

            {components.map((item, idx) => {
                return (
                    <div onClick={() => setIsActive(item.title)} key={idx} className={`flex flex-col items-center cursor-pointer dark:text-white dark:bg-black dark:border dark:border-zinc-900 hover:bg-zinc-300 ${isActive === item.title ? "bg-zinc-300 dark:bg-zinc-900" : "bg-zinc-100"} transition-all duration-500 ease-in-out rounded-lg md:py-3 py-2 md:px-0 px-6 md:w-full w-16 gap-1 md:gap-2`}>
                        {item.icon}
                        <h1 className='text-center text-[0.6rem] md:text-[0.8rem]'>{item.title}</h1>
                    </div>
                )
            })}
        </div>

    );
}

export default Sidebar;
