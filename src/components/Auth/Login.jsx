import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log(email)
        console.log(password)
        
        setEmail('')
        setPassword('')
    }

    return (
        <div className="login-container w-full h-screen bg-zinc-900 px-5 sm:px-28 md:px-60 lg:px-80 xl:px-[26rem] 2xl:px-[32rem] py-10">
            <div className="">
                <h1 className="text-white text-3xl font-bold">Log In</h1>
            </div>
            <div className="mt-40 lg:border-2 lg:border-emerald-500 lg:rounded-xl lg:p-20 2xl:px-40 2xl:py-28">
                <form onSubmit={handleSubmit} className="text-white flex flex-col items-center justify-center gap-5 xl:gap-7">
                    <input
                        required
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        className="w-full px-5 py-2 rounded-full outline-none border-2 border-emerald-500 bg-transparent text-lg lg:text-xl"
                        type="email"
                        placeholder="Email"
                    />
                    <input
                        required
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        className="w-full px-5 py-2 rounded-full outline-none border-2 border-emerald-500 bg-transparent text-lg lg:text-xl"
                        type="password"
                        placeholder="Password"
                    />
                    <button
                        className="w-full px-5 py-2 bg-emerald-500 rounded-full text-xl lg:text-[1.35rem] font-semibold mt-5"
                        type="submit"
                    >
                        Log In
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
