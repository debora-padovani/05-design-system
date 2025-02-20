import { getContrast } from "polished";
import { colors } from "@ignite-ui/tokens";

export function ColorsGrid() {
    return Object.entries(colors).map(([key, color]) => {
        return (
            <div key={key} style={{ backgroundColor: color, padding: '2rem' }}>
                <div 
                    style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        fontFamily: 'monospace', 
                        color: getContrast(color, '#FFF') < 3.5 ? '#363636' : '#FFF'
                    }}
                >
                    <strong>${key}</strong>
                    <strong>color</strong>
                </div>
            </div>
        )
    })
}