"use client"
import { tw } from 'twind';

import { useEffect, useState } from 'react';

const CountdownComponent = () => {
  // Initialize state variables for each unit of time
  const [months, setMonths] = useState(0);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const countDownDate = new Date("Jan 01, 2024 00:00:00").getTime();

    // Update the count down every 1 second
    const interval = setInterval(() => {
      // Get today's date and time
      let today = new Date().getTime();

      // Find the distance between now and the count down date
      let interva = countDownDate - today;

      // Time calculations for days, hours, minutes and seconds
      setMonths(Math.floor(interva / (1000 * 60 * 60 * 24 * 30)));
      setDays(30 % Math.floor(interva / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((interva % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      setMinutes(Math.floor((interva % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((interva % (1000 * 60)) / 1000));

      console.log(months,days ,minutes ,seconds)
      // If the count down is finished, write some text
      if (interva < 0) {
        clearInterval(interval);
        setMessage("HAPPY NEW YEAR ! TIME FOR A NEW BEGINNING");
      }
    }, 1000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty array ensures effect runs only once on mount

  return (
    <section className={tw(`bg-gray-800 flex items-center justify-center min-h-screen`)}>
    <div className={tw(`w-full sm:max-w-2xl bg-gray-900 text-white h-[25rem] px-4 rounded py-4`)}>
      <div id="new" className={tw(`bg-[url('https://static01.nyt.com/images/2022/01/21/us/00xp-Lava-vid-cove-mike-ives-is-has-answers/00xp-Lava-vid-cove-mike-ives-is-has-answers-superJumbo.jpg')] rounded h-full bg-cover`)}>
        <h2 className={tw(`text-2xl text-center font-semibold text-yellow-300 mb-10 pt-7`)}>{message || "Until New Beginning"}</h2>
        <div className={tw(`flex justify-around text-center [&>*>h2]:text-xl [&>*>h2]:sm:text-4xl [&>*>h2]:font-bold [&>*>p]:text-sm [&>*>p]:font-semibold text-white`)}>
          <div>
            <h2>{months}</h2>
            <p>Month</p>
          </div>
          <div>
            <h2>{days}</h2>
            <p>days</p>
          </div>
          <div>
            <h2>{hours}</h2>
            <p>Hours</p>
          </div>
          <div>
            <h2>{minutes}</h2>
            <p>Minutes</p>
          </div>
          <div>
            <h2>{seconds}</h2>
            <p>Seconds</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default CountdownComponent;
