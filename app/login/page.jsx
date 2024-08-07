import React from 'react'

function Login() {
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className='flex p-12 rounded-xl flex-col items-center gap-8 bg-zinc-900'>
                <h1 className='text-5xl font-bold font-serif'>LOGIN</h1>
                <input
                    className='bg-transparent text-xl outline-none p-4 px-9 bg-zinc-700 rounded'
                    type="text" placeholder='USERNAME' />
                <input
                    className='bg-transparent text-xl outline-none p-4 px-9 bg-zinc-700 rounded'
                    type="text" placeholder='PASSWORD' />
                <button className='bg-zinc-800 w-full rounded text-xl p-3 hover:bg-zinc-900 transition-all duration-200'>LOGIN</button>
            </div>
        </div>
    )
}

export default Login