import { useContext } from "react";
import { InputContext } from "../App";

const InputField = () => {
    const { inputValue, setInputValue } = useContext(InputContext);
    const handleOnChange = (e) => setInputValue({ ...inputValue, url: e.target.value });

    return (
        <div>
            <label className=' font-medium text-md'> Enter your URL below to generate a QR Code and download the image.</label>
            <input
                type='url'
                className='w-full border-2 py-1 mt-2 px-3 text-gray-700 rounded-sm'
                placeholder='https://example.com'
                value={inputValue.url}
                onChange={handleOnChange}
            />
        </div>
    );
};

export default InputField;
