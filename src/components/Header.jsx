import React from 'react'

const Header = () => {
    return (
        <header className='container mx-auto  bg-white  px-24 py-3'>
            <div className="flex justify-between items-center">
                <div className='Logo flex gap-2 items-center'>
                    <img src="./heartbeat.png" alt="Logo HeartBeat" className='w-14 object-contain' />
                    <h1 className='font-medium text-black text-2xl'>Blog</h1>
                </div><nav>
                    <ul className="flex items-center list-none">
                        <li className="p-4 hover:bg-gray-600 text-black hover:opacity-50">
                            <a href="/" className="no-underline">Home</a>
                        </li>
                        <li className="p-4 hover:bg-gray-600 text-black hover:opacity-50">
                            <a href="/posts" className="no-underline">View All Posts</a>
                        </li>
                        <li className="p-4 hover:bg-gray-600 text-black hover:opacity-50">
                            <a href="/test" className="no-underline">Visit Test Page</a>
                        </li>
                    </ul>
                </nav>

            </div>
        </header>
    )
}

export default Header