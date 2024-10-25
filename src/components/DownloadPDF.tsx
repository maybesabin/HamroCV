import { Button } from "./ui/button";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import CVPreview from './CVPreview';
import ExperienceInfo from "./InputsPreview/Experience-Preview";
import PersonalInfo from "./InputsPreview/Personal-Preview";
import FrameworksPreview from "./InputsPreview/Frameworks-Preview";
import LanguagePreview from "./InputsPreview/Language-Preview";
import SoftSkillsPreview from "./InputsPreview/SoftSkills-Preview";
import TechnicalSkillsPreview from "./InputsPreview/TechnicalSkills-Preview";
import AboutMe from "./InputsPreview/AboutMe-Preview";
import EducationPreview from "./InputsPreview/Education-Preview";
import ProjectsPreview from "./InputsPreview/Projects-Preview"

const DownloadPDF = () => {
    const handleDownload = async () => {
        const cvPreviewElement: HTMLElement | null = document.getElementById('cv-preview');

        if (!cvPreviewElement) {
            console.error('CV Preview element not found');
            return;
        }

        try {
            // Delay to ensure the element is fully rendered
            await new Promise((resolve) => setTimeout(resolve, 100)); // Adjust time as necessary

            // Use html2canvas to capture the element as an image
            const canvas = await html2canvas(cvPreviewElement, { scale: 2 }); // Increase scale for better quality
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');

            // Calculate image dimensions
            const imgWidth = 190; // Width of the image in mm
            const pageHeight = pdf.internal.pageSize.height; // Page height in mm
            const imgHeight = (canvas.height * imgWidth) / canvas.width; // Scale height
            let heightLeft = imgHeight;
            let position = 0;

            // Add the first image to the PDF
            pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;

            // Add more pages if needed
            while (heightLeft >= 0) {
                position = heightLeft - imgHeight;
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }

            // Save the PDF
            pdf.save('myCV.pdf');
        } catch (error) {
            console.error('Error generating PDF:', error);
        }
    };


    return (
        <div className='lg:pt-24 pt-6 pr-4 flex flex-col items-start gap-9 justify-start min-h-screen overscroll-y-scroll dark:bg-black dark:text-white'>
            <h1 className='text-4xl font-bold text-transparent dark:text-white bg-gradient-to-b from-blue-600 to-blue-400 bg-clip-text'>
                Download Resume
            </h1>
            <Button className="btn-download" onClick={handleDownload}>
                Download Resume
            </Button>
            <div id="cv-preview">
                <PersonalInfo />
                <TechnicalSkillsPreview />
                <FrameworksPreview />
                <SoftSkillsPreview />
                <LanguagePreview />
                <ProjectsPreview />
                <ExperienceInfo />
                <AboutMe />
                <EducationPreview />
            </div>

        </div>
    );
};

export default DownloadPDF;
