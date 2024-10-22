
import Brightness4Icon from '@mui/icons-material/Brightness4'; // Assuming you're using Material UI icons

function Navbar() {
    return (
        <nav className="h-20 w-full fixed top-0 left-0 border-b-[1px] border-zinc-300 flex items-center justify-between px-9 bg-white z-50">
            <h1 className="text-2xl">HamroCV</h1>
            <Brightness4Icon fontSize="large" className="cursor-pointer" />
        </nav>
    );
}

export default Navbar;
