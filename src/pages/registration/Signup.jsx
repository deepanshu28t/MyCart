import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import myContext from '../../context/data/myContext';
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, fireDB } from '../../fireabase/FirebaseConfig';
import { Timestamp, addDoc, collection } from 'firebase/firestore';
import Loader from '../../components/loader/Loader';
import { motion } from 'framer-motion';

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const context = useContext(myContext);
    const { loading, setLoading } = context;

    const signup = async () => {
        setLoading(true);
        if (name === "" || email === "" || password === "") {
            setLoading(false);
            return toast.error("All fields are required");
        }

        try {
            const users = await createUserWithEmailAndPassword(auth, email, password);

            const user = {
                name: name,
                uid: users.user.uid,
                email: users.user.email,
                time: Timestamp.now()
            };

            const userRef = collection(fireDB, "users");
            await addDoc(userRef, user);
            toast.success("Signup Successfully");
            setName("");
            setEmail("");
            setPassword("");
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    return (
        <motion.div 
            className='flex justify-center items-center h-screen bg-gradient-to-r from-gray-900 to-black'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            {loading && <Loader />}
            <motion.div 
                className='bg-gray-800 px-10 py-10 rounded-3xl shadow-lg'
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 100 }}
            >
                <div>
                    <motion.h1 
                        className='text-center text-white text-3xl mb-6 font-extrabold'
                        initial={{ y: -50 }}
                        animate={{ y: 0 }}
                        transition={{ type: 'spring', stiffness: 100 }}
                    >
                        Signup
                    </motion.h1>
                </div>
                <div>
                    <motion.input 
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        name='name'
                        className='bg-gray-700 mb-4 px-4 py-3 w-full lg:w-[20em] rounded-xl text-white placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-red-500'
                        placeholder='Name'
                        whileFocus={{ scale: 1.05 }}
                    />
                </div>
                <div>
                    <motion.input 
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        name='email'
                        className='bg-gray-700 mb-4 px-4 py-3 w-full lg:w-[20em] rounded-xl text-white placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-red-500'
                        placeholder='Email'
                        whileFocus={{ scale: 1.05 }}
                    />
                </div>
                <div>
                    <motion.input 
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='bg-gray-700 mb-4 px-4 py-3 w-full lg:w-[20em] rounded-xl text-white placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-red-500'
                        placeholder='Password'
                        whileFocus={{ scale: 1.05 }}
                    />
                </div>
                <div className='flex justify-center mb-3'>
                    <motion.button
                        onClick={signup}
                        className='bg-red-600 w-full text-white font-bold px-4 py-3 rounded-xl hover:bg-red-700 transition duration-300 ease-in-out'
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Signup
                    </motion.button>
                </div>
                <div>
                    <h2 className='text-gray-300 text-center'>
                        Have an account? 
                        <Link className='text-red-500 font-bold ml-1' to={'/login'}>Login</Link>
                    </h2>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default Signup;
