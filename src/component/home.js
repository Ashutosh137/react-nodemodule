import React,{useState} from 'react';
import Bodyparts from './bodyparts';
import Equipment from './equipment';
const Home = () => {
    const [search, setsearch] = useState("");
    return (
        <>
            <div className="d-flex container text-capitalize column my-5">
                <div className="my-5">
                    <h1>sweet ,smile and repeat </h1><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
                    <button className='btn btn-danger m-2'>get started</button>
                </div>
                <img className='w-50 px-5' src="https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="gym trainer" />
            </div>
            <div className="d-flex container text-capitalize my-5 row font-weight-bold">
                <h1 className='text-center p-2  my-5'>awesome exercises you should know</h1>
                <form className='d-flex' onSubmit={fetch}>
                <input className='w-100 p-2' type="text" value={search} onChange={(e) => {
                    setsearch(e.target.value);
                    console.log(search);
                }} placeholder='your search exercise' />
                <button type='submit' className='btn btn-danger px-1 p-2'>Search</button>
            </form>
            </div>
            <Equipment />
            <Bodyparts/>
        </>
    )
}

export default Home;
