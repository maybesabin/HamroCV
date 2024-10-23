import { useUserData } from "@/Context/UserData";

const ExperiencePreview = () => {
    const { userData } = useUserData();
    return (
        <>
            {userData.companies.length > 0 &&
                <div className="flex flex-col items-start w-full px-4 pt-6 capitalize">
                    <h1 className="font-bold uppercase text-3xl">Experience</h1>
                    <div className="flex w-full flex-col items-start gap-4 pt-4">
                        {userData.companies.map((company, idx) => {
                            return (
                                <div key={idx} className="flex flex-col items-start w-full">
                                    <div className="flex items-start justify-between w-full">
                                        <h1 className="font-semibold text-xl">{company.companyName}
                                            &nbsp;{company.jobTitle && <span className="font-light text-[0.8rem">({company.jobTitle})</span>}
                                        </h1>
                                        <p className="text-xs">{company.startDate} - {company.endDate}</p>
                                    </div>
                                    <p className="text-[0.8rem] max-w-5xl break-words normal-case">{company.jobDescription}</p>
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