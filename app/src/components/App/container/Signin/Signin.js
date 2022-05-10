import './Signin.scss';
import { Link } from 'react-router-dom';

export default function Signin() {
    return (
        <header class="sign bg-center bg-no-repeat bg-center bg-cover h-screen relative flex flex-col">
            <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <Link to="/" className='text-2xl'>x</Link>
                    <h1 class="mb-8 text-3xl text-center">Sign in</h1>
                    <input 
                        type="text"
                        class="block border border-gray-200 w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" />

                    <input 
                        type="password"
                        class="block border border-gray-200 w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" />

                    <button
                        type="submit"
                        class="w-full text-center py-3 rounded bg-gray-800 text-white hover:bg-green-dark focus:outline-none my-1"
                    >Sign in</button>
                </div>

                <div class="text-gray-300 mt-6">
                    Don't have an account? 
                    <Link to="/signup" className='ml-1 no-underline border-b border-blue-500 text-blue-500'>
                        Sign up
                    </Link>.
                </div>
            </div>
        </header>
    )
}
