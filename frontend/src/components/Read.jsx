import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Read() {

    const [error, setError] = useState("");
    const [data, setData] = useState();

    async function getData() {
        const response = await fetch("http://localhost:4000");
        const result = await response.json();

        if (response.ok) {
            setData(result);
        }
        if (!response.ok) {
            setError(response.error);
        }


    }

    const handleDelete = async (id) => {
        const response = await fetch(`http://localhost:4000/${id}`, {
            method: "DELETE",
        });
        const result1 = await response.json();
        if (!response.ok) {
            setError(result1.error);
        }
        if (response.ok) {
            console.log("deleted", response.ok);
            setError("Deleted Successfully");
            setTimeout(() => {
                setError("");
                getData();
            }, 1000);
        }
    }

    useEffect(() => {
        getData()
    }, [])


    return (
        <div>
            {error && <div className="alert alert-danger"> {error} </div>}
            <div className="container my-2">
                <div className="row">

                    {data?.map((ele) => {
                        return <div className="col-3" key={ele._id}>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{ele.name}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{ele.email}</h6>
                                    <p className="card-text">{ele.age}</p>
                                    <Link to={`/${ele._id}`} className="card-link">
                                        Edit
                                    </Link>
                                    <a href="#" className="card-link" onClick={() => handleDelete(ele._id)}>
                                        Delete
                                    </a>
                                </div>
                            </div>
                        </div>
                    })}


                </div>
            </div>
        </div>
    )
}

export default Read
