import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import InputForm from './components/Inputs/InputForm';
import CVPreview from './components/CVPreview';
import { ActiveProvider } from './Context/Context';
import { UserDataProvider } from './Context/UserData';
import { Toaster } from 'react-hot-toast';
import { useState } from 'react';


function App() {
  const [showSidebar, setShowSidebar] = useState(false)
  return (
    <div className="flex flex-col h-screen w-screen overflow-x-hidden">
      <ActiveProvider>
        <UserDataProvider>
          <Toaster />
          <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

          <div className='flex lg:flex-row flex-col lg:items-start items-center lg:justify-between justify-center w-full'>
            <div className='lg:w-32 w-full'>
              <Sidebar showSidebar={showSidebar} />
            </div>
            <div className={`lg:w-3/4 w-full p-4 ${showSidebar ? "" : "lg:-ml-14 lg:mt-0 mt-[4.25rem]"}`}>
              <InputForm />
            </div>
            <div className='pt-4 lg:w-full'>
              <CVPreview />
            </div>
          </div>

        </UserDataProvider>
      </ActiveProvider>
    </div>
  );
}

export default App;
