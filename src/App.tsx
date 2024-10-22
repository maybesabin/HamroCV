import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import InputForm from './components/Inputs/InputForm';
import CVPreview from './components/CVPreview';
import { ActiveProvider } from './Context/Context';
import { UserDataProvider } from './Context/UserData';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="flex flex-col h-screen">
      <ActiveProvider>
        <UserDataProvider>
          <Toaster />
          <Navbar />
          <div className="flex flex-grow">
            <Sidebar />
            <div className="flex flex-grow">
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
