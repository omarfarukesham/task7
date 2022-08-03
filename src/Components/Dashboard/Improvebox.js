import React, { useEffect, useState } from "react";



const Improvebox = () => {
    const [feedbacks, setFeedbacks] = useState([]);


    useEffect(() => {
        fetch("https://serene-headland-23680.herokuapp.com/readFeedback")
            .then((res) => res.json())
            .then((data) => setFeedbacks(data));
    }, [feedbacks]);

    const feedbackHandler = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const department = e.target.department.value;
        const feedback = e.target.feedback.value;
        const data = { email, department, feedback };

        // console.log(data);
        fetch("https://serene-headland-23680.herokuapp.com/feedback", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                const newUser = [...feedbacks, result];
                setFeedbacks(newUser);
                alert("Your feedback submited uccessfully");
                e.target.reset();
                // console.log(result)
            });
        // console.log(feedbacks);
    };

    return (
        <>
            <h1 className="text-center text-2xl fw-bold text-primary mt-10"><i class="fa-solid fa-comment-dots mx-2"></i>Chat </h1>
            <div class="hero bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="text-center lg:text-left bg-base-100 rounded-xl p-2">
                        <h1 class="text-3xl font-bold text-center"> <button class="btn gap-2">
                            Inbox
                            <div class="badge badge-accent">+99</div>
                        </button>Employees Chat ..... </h1>
                        {feedbacks.map((feed) => (
                            <div className="bg-light p-3 mb-2">
                                <div class="avatar online">
                                    <div class="w-12 mask mask-hexagon">
                                        <img src="https://placeimg.com/192/192/people" alt="avtImg" />
                                    </div>
                                </div>
                                <p className="text-primary text-2xl font-bold">Dept -{feed?.department}</p>
                                <p>
                                    <i class="fa-solid fa-comment-sms mx-2 text-accent text-2xl"></i>  -<span className="fw-bold">{feed?.feedback}</span>
                                </p>
                            </div>
                        ))}
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={feedbackHandler}>
                            <div class="card-body">
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Email</span>
                                    </label>
                                    <input name="email" type="text" placeholder="email" class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Department</span>
                                    </label>
                                    <input name="department" type="text" placeholder="Department" class="input input-bordered" />

                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Messages</span>
                                    </label>
                                    <textarea name="feedback" class="textarea textarea-accent" placeholder="Messages"></textarea>

                                </div>
                                <div class="form-control mt-6">
                                    <button type="submit" class="btn btn-primary">Send</button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Improvebox;


// {feedbacks.map((feed) => (
//     <div className="bg-light p-3 mb-2">
//       <p className="fw-bold">Department -{feed?.department}</p>
//       <p>
//         Suggestion -<span className="fw-bold">{feed?.feedback}</span>
//       </p>
//     </div>
//   ))}