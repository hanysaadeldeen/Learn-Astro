import React from 'react'

const Header = () => {
    return (
        <header className=' bg-gray-950   '>
            <div className="container mx-auto flex justify-between items-center">
                <div className='Logo'>
                    <h1 className='font-bold text-white text-2xl'>logo</h1>
                </div>
                <nav>
                    <ul className='flex items-center'>
                        <li className='p-4 hover:bg-gray-600 text-white hover:opacity-50 '>
                            <a href="/" className='text-decoration-none '>home</a>
                        </li>
                        <li className='p-4 hover:bg-gray-600 text-white hover:opacity-50 '>
                            <a href="/posts" className='list-none '>posts</a>
                        </li>
                        <li className='p-4 hover:bg-gray-600 text-white hover:opacity-50 '>
                            <a href="/test" className='list-none '>test</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header