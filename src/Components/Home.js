import React from 'react';
import Footer from './Dashboard/Footer';
import Improvebox from './Dashboard/Improvebox';

const Home = () => {
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 lg:mx-5 mt-5' data-aos="fade-up" data-aos-duration="2000">
                <div class="card card-side bg-base-100 shadow-xl">
                    <figure><img src="https://images.all-free-download.com/images/graphiclarge/badge_badge_02_vector_160756.jpg" alt="Movie" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Congratulations! Jone Doe</h2>
                        <small>You Got Best Employee Status</small>
                        <h3 className='fw-bold text-primary text-2xl'>$ 45.6K</h3>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary hover text-white">View Sales</button>
                        </div>
                    </div>
                </div>
                
                <div class="stats shadow">

                    <div class="stat">
                        <div class="stat-figure text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                        </div>
                        <div class="stat-title">Total Likes</div>
                        <div class="stat-value text-primary">25.6K</div>
                        <div class="stat-desc">21% more than last month</div>
                    </div>

                    <div class="stat">
                        <div class="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div>
                        <div class="stat-title">Page Views</div>
                        <div class="stat-value text-secondary">2.6M</div>
                        <div class="stat-desc">21% more than last month</div>
                    </div>

                    <div class="stat">
                        <div class="stat-figure text-secondary">
                            <div class="avatar online">
                                <div class="w-16 rounded-full">
                                    <img src="https://placeimg.com/128/128/people" />
                                </div>
                            </div>
                        </div>
                        <div class="stat-value">86%</div>
                        <div class="stat-title">Tasks done</div>
                        <div class="stat-desc text-secondary">31 tasks remaining</div>
                    </div>

                </div>
            </div>
            <div className='grid lg:grid-cols-1 md:grid-cols-1'>
                <div class="overflow-x-auto w-full">
                    <table class="table w-full">

                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" class="checkbox" />
                                    </label>
                                </th>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Favorite Color</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" class="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div class="flex items-center space-x-3">
                                        <div class="avatar">
                                            <div class="mask mask-squircle w-12 h-12">
                                                <img src="https://placeimg.com/192/192/people" alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div class="font-bold">Hart Hagerty</div>
                                            <div class="text-sm opacity-50">United States</div>
                                        </div>
                                    </div>
                                </td>
                                <td>

                                    <span class="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                </td>
                                <td>Purple</td>
                                <th>
                                    <button class="btn btn-ghost btn-xs">details</button>
                                </th>
                            </tr>

                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" class="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div class="flex items-center space-x-3">
                                        <div class="avatar">
                                            <div class="mask mask-squircle w-12 h-12">
                                                <img src="/tailwind-css-component-profile-3@56w.png" alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div class="font-bold">Brice Swyre</div>
                                            <div class="text-sm opacity-50">China</div>
                                        </div>
                                    </div>
                                </td>
                                <td>

                                    <span class="badge badge-ghost badge-sm">Tax Accountant</span>
                                </td>
                                <td>Red</td>
                                <th>
                                    <button class="btn btn-ghost btn-xs">details</button>
                                </th>
                            </tr>

                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" class="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div class="flex items-center space-x-3">
                                        <div class="avatar">
                                            <div class="mask mask-squircle w-12 h-12">
                                                <img src="/tailwind-css-component-profile-4@56w.png" alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div class="font-bold">Marjy Ferencz</div>
                                            <div class="text-sm opacity-50">Russia</div>
                                        </div>
                                    </div>
                                </td>
                                <td>


                                    <span class="badge badge-ghost badge-sm">Office Assistant I</span>
                                </td>
                                <td>Crimson</td>
                                <th>
                                    <button class="btn btn-ghost btn-xs">details</button>
                                </th>
                            </tr>

                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" class="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div class="flex items-center space-x-3">
                                        <div class="avatar">
                                            <div class="mask mask-squircle w-12 h-12">
                                                <img src="/tailwind-css-component-profile-5@56w.png" alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div class="font-bold">Yancy Tear</div>
                                            <div class="text-sm opacity-50">Brazil</div>
                                        </div>
                                    </div>
                                </td>
                                <td>


                                    <span class="badge badge-ghost badge-sm">Community Outreach Specialist</span>
                                </td>
                                <td>Indigo</td>
                                <th>
                                    <button class="btn btn-ghost btn-xs">details</button>
                                </th>
                            </tr>
                        </tbody>



                    </table>
                </div>
            </div>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 mt-5'>
                <div className='mx-auto'>
                    <div class="card w-96 bg-base-100 shadow-xl lg:mx-2 sm:mx-0 px-5">
                        <p className='text-center fw-bold text-primary'>Browser Status</p>
                        <div class="flex justify-around p-2">
                            <img className='w-12' sre="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png" alt="googleImg" />
                            <h1 className='p-2 fw-bold'>  Google</h1>
                            <p class="radial-progress bg-primary text-primary-content border-2 border-primary" style={{ "--value": "70" }}>70%</p>
                        </div>
                        <div class="flex justify-around p-2">
                            <img className='w-12' sre="https://cdn.freebiesupply.com/images/large/1x/google-chrome-icon-j68.jpg" alt="googleImg" />
                            <h1 className='p-2 fw-bold'>  Mozila</h1>
                            <p class="radial-progress bg-primary text-primary-content border-2 border-primary" style={{ "--value": "70" }}>70%</p>
                        </div>
                        <div class="flex justify-around p-2">
                            <img className='w-12' sre="https://cdn.freebiesupply.com/images/large/1x/google-chrome-icon-j68.jpg" alt="googleImg" />
                            <h1 className='p-2 fw-bold'>  Shafari</h1>
                            <p class="radial-progress bg-primary text-primary-content border-2 border-primary" style={{ "--value": "70" }}>70%</p>
                        </div>

                    </div>
                </div>

                <div class=" card w-96 bg-base-100 shadow-xl">
                    <div class=" ">
                        <h2 class=" text-center text-primary">Goal Overview</h2>
                        <div className='text-center p-2 text-primary'>
                            <p class="radial-progress" style={{ "--value": '80', '--size': '12rem', '--thickness': '2px' }}>80%</p>
                        </div>

                        <div class="divider"></div>

                        <div className='flex justify-around'>
                            <div>
                                <p>Complete</p>
                                <small>123333</small>
                            </div>
                            <div className='divider divider-horizontal'></div>
                            <div>
                                <p>In Progras</p>
                                <small>10000000</small>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <div className='grid lg:grid-cols-1'>
                <div>
                    <Improvebox></Improvebox>
                </div>

            </div>

            <Footer></Footer>
        </>
    );
};

export default Home;