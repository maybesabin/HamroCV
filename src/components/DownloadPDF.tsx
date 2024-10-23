import { Button } from "./ui/button";
import html2canvas from 'html2canvas';

const DownloadPDF = () => {
    const handleDownload = async () => {
        const cvPreviewElement: any = document.getElementById('cv-preview');

        try {
            const canvas = await html2canvas(cvPreviewElement);

            const dataURL = canvas.toDataURL('image/png');

            const a = document.createElement('a');
            a.href = dataURL;
            a.download = 'myCV.png';
            a.click();
        } catch (error) {
            console.error('Error converting to image:', error);
        }
    };

    return (
        <div className='lg:pt-24 pt-6 pr-4 flex flex-col items-start gap-9 justify-start min-h-screen overscroll-y-scroll dark:bg-black dark:text-white'>
            <h1 className='text-4xl font-bold text-transparent dark:text-white bg-gradient-to-b from-blue-600 to-blue-400 bg-clip-text'>
                Download PDF
            </h1>
            <Button className="btn-download" onClick={handleDownload}>
                Download PDF
            </Button>
        </div>
    );
};

export default DownloadPDF;