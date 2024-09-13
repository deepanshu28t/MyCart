import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'
<img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="C:\Users\heman\Downloads\e-comm\CartCraft\src\user.jpeg" />

function Testimonial() {
    const context = useContext(myContext);
    const { mode } = context;
    return (
        <div>
            <section className=''>
                <div className=" container mx-auto px-5 py-10">
                    <h1 className=' text-center text-3xl font-bold text-black' style={{ color: mode === 'dark' ? 'white' : '' }}>Testimonial</h1>
                    <h2 className=' text-center text-2xl font-semibold mb-10' style={{ color: mode === 'dark' ? 'white' : '' }}>What our <span className=' text-pink-500'>customers</span> are saying</h2>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://cdn-icons-png.flaticon.com/128/9038/9038996.png"/>
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="leading-relaxed">
                               CartCraft website offers a seamless and user-friendly shopping experience. The intuitive navigation, well-organized product categories, and responsive design make it easy for users to explore and find desired items. The checkout process is straightforward, providing multiple payment options for convenience. 
                                </p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{ color: mode === 'dark' ? '#ff4162' : '' }} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Sourabh Singh</h2>
                               
                            </div>
                        </div>

                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://cdn-icons-png.flaticon.com/128/2763/2763444.png" />
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="leading-relaxed"> CartCraft excels in customer service. Quick response times to inquiries, a transparent return policy, and accessible customer support channels contribute to a positive experience. The website's search functionality is robust, allowing users to efficiently locate specific products. Integration with user accounts and personalized recommendations based on purchase history enhance the overall shopping journey. </p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Palak Bohra</h2>
                                
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://cdn-icons-png.flaticon.com/128/9038/9038996.png" />
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="leading-relaxed">CartCraft's aesthetics and visual appeal enhance the overall shopping experience. Product pages are informative with clear images, detailed descriptions, and customer reviews, aiding in informed decision-making. The implementation of secure payment gateways ensures a safe transaction environment. Fast and reliable shipping services contribute to customer satisfaction.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Anil Kumar</h2>
                              
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial