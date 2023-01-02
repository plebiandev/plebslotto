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
            <p className="text-fuchsia-100 font-thin text-l md:text-2xl px-6">Next draw in</p>

            <ClockContainer>

                <div class="basis-1/6 hover:text-">{ timeLeft.days.toString().padStart( 2, '0' ) }</div>
                <div class="basis-1/6">{ timeLeft.hours.toString().padStart( 2, '0' ) }</div>
                <div class="basis-1/6">{ timeLeft.minutes.toString().padStart( 2, '0' ) }</div>
                <div class="basis-1/6">{ timeLeft.seconds.toString().padStart( 2, '0' ) }</div>

            </ClockContainer>

            <div className="flex flex-row text-fuchsia-200 px-6 text-1xl">
                <div class="basis-1/6">Days</div>
                <div class="basis-1/6">Hours</div>
                <div class="basis-1/6">Minutes</div>
                <div class="basis-1/6">Seconds</div>


            </div>



        </div>
    );
};

export default CountdownTimer;
