import React from 'react';
import Link from 'next/link'
import { fetchings } from '@/app/data';
import { deleteUser } from '@/app/libs/actions';
async function Users() {
    const datas = await fetchings();
    return (
        <div className='w-3/4'>
            <div className='bg-zinc-900 mt-24 p-4 m-4 '>
                <Link href={'/dashboard/users/add'}><button className='bg-zinc-700 p-2 rounded hover:bg-zinc-600 transition-all duration-300'>Add new</button></Link>
                <div className='w-full mt-4'>
                    <table className='w-full'>
                        <thead className='w-full'>
                            <tr className='w-full'>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Created At</td>
                                <td>Role</td>
                                <td>Status</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {datas.map((data, i) => (
                                <tr key={i}>
                                    <td>
                                        <div className='flex items-center gap-4'>
                                            <img src={`${data.Image}`} className='w-32' />
                                            {data.Name}
                                        </div>

                                    </td>
                                    <td>
                                        {data.Email}
                                    </td>
                                    <td>
                                        {data.createdAt?.toString().slice(4, 16)}
                                    </td>
                                    <td>
                                        {data.Role ? "Admin" : "User"}
                                    </td>
                                    <td>
                                        {data.Status ? "Active" : "Inactive"}
                                    </td>
                                    <td>
                                        <div>
                                            <Link href={`/dashboard/users/${data.id}`}>
                                                <button className='bg-blue-400 px-2'>view</button>
                                            </Link>
                                            <form action={deleteUser}>
                                                <input type="hidden" name='id' value={data.id} />
                                                <button className='bg-red-500 rounded px-2'>delete</button>
                                            </form>
                                        </div>
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default Users