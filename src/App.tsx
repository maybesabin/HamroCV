import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import InputForm from './components/Inputs/InputForm';
import CVPreview from './components/CVPreview';
import { ActiveProvider } from './Context/Context';
import { UserDataProvider } from './Context/UserData';
import { Toaster } from 'react-hot-toast';
import { useState } from 'react';
import { ThemeProvider } from "@/components/theme-provider"

function App() {
  const [showSidebar, setShowSidebar] = useState(false)
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex flex-col h-screen w-screen overflow-x-hidden dark:bg-black">
        <ActiveProvider>
          <UserDataProvider>
            <Toaster />
            <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

            <div className='flex lg:flex-row flex-col lg:items-start items-center lg:justify-between justify-center w-full'>
              <div className='lg:w-32 w-full '>
                <Sidebar showSidebar={showSidebar} />
              </div>
              <div className={`xl:w-3/4 lg:w-2/4 w-full p-4 ${showSidebar ? "" : "xl:-ml-14 lg:-ml-20 -ml-0 lg:mt-0 mt-[4.25rem]"}`}>
                <InputForm />
              </div>
              <div className='pt-4 lg:w-full dark:bg-white h-full'>
                <CVPreview />
              </div>
            </div>
          </UserDataProvider>
        </ActiveProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
