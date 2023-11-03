import React from 'react'


const Timer = () => (
    <div className="w-full sm:max-w-2xl bg-slate-900 text-white h-[25rem] px-4 rounded py-4">
        <div id="new" className="bg-[url('https://static01.nyt.com/images/2022/01/21/us/00xp-Lava-vid-cove-mike-ives-is-has-answers/00xp-Lava-vid-cove-mike-ives-is-has-answers-superJumbo.jpg')] rounded h-full bg-cover">
            <h2 className="text-2xl text-center font-semibold mb-10 pt-7">Until New Beginning</h2>
            <div className="flex justify-around text-center [&>*>h2]:text-xl [&>*>h2]:sm:text-4xl [&>*>h2]:font-bold [&>*>p]:text-sm [&>*>p]:font-semibold">
                <div>
                    <h2 id="month">10</h2>
                    <p>Month</p>
                </div>

                <div>
                    <h2 id="day">30</h2>
                    <p>days</p>
                </div>

                <div>
                    <h2 id="hour">20</h2>
                    <p>Hours</p>
                </div>

                <div>
                    <h2 id="minute">59</h2>
                    <p>Minutes</p>
                </div>

                <div>
                    <h2 id="second">40</h2>
                    <p>Seconds</p>
                </div>
            </div>
        </div>
    </div>
)
export default Timer;