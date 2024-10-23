import { Button } from "./ui/button";
import { useRef } from 'react';
import html2pdf from 'html2pdf.js';
import CVPreview from "./CVPreview";
import { useUserData } from '../Context/UserData';

const DownloadPDF = () => {
    const cvRef = useRef<HTMLDivElement>(null);
    const { userData } = useUserData();

    const handleDownload = () => {
        const element = cvRef.current;
        if (element) {
            const opt = {
                margin: 1,
                filename: 'cv-preview.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
            };

            // Convert to PDF
            html2pdf().from(element).set(opt).save();
        }
    };

    return (
        <div className='lg:pt-24 pt-6 pr-4 flex flex-col items-start gap-9 justify-start min-h-screen overscroll-y-scroll dark:bg-black dark:text-white'>
            <h1 className='text-4xl font-bold text-transparent dark:text-white bg-gradient-to-b from-blue-600 to-blue-400 bg-clip-text'>
                Download PDF
            </h1>
            <Button onClick={handleDownload} className="btn-download" disabled={!userData || Object.keys(userData).length === 0}>
                Download PDF
            </Button>
            <div ref={cvRef} style={{ display: 'none' }}>
                <CVPreview /> {/* Pass userData as a prop */}
            </div>
        </div>
    );
};

export default DownloadPDF;
