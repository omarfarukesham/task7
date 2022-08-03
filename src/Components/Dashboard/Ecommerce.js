
import React, { useEffect, useState } from 'react';

const Ecommerce = () => {
    const [analysisData, setAnalysisData] = useState([])
    const [searchText, setSearchText] = useState('')

    console.log(analysisData);
    useEffect(() => {
        fetch('https://serene-headland-23680.herokuapp.com/analysis')
            .then(res => res.json())
            // .then(data => setAnalysisData(data.slice(0,50))
            .then(data => {
                // setAnalysisData(data)
                const match = data.filter(v => v.region.includes(searchText))
                setAnalysisData(match.slice(0,100))
            })


    }, [searchText])
    const searchHandler = (e)=>{
        setSearchText(e.target.value)
    }

    return (
        <div>
            <div class="form-control w-96 mx-auto ">
                <input onChange={searchHandler} type="text" placeholder="Search by region ......... Asia, Africa" class="input text-primary input-bordered" />
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2'>
                {
                    analysisData.map(d => <><div class=" w-75 bg-base-100 rounded-xl m-4 shadow-xl">
                        <div class="card-body">
                            <h2 class="card-title">Region :{d.region}</h2>
                            <p>Contry :{d.country}</p>
                            <p>Density :{d.intensity}</p>
                            <p>Source :{d.source}</p>
                            <small> Summary :{d.title}</small>
                        </div>
                    </div></>)
                }

            </div >


        </div>
    );
};

export default Ecommerce;