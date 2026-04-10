// import { useState } from "react"
// import '../../assets/style/customTime.css'


// export function CustomTime() {

//   const [focus,setFocus] = useState('25');
//   const [short,setShort] = useState('5');
//   const [long,setLong] = useState('10');


//   return (
//       <div className="buttomTime w-full h-full bg-[transparent/10]">
//     <main className=" bg-[#000000] h-44 w-75 flex flex-col p-4 rounded-2xl">
//       <section>
//         <div>
//           <p className="text-[#A1A1AA]">Pomodoro duration (minutes)</p>
//           <input type="text" className="text-[#A1A1AA] bg-[#27272A] rounded-sm w-full " 
//           value={25}  onChange={(e) => setFocus(e.target.value)}/>
//         </div>
//       </section>
//       <section className="flex justify-around gap-4">
//         <div>
//           <p className="text-[#A1A1AA]">Short break (min)</p>
//           <input type="text" className="text-[#A1A1AA] w-30 bg-[#27272A] rounded-sm" 
//            value={5} onChange={(e) => setFocus(e.target.value)}/>
//         </div>
//         <div>
//           <p className="text-[#A1A1AA]">Long break (min)</p>
//           <input type="text" className="w-30 text-[#A1A1AA] bg-[#27272A] rounded-sm"
//            value={15}  onChange={(e) => setFocus(e.target.value)}/>
//         </div>
//       </section>
//       <button className=" text-[#A1A1AA] mt-4 w-full bg-[#52525B] rounded-sm
//       cursor-pointer hover:bg-[#707079]">Update Setting</button>
//     </main>
//       </div>
//   )
// }
