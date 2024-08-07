import React from 'react'

function Transactions() {
    return (
        <div className='bg-zinc-900 mt-24 p-4 m-4'>
            <div className=' rounded flex justify-between items-center'>
                <h1 className='font-bold text-lg uppercase'>LATEST TRANSACTIONS</h1>
            </div>
            <div className=' w-full'>
                <table className='w-full'>
                    <thead className='w-full'>
                        <tr className='w-full'>
                            <th className='text-left'>Name</th>
                            <th className='text-left'>Status</th>
                            <th className='text-left'>Date</th>
                            <th className='text-left'>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className='flex  items-center gap-2 my-4'>
                                    <img src="https://i.pinimg.com/564x/16/78/6e/16786e17bad635cb77c71131ec52ab48.jpg" className='w-6 rounded-full' />
                                    John Doe
                                </div>
                            </td>
                            <td>ongoing</td>
                            <td>2/3/2024</td>
                            <td>3000$</td>
                        </tr>
                        <tr>
                            <td>
                                <div className='flex  items-center gap-2 my-4'>
                                    <img src="https://i.pinimg.com/564x/16/78/6e/16786e17bad635cb77c71131ec52ab48.jpg" className='w-6 rounded-full' />
                                    John Doe
                                </div>
                            </td>
                            <td>ongoing</td>
                            <td>2/3/2024</td>
                            <td>3000$</td>
                        </tr>
                        <tr>
                            <td>
                                <div className='flex  items-center gap-2 my-4'>
                                    <img src="https://i.pinimg.com/564x/16/78/6e/16786e17bad635cb77c71131ec52ab48.jpg" className='w-6 rounded-full' />
                                    John Doe
                                </div>
                            </td>
                            <td>ongoing</td>
                            <td>2/3/2024</td>
                            <td>3000$</td>
                        </tr>
                        <tr>
                            <td>
                                <div className='flex  items-center gap-2 my-4'>
                                    <img src="https://i.pinimg.com/564x/16/78/6e/16786e17bad635cb77c71131ec52ab48.jpg" className='w-6 rounded-full' />
                                    John Doe
                                </div>
                            </td>
                            <td>ongoing</td>
                            <td>2/3/2024</td>
                            <td>3000$</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Transactions