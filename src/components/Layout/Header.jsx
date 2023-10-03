import React from 'react'

export default function Header() {
  return (
    <header className='relative w-full flex justify-center py-5 uppercase border-b'>
        <ul className='flex space-x-10'>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Blogs</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
    </header>
  )
}
