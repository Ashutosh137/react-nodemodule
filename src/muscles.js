import React, { useState } from 'react';
import Fetchdata from './api/fetchdata';
const Muscles = () => {
    const url2 = 'https://exercisedb.p.rapidapi.com/exercises/targetList';
    const [data, setdata] = useState([]);
    const [loader, setloader] = useState("false");
    const fetch = async () => {
        setloader("true")
        const data = await Fetchdata(url2);
        setloader("false")
        setdata(data);
    }
    return (
        <div>
            <button onClick={fetch}>muscles</button>
            <div className=" text-capitalize mb-3" >
                {data.map((item) => {
                    return <div className="card text-center mb-3 d-flex flex-col">
                        <h2 className="card-title text-center">{item}</h2>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Muscles
