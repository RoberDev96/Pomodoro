import { useRef, useState } from "react";
import Countdown from "react-countdown";

interface FocusProps {
    onProgressUpdate?: (n: number) => void;
    minInic?:number;
}
interface CountdownRendererProps {
    hours: number
    minutes: number;
    seconds: number;
    completed: boolean;
    total: number;
}

export function Focus({ onProgressUpdate, minInic = 10 }: FocusProps) {

    const inic = minInic *60
    const [add, setAdd] = useState(inic)
    const [targetDate, setTargetDate] = useState(() => Date.now() + add * 1000);
    const [isRunning, setIsRunning] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);
    const [textPause, setTextPause] = useState<string>('pause')
    const [tiempoRestante, setTiempoRestante] = useState(add);

    const Completionist = () => <span> ¡Listo! </span>;
    const countdownRef = useRef<Countdown>(null)
    
    const renderer = ({ hours, minutes, seconds, completed, total }: CountdownRendererProps) => {
        if (completed) {
            onProgressUpdate?.(100);
            setIsRunning(false);
            setTextPause('Pause');
            setHasStarted(false);
            return <Completionist />;
        }
        
        const secondsRest = total / 1000;
        const transcurridos = add - secondsRest
        let porcentaje = (transcurridos / add) * 100
        
        porcentaje = Math.min(100, Math.max(0, porcentaje));
        
        onProgressUpdate?.(porcentaje)
        setTiempoRestante(secondsRest);

        const formatNumber = (num: number) => num < 10 ? `0${num}` : num;
        
        if (hours > 0) {
            return <span>{hours}:{formatNumber(minutes)}:{formatNumber(seconds)}</span>;
        } else {
            return <span>{formatNumber(minutes)}:{formatNumber(seconds)}</span>;
        }
    };
    
    const handleStart = (() => {
        setIsRunning(true);
        setHasStarted(true);
        countdownRef.current?.start()
    })
    
    const handleRestart = () => {
        setTargetDate(Date.now() + add * 1000)
        setIsRunning(true)
        setHasStarted(true);
        countdownRef.current?.start()
        setTextPause('Pause')
    }
    
    const handlePause = () => {
        countdownRef.current?.pause();
        setTextPause('Resume');
        setIsRunning(false);
    };

    const handleResume = () => {
        countdownRef.current?.start();
        setTextPause('Pause');
        setIsRunning(true);
    };

    interface Button {
        min: number;
        id: number
    }

    const button: Button[] = [
        { min: 25, id: 0 },
        { min: 10, id: 1 },
        { min: 5, id: 2 },
        { min: 1, id: 3 }
    ]

    const handleSum = (minutesAdd: number) => {
        const newSeconds = tiempoRestante + (minutesAdd * 60)
        const nuevoMin = (Date.now() + newSeconds * 1000);
        setAdd(newSeconds);
        setTargetDate(nuevoMin)
        setTiempoRestante(newSeconds)
        
        onProgressUpdate?.(0);
        
        if (!isRunning) {
            setHasStarted(false);
            setTextPause('Pause');
        }
    };

    return (
        <main>
            <div className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl w-fit text-white font-bold mx-auto sm:ml-20">
                <Countdown
                    date={targetDate}
                    renderer={renderer}
                    ref={countdownRef}
                    autoStart={false}
                />
            </div>
            <section className="mt-12">
                <ul className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-8 lg:gap-16 px-4 sm:px-0">
                    {button.map(item => (
                        <li key={item.id}
                            onClick={() => handleSum(item.min)}
                            className="text-[#595963] hover:text-white cursor-pointer text-sm sm:text-base whitespace-nowrap"
                        >+{item.min}min</li>
                    ))}
                </ul>
            </section>
            <section className="mt-5 flex justify-center">
                {!hasStarted &&
                    <div>
                        <button className="w-20 text-center cursor-pointer text-[15px] h-9 text-white
                    border-transparent bg-[#3F3F46] rounded-xl hover:bg-[#595963]"
                            onClick={handleStart}>Start</button>
                    </div>
                }
                {hasStarted && (
                    <div className="flex gap-11 mt-5">
                        <button className="w-20 text-center cursor-pointer text-[15px] h-9 text-white
                    border-transparent bg-[#3F3F46] rounded-xl hover:bg-[#595963]"
                            onClick={textPause === 'Pause' ? handlePause : handleResume}>
                            {textPause}</button>
                        <button className="w-20 text-center cursor-pointer text-[15px] h-9 text-white
                    border-transparent bg-[#3F3F46] rounded-xl hover:bg-[#595963]"
                            onClick={handleRestart}>Restart</button>
                    </div>)}
            </section>
        </main>
    )
}