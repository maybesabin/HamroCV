import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Company {
    jobTitle: string;
    companyName: string;
    startDate: string;
    endDate: string;
    jobDescription: string
}
interface TechnicalSkills {
    title: string
}
interface SoftSkills {
    title: string
}
interface Frameworks {
    title: string
}
interface Languages {
    title: string,
    proficiency: string
}

interface Education {
    degree: string,
    institutionName: string,
    location: string,
    startDate: string;
    endDate: string;
}

interface Projects {
    title: string,
    sourceCode: string,
    livePreview: string,
    description: string,
}


interface UserData {
    //Personal Info
    email: string;
    phone: string;
    firstName: string,
    lastName: string,
    country: string,
    city: string,
    phoneNumber: string,
    summary: string,
    linkedinProfile: string,
    githubProfile: string,
    personalWebsite: string,
    countryCode: string,
    companies: Company[],
    languages: Languages[],
    technicalSkills: TechnicalSkills[],
    softSkills: SoftSkills[],
    frameworks: Frameworks[],
    education: Education[],
    projects: Projects[],
}


interface UserDataContextType {
    userData: UserData;
    setUserData: React.Dispatch<React.SetStateAction<UserData>>;
}


const UserDataContext = createContext<UserDataContextType | null>(null);

export const useUserData = (): UserDataContextType => {
    const context = useContext(UserDataContext);
    if (!context) {
        throw new Error('useUserData must be used within a UserDataProvider');
    }
    return context;
};

interface UserDataProviderProps {
    children: ReactNode;
}

// Provider component
export const UserDataProvider: React.FC<UserDataProviderProps> = ({ children }) => {
    const [userData, setUserData] = useState<UserData>({
        //Personal info
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        country: '',
        city: '',
        phoneNumber: '',
        summary: '',
        linkedinProfile: '',
        githubProfile: '',
        personalWebsite: '',
        countryCode: '977',
        companies: [],
        languages: [],
        technicalSkills: [],
        softSkills: [],
        frameworks: [],
        education: [],
        projects: []
    });

    return (
        <UserDataContext.Provider value={{ userData, setUserData }}>
            {children}
        </UserDataContext.Provider>
    );
};
