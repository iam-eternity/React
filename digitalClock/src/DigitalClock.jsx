import { useState, useEffect } from "react";

export default function DigitalClock() {

    const [ time, setTime ] = useState(new Date())

    useEffect(() => {
        const intervalID = setInterval(() => {
            setTime(new Date())
        }, 1000);

        return () => {
            clearInterval(intervalID)
        }
    }, [])
    
    function formatTime() {
        let hours = time.getHours()
        const min = time.getMinutes();
        const sec = time.getSeconds();
        const meridiem = hours >= 12 ? "PM" : "AM"
        hours = hours % 12 || 12;
        
        return `${padZero(hours)}:${padZero(min)}:${padZero(sec)} ${meridiem}`
    }

    function padZero(number) {
        return (number < 10 ? "0" : "") + number
    }
    return (
        <>
    <div className="clock">
        <div className="clock">
            <span>{formatTime()}</span>
        </div>
    </div>
        </>
    )
}
