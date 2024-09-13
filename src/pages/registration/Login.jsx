import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import myContext from '../../context/data/myContext';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../fireabase/FirebaseConfig';
import { toast } from 'react-toastify';
import Loader from '../../components/loader/Loader';

function Login() {
    const context = useContext(myContext);
    const { loading, setLoading } = context;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const login = async () => {
        setLoading(true);
        try {
            const result = await signInWithEmailAndPassword(auth, email, password);
            toast.success("Login successful", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            localStorage.setItem('user', JSON.stringify(result));
            navigate('/');
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    return (
        <div className='flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-900 to-gray-700'>
            {loading && <Loader />}
            <motion.div
                className='bg-gray-800 px-10 py-10 rounded-xl shadow-lg w-[90%] max-w-md mx-auto'
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <h1 className='text-center text-white text-2xl mb-6 font-bold'>Login to Your Account</h1>

                <div className='space-y-4'>
                    <motion.input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        name='email'
                        className='block bg-gray-700 px-4 py-3 w-full rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition'
                        placeholder='Email'
                        whileFocus={{ scale: 1.03 }}
                        transition={{ duration: 0.2 }}
                    />

                    <motion.input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        name='password'
                        className='block bg-gray-700 px-4 py-3 w-full rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition'
                        placeholder='Password'
                        whileFocus={{ scale: 1.03 }}
                        transition={{ duration: 0.2 }}
                    />
                </div>

                <motion.button
                    onClick={login}
                    className='mt-6 bg-yellow-500 w-full text-black font-bold py-3 rounded-lg hover:bg-yellow-600 transition'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    Login
                </motion.button>

                <div className='mt-4 text-center'>
                    <h2 className='text-white'>Don't have an account? <Link className='text-yellow-500 font-bold' to={'/signup'}>Signup</Link></h2>
                </div>
            </motion.div>
        </div>
    );
}

export default Login;