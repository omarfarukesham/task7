import React from 'react';

const Education = () => {
    return (
        <div className='mb-8'>
            <div class="divider font-bold text-3xl text-secondary my-20"> Education and Training</div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:mx-5' data-aos="fade-up" data-aos-duration="2000">
                <div class="card w-75 bg-base-100 shadow-xl">
                    <div class="avatar flex justify-center">
                        <div class="w-12 rounded-full">
                            <img src="https://www.vhv.rs/dpng/d/397-3976471_education-icon-png-transparent-png.png" />
                        </div>
                    </div>

                    <div class="card-body text-center">
                        <h2 class="text-2xl font-bold text-secondary">Post Graduation</h2>
                        <p>Master of Economics</p>
                        <p>National University</p>

                        <small>Result - 1st Class</small>

                    </div>
                </div>


                <div class="card w-75 bg-base-100 shadow-xl">
                    <div class="avatar flex justify-around">
                        <div class="w-12 rounded-full">
                            <img src="https://aplikas.com/wp-content/uploads/2017/01/icon-training-informationmapping-r-worldssl-net_.png" />
                        </div>
                    </div>
                    <div class="card-body text-center">
                        <h2 class="text-2xl font-bold text-secondary">Diploma in web Development(php,sql)</h2>
                        <p>People and Tech(usa, online)</p>
                        <small>Successfully completion with Certified</small>

                    </div>
                </div>
                <div class="card w-75 bg-base-100 shadow-xl">
                    <div class="avatar flex justify-center">
                        <div class="w-16 rounded-full">
                            <img src="https://static.vecteezy.com/system/resources/previews/003/241/296/non_2x/webinar-online-training-tutor-icon-vector.jpg" />
                        </div>
                    </div>
                    <div class="card-body text-center">
                        <h2 class="text-2xl font-bold text-secondary">Complete Web Development(MERN)</h2>
                        <p>Programming Hero(Bangladesh)</p>
                        <small>Successfully completed with Certified</small>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;