import React from 'react'
import Link from 'next/link'
import { fetchingsProduct } from '@/app/data'
import { deleteProduct } from '@/app/libs/actions';
async function Products() {
    const products = await fetchingsProduct();
    return (
        <div className='w-3/4'>
            <div className='bg-zinc-900 mt-24 p-4 m-4 '>
                <Link href={'/dashboard/products/add'}><button className='bg-zinc-700 p-2 rounded hover:bg-zinc-600 transition-all duration-300'>Add new</button></Link>
                <div className='w-full mt-4'>
                    <table className='w-full'>
                        <thead className='w-full'>
                            <tr className='w-full'>
                                <td>Title</td>
                                <td>Description</td>
                                <td>Price</td>
                                <td>Created At</td>
                                <td>Stock</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product, i) => (
                                <tr key={i}>
                                    <td>
                                        <div className='flex items-center gap-4'>
                                            <img src={product.Image} className='w-16' />
                                            {product.Title}
                                        </div>
                                    </td>
                                    <td>
                                        {product.Description}
                                    </td>
                                    <td>
                                        ${product.Price}
                                    </td>
                                    <td>
                                        {product.createdAt?.toString().slice(4, 16)}
                                    </td>
                                    <td>
                                        {product.Stock}
                                    </td>
                                    <td>
                                        <div>
                                            <Link href={`/dashboard/products/${product.id}`}>
                                                <button className='bg-blue-400 px-2'>view</button>

                                            </Link>
                                            <form action={deleteProduct}>
                                                <input type="hidden" name='id' value={product.id} />
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

export default Products