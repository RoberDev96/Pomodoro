import { Focus } from "./focus";

interface LongBreakProps {
    onProgressUpdate?: (n: number) => void;
}

export function LongBreak({ onProgressUpdate }: LongBreakProps) {
    return(
        <Focus 
            minInic={15}
            onProgressUpdate={onProgressUpdate}
        />
    )
}