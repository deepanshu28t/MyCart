import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import myContext from '../../../context/data/myContext';

function AddProduct() {
    const context = useContext(myContext);
    const { products, setProducts, addProduct } = context;

    return (
        <div className='flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-900 to-gray-700'>
            <motion.div
                className='bg-white shadow-2xl p-10 rounded-2xl w-[90%] max-w-md mx-auto'
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                whileHover={{ scale: 1.02 }}
            >
                <motion.h1
                    className='text-center text-gray-800 text-2xl mb-6 font-bold tracking-wide'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    Add New Product
                </motion.h1>
                <div className='space-y-4'>
                    {/** Product Title Input */}
                    <motion.input
                        type="text"
                        value={products.title}
                        onChange={(e) => setProducts({ ...products, title: e.target.value })}
                        name='title'
                        className='block bg-gray-200 px-4 py-3 w-full rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition'
                        placeholder='Product Title'
                        whileFocus={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 200 }}
                    />
                    {/** Product Price Input */}
                    <motion.input
                        type="text"
                        value={products.price}
                        onChange={(e) => setProducts({ ...products, price: e.target.value })}
                        name='price'
                        className='block bg-gray-200 px-4 py-3 w-full rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition'
                        placeholder='Product Price'
                        whileFocus={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 200 }}
                    />
                    {/** Product Image URL Input */}
                    <motion.input
                        type="text"
                        value={products.imageUrl}
                        onChange={(e) => setProducts({ ...products, imageUrl: e.target.value })}
                        name='imageurl'
                        className='block bg-gray-200 px-4 py-3 w-full rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition'
                        placeholder='Product Image URL'
                        whileFocus={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 200 }}
                    />
                    {/** Product Category Input */}
                    <motion.input
                        type="text"
                        value={products.category}
                        onChange={(e) => setProducts({ ...products, category: e.target.value })}
                        name='category'
                        className='block bg-gray-200 px-4 py-3 w-full rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition'
                        placeholder='Product Category'
                        whileFocus={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 200 }}
                    />
                    {/** Product Description Textarea */}
                    <motion.textarea
                        cols="30" rows="5"
                        value={products.description}
                        onChange={(e) => setProducts({ ...products, description: e.target.value })}
                        name='description'
                        className='block bg-gray-200 px-4 py-3 w-full rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition'
                        placeholder='Product Description'
                        whileFocus={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 200 }}
                    />
                </div>
                {/** Add Product Button */}
                <motion.button
                    onClick={addProduct}
                    className='mt-6 bg-yellow-500 w-full text-black font-semibold py-3 rounded-lg hover:bg-yellow-600 transition'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    Add Product
                </motion.button>
            </motion.div>
        </div>
    );
}

export default AddProduct;