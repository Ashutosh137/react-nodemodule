import React from 'react'

const Exercise = (props) => {
    return (
        <div className="card text-left  w-50 text-capitalize">
            <div className=" ">
                <h1 className="mt-2 text-center card-title fs-3 fw-bolder ">{props.data.name}</h1>
                <img src={props.data.gifUrl} className="img-fluid w-100" alt="gif" />
                <ul className=" fs-5 m-2">
                    <h5 className="card-subtitle "><b>body part:</b>{props.data.bodyPart}</h5>
                    <li className="list-group-item "><b>equipment:</b>     {props.data.equipment}</li>
                    <li className="list-group-item "> <b>target:</b> {props.data.target}</li>
                </ul>
            </div>
        </div>
    )
}

export default Exercise
