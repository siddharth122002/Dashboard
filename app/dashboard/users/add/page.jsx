
import { addUser } from '@/app/libs/actions'
import React from 'react'

function AddUser() {
    return (
        <div className='w-3/4'>
            <div className='bg-zinc-900 mt-24 p-4 m-4 '>

                <form action={addUser}
                    className='text-black'>
                    <input type="text"
                        name='Name'
                        className='bg-zinc-800 w-2/4 p-3 text-white outline-none mb-2 '
                        placeholder='Username' />
                    <input
                        name='Image'
                        className='bg-zinc-800 w-2/4 p-3 text-white outline-none mb-2'
                        type="text" placeholder='Image' />
                    <input
                        name='Email'
                        className='bg-zinc-800 w-2/4 p-3 text-white outline-none'
                        type="email" placeholder='Email' />
                    <input
                        name='Password'
                        className='bg-zinc-800 w-2/4 p-3 text-white outline-none mb-2'
                        type="password" placeholder='Password' />

                    <select name="Role" className='bg-zinc-800 w-2/4 p-3 text-white outline-none'>
                        <option value="isAdmin">isAdmin</option>
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                    <select name="Status" className='bg-zinc-800 w-2/4 p-3 text-white outline-none mb-2'>
                        <option value="isActive">isActive</option>
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                    <textarea
                        name='Address'
                        className='bg-zinc-800 w-full p-3 text-white outline-none ' placeholder='Address'></textarea>
                    <button
                        type='submit'
                        className='w-full text-white bg-zinc-700 rounded p-2 transition-all duration-300 hover:bg-zinc-500'>Submit</button>
                </form>
            </div>

        </div>
    )
}

export default AddUser