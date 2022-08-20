import { createContext, useState } from "react";
import InputForm from "./components/InputForm";
import QrCode from "./components/QrCode";
import QRCode from 'qrcode'

// Create context
export const InputContext = createContext();

function App() {
  const [inputValue, setInputValue] = useState({
    url: "",
    color: "",
    size: 400
  });
  const [response, setResponse] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [displayColorPicker, setDisplayColorPicker] = useState(false);


  const getQrCode = async () => {
    setLoading(true);
    setTimeout(async () => {
      const url = await QRCode.toDataURL(inputValue.url, {
        width: inputValue.size,
        margin: 2,
        color: {
          dark: inputValue.color,
          light: '#EEEEEEFF'
        }
      })
      if (url) {
        setResponse(url);
      } else {
        setError(true)
      }
      setLoading(false);
    }, 500)
  };

  const value = {
    inputValue,
    setInputValue,
    getQrCode,
    response,
    loading,
    error,
    displayColorPicker,
    setDisplayColorPicker
  };

  return (
    <div className='bg-gradient-to-r from-green-500  to-blue-500 h-screen pt-24 md:pt-40 px-2 space-y-4'>
      <div class="text-3xl font-semibold text-white items-center flex justify-center mx-auto">QR Code Generator</div>
      <div className='container  mx-auto max-w-4xl bg-white rounded-md shadow'>

        <div className='md:grid md:grid-cols-3' onClick={() => {
          displayColorPicker && setDisplayColorPicker(false)
        }}>
          <InputContext.Provider value={value}>
            <InputForm />
            <QrCode />
          </InputContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default App;
