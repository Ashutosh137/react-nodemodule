import React, { useState } from 'react';
import Fetchdata from '../api/fetchdata';
const Equipment = () => {
    const url = 'https://exercisedb.p.rapidapi.com/exercises/equipmentList'
    const [data, setdata] = useState([]);
    const [loader, setloader] = useState("false");
    const fetch = async () => {
        setloader("true")
        const data = await Fetchdata(url);
        setloader("false")
        setdata(data);
    }
    return (
        <div className='container font-weight-bold my-5'>
            <button onClick={fetch}>equipments</button>
            <div className=" text-capitalize d-flex overflow-auto   container" >
                {data.map((item) => {
                    return <div className="text-center font-weight-bolder container">
                        <img className="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm460-ks6-BgB_NeDOW26Zrl4S0Fo9OwzAa3dimyQ&s" alt="" />
                        <p className="p-2 font-weight-bold">{item}</p>
                    </div>
                })}
            </div>

        </div>
    )
}

export default Equipment;
