import { fetchUser } from '@/app/data';
import { updateUser } from '@/app/libs/actions';
import React from 'react'

async function SingleUser({ params }) {
    const user = await fetchUser(params.id)
    return (
        <div className='w-3/4 flex'>
            <div className='w-[30%]'>
                <div className='bg-zinc-900 mt-24 p-4 ml-4 '>
                    <div>
                        <img src={user.Image} className='w-56 ' />
                        <h1>{user.Name}</h1>
                    </div>
                </div>
            </div>
            <div className='w-[70%]'>
                <div className='bg-zinc-900 mt-24 p-4 m-4 '>
                    <form action={updateUser}>
                        <input type="hidden" name='id' value={params.id} />
                        <input type="text"
                            name='Name'
                            className='bg-zinc-800 w-full p-3 text-white outline-none mb-2 '
                            placeholder={user.Name} />
                        <input
                            name='Email'
                            className='bg-zinc-800 w-full p-3 text-white outline-none mb-2'
                            type="email" placeholder={user.Email} />
                        <input
                            name='Password'
                            className='bg-zinc-800 w-full p-3 text-white outline-none mb-2'
                            type="password" placeholder='Password' />

                        <select name="Role" className='bg-zinc-800 w-full p-3 text-white outline-none mb-2'>
                            <option value={true} defaultValue={user.Role}>Yes</option>
                            <option value={false} defaultValue={!user.Role}>No</option>
                        </select>
                        <select name="Status" className='bg-zinc-800 w-full p-3 text-white outline-none mb-2'>
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                        </select>
                        <textarea
                            name='Address'
                            className='bg-zinc-800 w-full p-3 text-white outline-none ' placeholder={user.Address}></textarea>
                        <button className='w-full text-white bg-zinc-700 rounded p-2 transition-all duration-300 hover:bg-zinc-500'>Update</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SingleUser