import { fetchSingleProduct } from '@/app/data'
import { updateProduct } from '@/app/libs/actions';
import React from 'react'

async function SingleProduct({ params }) {
    const product = await fetchSingleProduct(params.id);
    return (
        <div className='w-3/4 flex'>
            <div className='w-[30%]'>
                <div className='bg-zinc-900 mt-24 p-4 ml-4 '>
                    <div>
                        <img src={product.Image} className='w-56 ' />
                        <h1>{product.Title}</h1>
                    </div>
                </div>
            </div>
            <div className='w-[70%]'>
                <div className='bg-zinc-900 mt-24 p-4 m-4 '>
                    <form action={updateProduct}>
                        <input type="hidden" name="id" value={params.id} />
                        <input
                            name='Title'
                            type="text"
                            className='bg-zinc-800 w-full p-3 text-white outline-none mb-2 '
                            placeholder={product.Title} />
                        <input
                            name='Price'
                            className='bg-zinc-800 w-full p-3 text-white outline-none mb-2'
                            type="number" placeholder={product.Price} />
                        <input
                            name='Stock'
                            className='bg-zinc-800 w-full p-3 text-white outline-none mb-2'
                            type="number" placeholder={product.Stock} />
                        <input
                            name='Color'
                            className='bg-zinc-800 w-full p-3 text-white outline-none mb-2'
                            type="text" placeholder={product.Color} />
                        <input
                            name='Size'
                            className='bg-zinc-800 w-full p-3 text-white outline-none mb-2'
                            type="number" placeholder={product.Size} />

                        <select name="Category" className='bg-zinc-800 w-full p-3 text-white outline-none mb-2'>
                            <option value="category">category</option>
                            <option value="kitchen">kitchen</option>
                            <option value="tech">tech</option>
                        </select>
                        <textarea
                            name='Description'
                            className='bg-zinc-800 w-full p-3 text-white outline-none ' placeholder={product.Description}></textarea>
                        <button className='w-full text-white bg-zinc-700 rounded p-2 transition-all duration-300 hover:bg-zinc-500'>Update</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct