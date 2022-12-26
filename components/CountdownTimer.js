import { useEffect, useState } from 'react';
import ClockContainer from './ClockContainer';

const CountdownTimer = ( { targetTime } ) =>
{
    const [ timeLeft, setTimeLeft ] = useState( {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    } );

    useEffect( () =>
    {
        const interval = setInterval( () =>
        {
            const currentTime = new Date().getTime();
            const targetTimeInMilliseconds = targetTime * 1000;
            const distance = targetTimeInMilliseconds - currentTime;

            setTimeLeft( {
                days: Math.floor( distance / ( 1000 * 60 * 60 * 24 ) ),
                hours: Math.floor( ( distance % ( 1000 * 60 * 60 * 24 ) ) / ( 1000 * 60 * 60 ) ),
                minutes: Math.floor( ( distance % ( 1000 * 60 * 60 ) ) / ( 1000 * 60 ) ),
                seconds: Math.floor( ( distance % ( 1000 * 60 ) ) / 1000 ),
            } );
        }, 1000 );

        return () => clearInterval( interval );
    }, [ targetTime ] );

    console.log( targetTime )

    return (
        <div>
            <p className="text-fuchsia-100 font-thin text-l md:text-2xl px-6">Next draw in:</p>

            <ClockContainer>
                <div className="text-5xl">
                    { timeLeft.days.toString().padStart( 2, '0' ) }:
                    { timeLeft.hours.toString().padStart( 2, '0' ) }:
                    { timeLeft.minutes.toString().padStart( 2, '0' ) }:
                    { timeLeft.seconds.toString().padStart( 2, '0' ) }
                </div>

            </ClockContainer>

        </div>
    );
};

export default CountdownTimer;
