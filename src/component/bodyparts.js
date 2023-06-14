import React, { useState } from 'react'
import Fetchdata from '../api/fetchdata';

const Bodyparts = () => {
    const url1 = 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList';

    const [data, setdata] = useState([]);
    const [loader, setloader] = useState("false");
    const fetch = async () => {
        setloader("true")
        const data = await Fetchdata(url1);
        setloader("false")
        setdata(data);
    }
    return (
        <div>
            <button onClick={fetch}>data fetching from this</button>
            <div className=" text-capitalize d-flex overflow-auto  container" >
                {data.map((item) => {
                    return <div className="text-center font-weight-bolder container">
                        <img src="data:image/png;base64,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" alt="" />
                        <p className="p-2 font-weight-bold">{item}</p>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Bodyparts;
