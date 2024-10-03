import { useState } from 'react';
import { Link } from 'react-router-dom';
import $ from "jquery";


function Login() {
    const [isLogin, setIsLogin] = useState(true);


    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setpassword] = useState("")
    const [confirm_passowrd, setConfirmPassowrd] = useState("")
    // a dekhte rehna mai kasie set krunga isme input ki value




    const toggleForm = () => {
        setIsLogin(!isLogin);
    };



    const handleSubmit = (e) => {

        e.preventDefault();

        // console.log(`phone is : ${phone}`);
        // console.log(`password is : ${passowrd}`);


        // SAMAJHE GAYE ??HA HA BUAIAISE HI SIGNUP KA BHI KARNA HAI NA???haa  aise hi krna hai same sara okay bhai ek or baat ki login.php me hi wahi likhna hai na jo ham action ki file me likhate hai data database me store karne ke liye ?????? haa file ka name kuch bhi kr skte hai aisa koirule nhi hai bus access krte time file ka nme sahi se daalna aur response json se krna? okay bhai any dobt krlo fir doubt hoga puch lena okay brothern hm done wo dikhaio mujhe jaha se prouct upload krte hai uska page
        // okay  

        // ye dekho


        // let username = "MANISH";


        if (isLogin == true) {



            let data = {
                // is object mai data send krna aur ye wala data waha pohoch jaayga agar post krke bhejoge to $_POST KREKE mil jaayga $_GET MAI to pta hi hai ki kaise krna hai tum app yhi bana lo but php ki files jaha maine banayi hai whi bana kr use kr lo aur ise main combine kr dunga abhi aise kr lo aur data kasie bhehjna hai dekh lo ye pata haina haha theek hai fir 

                phone: phone,
                password: password,

            }

            $.get("http://localhost/reactAp/ajax/login.php", data, function (response) {



                // ye response wo hai jo hamne echo  kiya hai but agart tum echo  without json_encode kroge to wo fail mai chaka jaayga isliye dhyan rakhna ki echo  json_encpde mai ho har baaraur  


                // object use krna aata haina . krke uwe krna ??yes ok aur usestate ka pata haina ??
                // ha const [data, setdata] = userState();   ?
                // isme input se set krna aatahai ??nhi bhai theek hai ruko mujhe dekhte rehena dhyan se main kaise krta hu onchange per theek hai??okay ok lets start

                // first go to input element 2. 




                // but hamne username nhi liya hai shayad email liya hai right??rightok first make two 


                console.log(response);

            }).fail(error => {
                console.log(error);
            })
        }


        if (isLogin != true) {

            let data = {
                // is object mai data send krna aur ye wala data waha pohoch jaayga agar post krke bhejoge to $_POST KREKE mil jaayga $_GET MAI to pta hi hai ki kaise krna hai tum app yhi bana lo but php ki files jaha maine banayi hai whi bana kr use kr lo aur ise main combine kr dunga abhi aise kr lo aur data kasie bhehjna hai dekh lo ye pata haina haha theek hai fir 

                firstname: firstname,
                lastname: lastname,
                email: email,
                phone: phone,
                password: password,
                confirm_passowrd: confirm_passowrd

            }


            $.get("http://localhost/reactAp/ajax/signup.php", data, function (response) {



                // ye response wo hai jo hamne echo  kiya hai but agart tum echo  without json_encode kroge to wo fail mai chaka jaayga isliye dhyan rakhna ki echo  json_encpde mai ho har baaraur  


                // object use krna aata haina . krke uwe krna ??yes ok aur usestate ka pata haina ??
                // ha const [data, setdata] = userState();   ?
                // isme input se set krna aatahai ??nhi bhai theek hai ruko mujhe dekhte rehena dhyan se main kaise krta hu onchange per theek hai??okay ok lets start

                // first go to input element 2. 




                // but hamne username nhi liya hai shayad email liya hai right??rightok first make two 


                console.log(response);

            }).fail(error => {
                console.log(error);
            })
        }



    }








return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-5">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-lg w-full">
            <h2 className="text-2xl font-bold text-center mb-6">{isLogin ? 'Login' : 'Signup'}</h2>

            <form onSubmit={handleSubmit}>
                {/* Name field, only visible if user is signing up */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-5'>
                    {!isLogin && (
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                First Name
                            </label>
                            <input

                                onChange={e => {
                                    setFirstName(e.target.value)
                                }}
                                type="text"
                                id="firstname"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
                                placeholder="Enter your First name"
                            />
                        </div>
                    )}
                    {!isLogin && (
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Last Name
                            </label>
                            <input

                                onChange={e => {
                                    setLastName(e.target.value)
                                }}

                                type="text"
                                id="lastname"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
                                placeholder="Enter your Last name"
                            />
                        </div>
                    )}
                </div>

                {!isLogin && (
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Email Id
                        </label>
                        <input

                            onChange={e => {
                                setEmail(e.target.value)
                            }}


                            type="email"
                            id="email"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
                            placeholder="Enter your email"
                        />
                    </div>
                )}



                {/* Email field */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Mobile Number
                    </label>
                    <input

                        value={phone}
                        onChange={e => {
                            setPhone(e.target.value)
                        }}
                        type="number"
                        id="mobileNo"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
                        placeholder="Enter your Mobile Number"
                    />
                </div>

                {/* Password field */}
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input

                        value={password}
                        onChange={e => {
                            setpassword(e.target.value)
                        }}
                        type="password"
                        id="password"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
                        placeholder="Enter your password"
                    />


                </div>

                {!isLogin && (
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Comfirm Password
                        </label>
                        <input


                            onChange={e => {
                                setConfirmPassowrd(e.target.value)
                            }}

                            type="password"
                            id="confirmPassword"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
                            placeholder="Enter your confirm passowrd"
                        />
                    </div>
                )}




                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none "
                >
                    {isLogin ? 'Login' : 'Signup'}
                </button>

            </form>

            {/* Toggle between login and signup */}
            <div className="mt-6 text-center">
                <p>
                    {isLogin ? 'Don’t have an account?' : 'Already have an account?'}
                    <button
                        className="text-blue-500 font-bold ml-1"
                        onClick={toggleForm}
                    >
                        {isLogin ? 'Signup' : 'Login'}
                    </button>
                </p>
            </div>
        </div>
    </div>
);
}

export default Login;
