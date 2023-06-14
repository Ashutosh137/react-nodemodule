import React, { useState } from 'react'
import Fetchdata from '../api/fetchdata';

import Exercise from './exercise';
const Allexercise = () => {
    const url3 = 'https://exercisedb.p.rapidapi.com/exercises';
    const [data, setdata] = useState([]);
    const [search, setsearch] = useState("");
    const [loader, setloader] = useState("false");
    const fetch = async (url) => {
        setloader("true")
        const data = await Fetchdata(url3);
        setloader("false")
        setdata(data);
    }
    return (
        <div>
            <form className='d-flex' onSubmit={fetch}>
                <input className='w-100 p-2' type="text" value={search} onChange={(e) => {
                    setsearch(e.target.value);
                    console.log(search);
                }} placeholder='your search exercise' />
                <button type='submit' className='btn btn-danger px-1 p-2'>Search</button>
            </form>
            <div className="d-flex flex-wrap">
                {data.map(item => {
                    return <Exercise data={item} />
                })}</div>
        </div>
    )
}

export default Allexercise
