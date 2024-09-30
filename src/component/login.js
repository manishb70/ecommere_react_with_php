import { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-5">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-lg w-full">
                <h2 className="text-2xl font-bold text-center mb-6">{isLogin ? 'Login' : 'Signup'}</h2>

                <form>
                    {/* Name field, only visible if user is signing up */}
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-5'>
                        {!isLogin && (
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
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
                                    type="text"
                                    id="name"
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
                                type="password"
                                id="confirmPassword"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
                                placeholder="Enter your confirm passowrd"
                            />
                        </div>
                    )}

                   

                        <Link to={"/dashboard"} >
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none "
                    >
                        {isLogin ? 'Login' : 'Signup'}
                    </button>
                    </Link>
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
