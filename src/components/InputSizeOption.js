import { useContext } from "react";
import { InputContext } from "../App";

const options = [
    {
        value: 200,
        label: "200x200",
    },
    {
        value: 300,
        label: "300x300",
    },
    {
        value: 400,
        label: "400x400",
    },
    {
        value: 500,
        label: "500x500",
    },
    {
        value: 600,
        label: "600x600",
    },
    {
        value: 700,
        label: "800x800",
    },
    {
        value: 800,
        label: "800x800",
    },
];

const InputSizeOption = () => {
    const { inputValue, setInputValue } = useContext(InputContext);
    const handleOnChange = (e) => setInputValue({ ...inputValue, size: e.target.value });

    return (
        <div>
            <label className='font-medium text-sm'>Size</label>

            <select
                class='w-full border-2   p-1.5  text-gray-700 rounded-sm '
                name='size'
                id='size'
                value={inputValue.size}
                onChange={handleOnChange}
            >
                {options.map((option) => (
                    <option value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    );
};

export default InputSizeOption;
