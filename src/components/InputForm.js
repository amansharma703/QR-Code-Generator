import { useContext } from "react";
import { InputContext } from "../App";
import InputColor from "./InputColor";
import InputField from "./InputField";
import InputSizeOption from "./InputSizeOption";

const InputForm = () => {
    const { getQrCode, inputValue } = useContext(InputContext);
    const handleSubmit = () => getQrCode();

    return (
        <div className='col-span-2 p-6 grid gap-4'>
            <InputField />
            <div className='flex  space-x-4 items-center justify-between md:justify-start'>
                <InputColor />
                <InputSizeOption />
            </div>
            <button
                disabled={!inputValue.url}
                onClick={handleSubmit}
                className='bg-blue-600 hover:bg-blue-700 max-w-xs ml-auto px-4 py-2 text-white rounded-sm mt-4  disabled:bg-gray-300'
            >
                Generate QR Code
            </button>
        </div>
    );
};

export default InputForm;
