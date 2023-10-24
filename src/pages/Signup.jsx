import { useRef, useState } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";


const Signup = () => {

  

  const [error, setError] = useState([]);
  
  const emailInputRef = useRef();
  const userNameInputRef = useRef();
  const passInputRef = useRef();


    const handleSubmit = (e) => {
      e.preventDefault();
      fetch(`http://127.0.0.1:8000/api/users/`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          username: userNameInputRef.current.value,
          email: emailInputRef.current.value,
          password: passInputRef.current.value,
        }),
      })
        .then((res) => {
          if (res.ok) {
            navigate("/login");
          } else {
            return res.json();
          }
        })
        .then((result) => {
          let errorList = [];
          for (let error in result) {
            errorList.push(result[error]);
          }
          setError(errorList);
        });
      
    }

    console.log(error)


    return (
      <div>
        <Header />
        
          {
            error && (
              error.map((err, i) => (
                <div key={i}>
                  <div className="alert alert-error">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="stroke-current shrink-0 h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{err}</span>
                  </div>
                </div>
              ))
            ) 
          }
       
        <div>
          <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Register now!</h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
              </div>
              <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit} className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="email"
                      className="input input-bordered"
                      ref={emailInputRef}
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Username</span>
                    </label>
                    <input
                      type="text"
                      placeholder="username"
                      className="input input-bordered"
                      ref={userNameInputRef}
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="password"
                      placeholder="password"
                      className="input input-bordered"
                      ref={passInputRef}
                      required
                    />
                    <label className="label">
                      <a href="#" className="label-text-alt link link-hover">
                        Forgot password?
                      </a>
                    </label>
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Signup;