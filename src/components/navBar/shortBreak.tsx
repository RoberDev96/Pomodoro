import { Focus } from "./focus";

interface ShortBreakProps {
    onProgressUpdate?: (n: number) => void;
}

export function ShortBreak({ onProgressUpdate }: ShortBreakProps) {
    return(
        <Focus 
            minInic={5}
            onProgressUpdate={onProgressUpdate}
        />
    )
}