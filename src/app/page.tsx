"use client";

import { useState } from "react";
import ColorPicker from "./components/color-picker";
import Select from "./components/select";
import Textfield from "./components/textfield";
import Toggle from "./components/toggle";
import { TextInput, ToggleInput } from "./components/inputs";

export default function Home() {
  const [buttonData, setButtonData] = useState({});

  const handleInput = (key: string, value: any) => {
    setButtonData({
      ...buttonData,
      [key]: value
    })
  }
  
  return (
    <main className="h-screen max-h-screen bg-neutral-800 grid place-items-center">
      <div className="flex gap-16 items-center">
        <div className="bg-white rounded-lg p-4 w-[32rem] h-64 shadow-lg grid place-items-center relative">
          <p className="absolute left-2 -top-6 italic text-neutral-600">Preview</p>
          <button className="px-8 py-4 bg-teal-400 rounded-full font-bold cursor-pointer">Book Online</button>
        </div>
        <div className="bg-zinc-700 rounded-lg p-4 w-80 h-[32rem] shadow-lg relative overflow-y-auto flex flex-col gap-2">
          <TextInput label="New Text Input Test" buttonData={buttonData} dataKey="new-text-test" onChange={handleInput} />
          <ToggleInput label="New Toggle Input Test" buttonData={buttonData} dataKey="new-toggle-test" onChange={handleInput} defaultValue={true} />

          <Textfield label="Label" dataKey="label" onChange={handleInput} buttonData={buttonData} />
          {/* <Toggle label="Show BG" defaultValue={true} dataKey="bg" onChange={handleInput} buttonData={buttonData}  /> */}
          <ColorPicker label="BG Color" value="#00d5be" dataKey="bg-color" onChange={handleInput} buttonData={buttonData} conditionalKey="bg" conditionalKeyValue={true} />
          <ColorPicker label="Text Color" dataKey="text-color" onChange={handleInput} buttonData={buttonData} />
          {/* <Toggle label="Use Border" dataKey="border" onChange={handleInput} buttonData={buttonData}  /> */}
          <Textfield label="Thickness" dataKey="border-thickness" onChange={handleInput} buttonData={buttonData} conditionalKey="border" conditionalKeyValue={true} />
          <ColorPicker label="Border Color" value="#00d5be" dataKey="border-color" onChange={handleInput} buttonData={buttonData} conditionalKey="border" conditionalKeyValue={true} />
          <div className="bg-zinc-700 h-16 bottom-0 left-0 right-0 absolute shadow-[0_0_20px_0_oklch(30%_0.006_295.885)] flex justify-between px-4 items-center">
            <button className="px-4 py-1 h-fit bg-teal-400 text-white rounded-full">Copy HTML</button>
          </div>
        </div>
      </div>
    </main>

    // <div className="bg-neutral-300 h-screen">
    //   <svg xmlns="http://www.w3.org/2000/svg" width="138" height="51" viewBox="0 0 138 51" fill="none">
    //     <g xmlns="http://www.w3.org/2000/svg" clipPath="url(#clip0_74_769)">
    //       <circle cx="29.5" cy="25.5" r="12" fill="white"/>
    //       <path d="M30.739 19.5C30.8842 19.4977 32.9554 19.4845 34.3777 20.875C35.2351 21.712 35.6687 22.8669 35.6687 24.3096V31.5H35.074C34.9879 31.4998 34.9197 31.4295 34.9197 31.3457V24.3096C34.9197 23.078 34.5641 22.1046 33.8611 21.415C32.6452 20.2264 30.7731 20.251 30.7527 20.251H25.6306C25.5446 20.2512 25.4764 20.3215 25.4763 20.4053V31.3457C25.4763 31.4317 25.4067 31.4997 25.323 31.5H23.2898V22.2813H23.8845C23.9706 22.2813 24.0388 22.3517 24.0388 22.4355V30.6084C24.0388 30.6946 24.1092 30.7627 24.1931 30.7627H24.5691C24.6553 30.7627 24.7234 30.6923 24.7234 30.6084V19.6572C24.7257 19.571 24.7944 19.5 24.8806 19.5H30.739ZM30.6599 20.8906C30.6962 20.8906 31.5489 20.8957 32.4109 21.2813C33.2411 21.651 34.2302 22.4451 34.2302 24.1191V31.3457C34.2302 31.4319 34.1599 31.5 34.0759 31.5H32.0457V24.1689C32.0479 24.1395 32.0596 23.6988 31.7625 23.3857C31.5356 23.1454 31.1723 23.0254 30.6824 23.0254H27.5974V22.4307C27.5976 22.3447 27.668 22.2765 27.7517 22.2764H30.6853C31.3928 22.2764 31.9439 22.4814 32.3181 22.8828C32.8079 23.4068 32.8031 24.0849 32.7986 24.2051V30.6133C32.7987 30.6993 32.8692 30.7674 32.9529 30.7676H33.3298C33.416 30.7676 33.484 30.6971 33.4841 30.6133V24.1143C33.4841 23.1004 33.0281 22.3793 32.1277 21.9688C31.4109 21.6421 30.6687 21.6367 30.6619 21.6367H27.0691C26.983 21.6367 26.915 21.7072 26.9148 21.791V31.5H26.3201C26.2341 31.4998 26.1658 31.4295 26.1658 31.3457V21.0449C26.1658 20.9589 26.2364 20.8909 26.3201 20.8906H30.6599Z" fill="black"/>
    //     </g>
    //   </svg>
    //   <svg xmlns="http://www.w3.org/2000/svg" width="138" height="51" viewBox="0 0 138 51" fill="none">
    //     <g xmlns="http://www.w3.org/2000/svg" clipPath="url(#clip0_74_769)">
    //       <circle cx="29.5" cy="25.5" r="12" fill="black"/>
    //       <path d="M30.739 19.5C30.8842 19.4977 32.9554 19.4845 34.3777 20.875C35.2351 21.712 35.6687 22.8669 35.6687 24.3096V31.5H35.074C34.9879 31.4998 34.9197 31.4295 34.9197 31.3457V24.3096C34.9197 23.078 34.5641 22.1046 33.8611 21.415C32.6452 20.2264 30.7731 20.251 30.7527 20.251H25.6306C25.5446 20.2512 25.4764 20.3215 25.4763 20.4053V31.3457C25.4763 31.4317 25.4067 31.4997 25.323 31.5H23.2898V22.2813H23.8845C23.9706 22.2813 24.0388 22.3517 24.0388 22.4355V30.6084C24.0388 30.6946 24.1092 30.7627 24.1931 30.7627H24.5691C24.6553 30.7627 24.7234 30.6923 24.7234 30.6084V19.6572C24.7257 19.571 24.7944 19.5 24.8806 19.5H30.739ZM30.6599 20.8906C30.6962 20.8906 31.5489 20.8957 32.4109 21.2813C33.2411 21.651 34.2302 22.4451 34.2302 24.1191V31.3457C34.2302 31.4319 34.1599 31.5 34.0759 31.5H32.0457V24.1689C32.0479 24.1395 32.0596 23.6988 31.7625 23.3857C31.5356 23.1454 31.1723 23.0254 30.6824 23.0254H27.5974V22.4307C27.5976 22.3447 27.668 22.2765 27.7517 22.2764H30.6853C31.3928 22.2764 31.9439 22.4814 32.3181 22.8828C32.8079 23.4068 32.8031 24.0849 32.7986 24.2051V30.6133C32.7987 30.6993 32.8692 30.7674 32.9529 30.7676H33.3298C33.416 30.7676 33.484 30.6971 33.4841 30.6133V24.1143C33.4841 23.1004 33.0281 22.3793 32.1277 21.9688C31.4109 21.6421 30.6687 21.6367 30.6619 21.6367H27.0691C26.983 21.6367 26.915 21.7072 26.9148 21.791V31.5H26.3201C26.2341 31.4998 26.1658 31.4295 26.1658 31.3457V21.0449C26.1658 20.9589 26.2364 20.8909 26.3201 20.8906H30.6599Z" fill="white"/>
    //     </g>
    //   </svg>
    // </div>
  );
}
