import { useUserData } from "@/Context/UserData";

const ExperiencePreview = () => {
    const { userData } = useUserData();
    return (
        <>
            {userData.companies.length > 0 &&
                <div className="flex flex-col items-start w-full px-4 pt-6">
                    <h1 className="font-bold uppercase text-3xl">Experience</h1>
                    <div className="flex w-full flex-col items-start gap-4 pt-4">
                        {userData.companies.map((company, idx) => {
                            return (
                                <div key={idx} className="flex flex-col items-start w-full">
                                    <div className="flex items-start justify-between w-full">
                                        <div className="flex flex-col items-start">
                                            <h1 className="font-bold text-xl">{company.companyName}</h1>
                                            <h3 className="font-medium text-[0.8rem]">{company.jobTitle}</h3>
                                        </div>
                                        <p className="text-xs">{company.startDate} - {company.endDate}</p>
                                    </div>
                                    <p className="text-[0.8rem] text-zinc-600">{company.jobDescription}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            }
        </>
    )
}

export default ExperiencePreview