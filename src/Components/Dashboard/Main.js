import React, { useEffect, useState } from 'react';

const Main = () => {
    const [product, setProduct] = useState([])
    const [searchText, setSearchText] = useState('')
    const [modalhandler, setModalHander] = useState({})
    const [sortText, setSortText] = useState('')

    useEffect(() => {
        fetch(' https://cryptic-inlet-15523.herokuapp.com/product2')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])


    useEffect(() => {
        fetch(' https://cryptic-inlet-15523.herokuapp.com/product2')
            .then(res => res.json())
            // .then(data => setAnalysisData(data.slice(0,50))
            .then(data => {
                // setAnalysisData(data)
                const match = data.filter(v => v.brand.toLowerCase().includes(searchText))
                setProduct(match)
            })


    }, [searchText])


    const searchHandler = (e) => {
        setSearchText(e.target.value)
    }



    const deleteProduct = (id) => {
        const proceed = window.confirm("Are you sure for Delete .........");
        if (proceed) {
            const url = ` https://cryptic-inlet-15523.herokuapp.com/removeOrder/${id}`;
            fetch(url, {
                method: "delete",
            })
                .then((res) => res.json())
                .then((data) => {
                    const remaining = product.filter((prod) => prod._id !== id);
                    setProduct(remaining);

                });
        }
    }

     //Sorting from control logic code here................................
     const sortHandler = (e) => {
        setSortText(e.target.value)
    }

    // sortText  hooks from Mongodb to UI.............................
    useEffect(() => {
        fetch(' https://cryptic-inlet-15523.herokuapp.com/product2')
            .then(res => res.json())
            .then(data => {
                if (sortText == '') {
                    // setProduct(data)
                } else if (sortText == 'All Product') {
                    setProduct(data)
                } else if (sortText == '2020') {
                    const match = data.filter(v => v.year.includes(sortText))
                    setProduct(match)
                } else if (sortText == '2021') {
                    const match = data.filter(v => v.year.includes(sortText))
                    setProduct(match)
                }
                else if (sortText == 'shoes') {
                    const match = data.filter(v => v.category.includes(sortText))
                    setProduct(match)
                }
               
            })

    }, [sortText, product])

   



    return (
        <div>
            <div className='flex justify-around'>
                <div class="form-control w-96 mx-auto ">
                    <input onChange={searchHandler} type="text" placeholder="Search by Brand, nike, rebook ..." class="input text-primary input-bordered" />
                </div>

                <div className='w-96 mx-auto '>
                    <select onChange={sortHandler} class="select select-bordered w-full max-w-xs">
                        <option disabled selected>Sorting Product</option>
                        <option>All Product</option>
                        <option >2020</option>
                        <option >2021</option>
                        <option>shoes</option>
                    </select>
                </div>
            </div>

            <div className='grid lg:grid-cols-4 md:grid-cols-2 p-5'>
                {
                    product.map((pd, index) =>
                        <div key={pd._id} class="card card-compact w-56 bg-base-100 shadow-xl gap-4 m-2">
                            <figure><img src={pd?.image} alt="Shoes" /></figure>
                            <div class="card-body">
                                <h2 class="card-title">Brand -{pd?.brand}</h2>
                                <small className='font-bold text-primary'>Price :{pd?.price}</small>
                                <p>Size :{pd?.size}</p>
                                <p>Year :{pd?.year}</p>
                                <div class="card-actions justify-around">
                                    <label for="my-modal-6" onClick={() => setModalHander(pd)} class="btn btn-primary  modal-button btn-xs text-white">Details</label>
                                    {/* <button for="my-modal-6" class="btn btn-primary  modal-button btn-xs text-white">Details</button> */}
                                    <button onClick={() => deleteProduct(pd._id)} class="btn btn-error btn-xs text-white">Delete</button>
                                </div>

                            </div>

                        </div>

                    )
                }


            </div>

            {

                <>
                    <input type="checkbox" id="my-modal-6" class="modal-toggle" />
                    <div class="modal modal-bottom sm:modal-middle">
                        <div class="modal-box">
                            <figure><img src={modalhandler?.image} alt="Shoes" /></figure>
                            <h3 class="font-bold text-lg">Brand -----{modalhandler?.brand}</h3>
                            <h3 class="font-bold text-lg">Model -----{modalhandler?.size}</h3>
                            <p class="py-4">Price ------{modalhandler?.price}</p>
                            <p class="py-4">Publish ------{modalhandler?.year}</p>
                            <p class="py-4">Categroy -------{modalhandler?.category}</p>
                            <div class="modal-action">
                                <label for="my-modal-6" class="btn">Close!</label>
                            </div>
                        </div>
                    </div>
                </>


            }


        </div >
    );
};

export default Main;