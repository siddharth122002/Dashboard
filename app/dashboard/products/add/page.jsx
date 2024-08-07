import { addProduct } from '@/app/libs/actions'
import React from 'react'

async function AddProduct() {
    return (
        <div className='w-3/4'>
            <div className='bg-zinc-900 mt-24 p-4 m-4 '>

                <form action={addProduct} className='text-black'>
                    <input
                        name='Title'
                        type="text"
                        className='bg-zinc-800 w-2/4 p-3 text-white outline-none mb-2 '
                        placeholder='Title' />
                    <input
                        name='Image'
                        type="text"
                        className='bg-zinc-800 w-2/4 p-3 text-white outline-none mb-2 '
                        placeholder='Image' />

                    <select
                        name="Category" className='bg-zinc-800 w-2/4 p-3 text-white outline-none mb-2'>
                        <option value="category">Category</option>
                        <option value="tech">tech</option>
                        <option value="grocery">grocery</option>
                        <option value="kitchen">kitchen</option>
                    </select>

                    <input
                        name='Price'
                        className='bg-zinc-800 w-2/4 p-3 text-white outline-none'
                        type="number" placeholder='Price' />

                    <input
                        name='Stock'
                        className='bg-zinc-800 w-2/4 p-3 text-white outline-none mb-2'
                        type="number" placeholder='Stock' />
                    <input
                        name='Color'
                        className='bg-zinc-800 w-2/4 p-3 text-white outline-none mb-2'
                        type="text" placeholder='Color' />
                    <input
                        name='Size'
                        className='bg-zinc-800 w-2/4 p-3 text-white outline-none mb-2'
                        type="number" placeholder='Size' />


                    <textarea
                        name='Description'
                        className='bg-zinc-800 w-full p-3 text-white outline-none ' placeholder='Description'></textarea>
                    <button
                        type='submit'
                        className='w-full text-white bg-zinc-700 rounded p-2 transition-all duration-300 hover:bg-zinc-500'>Submit</button>
                </form>
            </div>

        </div>
    )
}

export default AddProduct