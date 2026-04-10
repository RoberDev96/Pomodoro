import { useState } from "react";
import { Focus } from "../navBar/focus";
import { LongBreak } from "../navBar/longBreak";
import { ShortBreak } from "../navBar/shortBreak";

export function Box() {

  interface Props {
    name: string;
    id: number;

  }

  const [nav, setNav] = useState('Focus')
  const [progress, setProgress] = useState(0);
  const [showCustomTime, setShowCustomTime] = useState(false);

  const navBar: Props[] = [
    { name: 'Focus', id: 0 },
    { name: 'Short Break', id: 1 },
    { name: 'Long Break', id: 2 }
  ]

  const handleClick = (tab: string) => {
    setNav(tab);
  }

  const parametros = () => {
    switch (nav) {
      case 'Focus':
        return <Focus onProgressUpdate={setProgress} />;
      case 'Short Break':
        return <ShortBreak />;
      case 'Long Break':
        return <LongBreak />;

      default:
        return <Focus onProgressUpdate={setProgress} />;
    }
  }

  return (
    <div className="w-full flex flex-col h-full bg-[#18181B]">
      {/* <header className="m-5 text-end">
        <button className="text-white"
         onClick={() => setShowCustomTime(!showCustomTime)}
        ><Icon icon="mingcute:calendar-time-add-line"
          width={20} height={20} /></button>
      </header> */}
      <nav className="mt-14 h-10">
        <ul className="navi flex justify-around px-28">
          {navBar.map((item) => <li
            className={`w-24 text-center cursor-pointer text-[15px] h-8 text-white ${nav === item.name
              ? "cursor-pointer font-bold border rounded-lg border-transparent bg-[rgba(255,255,255,0.1)]  transition-transform"
              : ""
              }`}


            key={item.id}
            onClick={() => handleClick(item.name)}
          >{item.name}</li>)}
        </ul>
      </nav>
      {/* {showCustomTime && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-[#18181B] rounded-lg p-6">
      <button 
        onClick={() => setShowCustomTime(false)}
        className="absolute top-4 right-4 text-white"
      >
        <Icon icon="mingcute:close-line" width={24} height={24}/>
      </button>
    </div>
  </div>
)} */}

      <main className="mt-16 flex justify-center h-28">
        {parametros()}
      </main>
      <div className="w-full px-24">
        <div className="w-full bg-[#474750] rounded-full h-2">
          <div className="bg-gray-400 h-2 rounded-full" style={{ width: `${progress}%` }} />
        </div>
      </div>

    </div>

  )
}

