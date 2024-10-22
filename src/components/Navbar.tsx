import MenuIcon from '@mui/icons-material/Menu';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import Brightness4Icon from '@mui/icons-material/Brightness4'; // Assuming you're using Material UI icons


function Navbar({ showSidebar, setShowSidebar }: { showSidebar: boolean, setShowSidebar: React.Dispatch<React.SetStateAction<boolean>> }) {
    return (
        <nav className="h-20 w-full fixed top-0 left-0 border-b-[1px] border-zinc-200 flex items-center justify-between px-9 bg-white z-50">
            <div className='flex items-center gap-6'>
                <button onClick={() => setShowSidebar(!showSidebar)} className='w-20 -ml-4 h-12 border rounded-lg text-zinc-700 hover:bg-gray-200 transition-all'>{showSidebar ? <DoubleArrowIcon className='rotate-180' /> : <MenuIcon />}</button>
                <h1 className="text-2xl">HamroCV</h1>
            </div>
            <Brightness4Icon fontSize="large" className="cursor-pointer" />
        </nav>
    );
}

export default Navbar;
