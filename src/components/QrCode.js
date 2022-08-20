import { saveAs } from "file-saver";
import { useContext } from "react";
import { InputContext } from "../App";

const QrCode = () => {
    const { response, loading, error } = useContext(InputContext);
    const downloadImage = () => {
        saveAs(response, "qrCode.png");
    };

    console.log(loading);

    if (loading) {
        return (
            <div className='animate-pulse flex flex-col items-center justify-center px-10 gap-3 p-3'>
                <div className='h-40 w-7/12 md:w-4/5 bg-gray-300'></div>
                <div className='h-8  w-7/12 md:w-4/5 bg-gray-300'></div>
            </div>
        );
    }

    if (error) {
        return <div className='text-gray-500 flex items-center'>Sorry, Something went wrong 😥</div>;
    }

    return (
        <div className='bg-gray-100 rounded-r-md flex flex-col items-center justify-center py-4'>
            {response ? (
                <div>
                    <img className='w-48' src={response} alt='qrCode' />
                    <button onClick={downloadImage} className={` bg-blue-500 hover:bg-blue-600 text-white mt-2 px-4 py-1 w-full`}>
                        Download
                    </button>
                </div>
            ) : (
                <div className='text-gray-500'>Your QR Code will show here</div>
            )}
        </div>
    );
};

export default QrCode;
