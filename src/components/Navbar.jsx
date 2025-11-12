import React from 'react'

function Navbar() {
  return (
    <div className='navbar'>
        <h4>KeshaMart</h4>
        <ul className='navLinks'>
            <li>Home</li>
            <li>Shop</li>
            <li>Products</li>
            <li>Pages</li>
            <li>Blog</li>
            <li>Elements</li>
        </ul>
        <div className='navIcons'>
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M9.539 15.23q-2.398 0-4.065-1.666Q3.808 11.899 3.808 9.5t1.666-4.065T9.539 3.77t4.064 1.666T15.269 9.5q0 1.042-.369 2.017t-.97 1.668l5.909 5.907q.14.14.15.345q.009.203-.15.363q-.16.16-.354.16t-.354-.16l-5.908-5.908q-.75.639-1.725.989t-1.96.35m0-1q1.99 0 3.361-1.37q1.37-1.37 1.37-3.361T12.9 6.14T9.54 4.77q-1.991 0-3.361 1.37T4.808 9.5t1.37 3.36t3.36 1.37"></path></svg>
            </button>
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M4 22a8 8 0 1 1 16 0h-2a6 6 0 0 0-12 0zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6m0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4"></path></svg>
            </button>
            <div className='iconWithSpan'>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 48 48"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M15 8C8.925 8 4 12.925 4 19c0 11 13 21 20 23.326C31 40 44 30 44 19c0-6.075-4.925-11-11-11c-3.72 0-7.01 1.847-9 4.674A10.99 10.99 0 0 0 15 8"></path></svg>
                </button>
                <span className='spanHover'>3</span>
            </div>
            <div className='iconWithSpan'>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth={1.5}><path strokeLinejoin="round" d="M4 9h16l-.835 9.181A2 2 0 0 1 17.174 20H6.826a2 2 0 0 1-1.991-1.819z"></path><path strokeLinecap="round" d="M8 11V8a4 4 0 1 1 8 0v3"></path></g></svg>
                </button>
                <span className='spanHover'>1</span>
            </div>
        </div>
    </div>
  )
}

export default Navbar