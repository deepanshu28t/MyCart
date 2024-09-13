import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import myContext from '../../../context/data/myContext';

function UpdateProduct() {
    const context = useContext(myContext);
    const { products, setProducts, updateProduct } = context;

    return (
        <motion.div 
            className='flex justify-center items-center h-screen bg-gradient-to-r from-gray-900 to-black'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <motion.div 
                className='bg-gray-800 px-10 py-10 rounded-3xl shadow-xl'
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
                        Update Product
                    </motion.h1>
                </div>
                <div>
                    <motion.input 
                        type="text"
                        value={products.title}
                        onChange={(e) => setProducts({ ...products, title: e.target.value })}
                        name='title'
                        className='bg-gray-700 mb-4 px-4 py-3 w-full lg:w-[20em] rounded-xl text-white placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-yellow-500'
                        placeholder='Product title'
                        whileFocus={{ scale: 1.05 }}
                    />
                </div>
                <div>
                    <motion.input 
                        type="text"
                        value={products.price}
                        onChange={(e) => setProducts({ ...products, price: e.target.value })}
                        name='price'
                        className='bg-gray-700 mb-4 px-4 py-3 w-full lg:w-[20em] rounded-xl text-white placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-yellow-500'
                        placeholder='Product price'
                        whileFocus={{ scale: 1.05 }}
                    />
                </div>
                <div>
                    <motion.input 
                        type="text"
                        value={products.imageUrl}
                        onChange={(e) => setProducts({ ...products, imageUrl: e.target.value })}
                        name='imageurl'
                        className='bg-gray-700 mb-4 px-4 py-3 w-full lg:w-[20em] rounded-xl text-white placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-yellow-500'
                        placeholder='Product image URL'
                        whileFocus={{ scale: 1.05 }}
                    />
                </div>
                <div>
                    <motion.input 
                        type="text"
                        value={products.category}
                        onChange={(e) => setProducts({ ...products, category: e.target.value })}
                        name='category'
                        className='bg-gray-700 mb-4 px-4 py-3 w-full lg:w-[20em] rounded-xl text-white placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-yellow-500'
                        placeholder='Product category'
                        whileFocus={{ scale: 1.05 }}
                    />
                </div>
                <div>
                    <motion.textarea 
                        cols="30" 
                        rows="10" 
                        name='description'
                        value={products.description}
                        onChange={(e) => setProducts({ ...products, description: e.target.value })}
                        className='bg-gray-700 mb-4 px-4 py-3 w-full lg:w-[20em] rounded-xl text-white placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-yellow-500'
                        placeholder='Product description'
                        whileFocus={{ scale: 1.05 }}
                    />
                </div>
                <div className='flex justify-center mb-3'>
                    <motion.button
                        onClick={updateProduct}
                        className='bg-yellow-500 w-full text-black font-bold px-4 py-3 rounded-xl hover:bg-yellow-600 transition duration-300 ease-in-out'
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Update Product
                    </motion.button>
                </div>
            </motion.div>
        </motion.div>
    );
}3

export default UpdateProduct;
