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
    <div className="flex flex-col h-screen">
      <ActiveProvider>
        <UserDataProvider>
          <Toaster />
          <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
          <div className="flex">
            <Sidebar showSidebar={showSidebar} />
            <div className="flex w-full">
              <div className="flex-grow p-4">
                <InputForm />
              </div>
              <div className="w-1/2 pt-4">
                <CVPreview />
              </div>
            </div>
          </div>
        </UserDataProvider>
      </ActiveProvider>
    </div>
  );
}

export default App;
