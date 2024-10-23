import { useUserData } from "@/Context/UserData";

const EducationPreview = () => {
    const { userData } = useUserData();
    return (
        <>
            {userData.education.length > 0 &&
                <div className="flex flex-col items-start w-full px-4 pt-6">
                    <h1 className="font-bold uppercase text-3xl">Education</h1>
                    <div className="flex w-full flex-col items-start gap-4 pt-4 capitalize">
                        {userData.education.map((education, idx) => {
                            return (
                                <div key={idx} className="flex flex-col items-start w-full">
                                    <div className="flex items-start justify-between w-full">
                                        <div className="flex flex-col items-start">
                                            <h1 className="font-semibold text-xl">{education.degree}</h1>
                                            {education.institutionName &&
                                                <h3 className="font-medium text-[0.8rem]">{education.institutionName} - <span className="text-[0.8rem] text-zinc-600">{education.location}</span></h3>
                                            }
                                        </div>
                                        <p className="text-xs">{education.startDate} - {education.endDate}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            }
        </>
    )
}

export default EducationPreview