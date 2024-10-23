import MenuIcon from '@mui/icons-material/Menu';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import ToggleDarkMode from "./ToggleDarkMode"

function Navbar({ showSidebar, setShowSidebar }: { showSidebar: boolean, setShowSidebar: React.Dispatch<React.SetStateAction<boolean>> }) {
    return (
        <nav className="h-20 w-full fixed top-0 left-0 border-b-[1px] dark:text-white dark:bg-black border-zinc-200 dark:border-zinc-900 flex items-center justify-between px-9 bg-white z-50">
            <div className='flex items-center gap-6'>
                <button onClick={() => setShowSidebar(!showSidebar)} className='w-14 -ml-4 h-12 border dark:border-zinc-900 rounded-lg dark:text-white text-zinc-700 hover:bg-gray-200 dark:hover:bg-zinc-800 transition-all'>{showSidebar ? <DoubleArrowIcon className='lg:rotate-180 rotate-90' /> : <MenuIcon />}</button>
                <h1 className="text-2xl">HamroCV</h1>
            </div>
            <ToggleDarkMode />
        </nav>
    );
}

export default Navbar;
