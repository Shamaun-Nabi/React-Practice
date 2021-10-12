import { useState } from "react";
import "./App.css";

function App() {
  // const [value, setvalue] = useState();
  // const [userName, setname] = useState();

  // const userValue = (event) => {
  //   setvalue(event.target.value);
  // };
  // const valueSubmit = (event) => {
  //   event.preventDefault()
  //   let a = value.toUpperCase()
  //   setname(a);
  //   console.log(value)
  // };

  // let crrtime = new Date().toLocaleTimeString();
  // const [time, settime] = useState(crrtime);
  // const UpdateTime = () => {
  //   crrtime = new Date().toLocaleTimeString();
  //   settime(crrtime);
  // };
  // setInterval(UpdateTime, 1000);

  // Bootsrp form
  // For mail Part
  const [name, setvalueofName] = useState();
  const valueofName = (event) => {
    setvalueofName(event.target.value);
    console.log(name);
  };

  // for password part
  const [password, setpassword] = useState("");
  const passwordChange = (e) => {
    setpassword(e.target.value);
    console.log(password);
  };

  // for showing data part
  const [show, setshow] = useState();
  const [showpass, setshowpass] = useState();
  const showValue = (event) => {
    event.preventDefault();
    setshow(name);
   setshowpass(password)
  };

  return (
    <div className="mainBody">
      {/* <h4 className="text-center text-white mt-4 p-4 bg-dark">🎰 {time} 🎰</h4> */}
      <div>
        {/* <h3>Your Name is :{userName} </h3>
       <form action="" onSubmit={valueSubmit}>
       <input type="text" onChange={userValue}/>
        <input type="password" onChange={userValue}/>
        <button type="submit" >Submit</button>
       </form> */}

        <div className="container">
          <form action="" onSubmit={showValue}>
            <div class="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                onChange={valueofName}
                type="text"
                className="form-control"
                placeholder="name@example.com"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Password
              </label>
              <input
                onChange={passwordChange}
                type="password"
                className="form-control"
                placeholder="name@example.com"
              />
            </div>
            <button type="submit" className="btn btn-dark">
              Submit
            </button>
          </form>
        </div>

        <div className="text-center">
          <h3>Your name is:{show} </h3>
          <h3>Your Password is:{showpass} </h3>
        </div>
      </div>
    </div>
  );
}

export default App;
