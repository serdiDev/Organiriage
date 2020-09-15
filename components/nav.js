import React from 'react'
import Link from 'next/link'

const links = [
    {
        name: 'Mariages',
        href:'/',        
    },
    {
        name: 'Lieux de reception',
        href: '/ceremony',        
    },
    {
        name: 'A propos',
        href: '/aboutus',        
    },
    {
        name: 'Contact',
        href: '/contactus',        
    }
]

export default function nav({activeLink}) {
    return (
        <nav className="bg-gray-900 p-2 mt-0 w-full">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex text-white font-extrabold">
                    <Link href="/">
                        <a className="flex text-white text-base no-underline hover:text-white hover:no-underline"> 
                        👰 <span className="hidden w-0 md:w-auto md:block pl-1 text-base">Organiriage</span>
                        </a>
                    </Link>
                </div>
                <div className="flex pl-4 text-sm">
                    <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
                        { links.map( (link, index) => 
                            <li className="m-2" key={index}>
                                <Link href={link.href} >
                                    <a className={
                                            link.href === activeLink
                                            ? 'inline-block py-2 px-2 text-white no-underline font-semibold text-base'
                                            : 'inline-block  text-white text-gray-600 no-underline font-semibold text-base hover:text-gray-200 py-2 px-2'
                                        } 
                                    > { link.name } </a>
                                </Link>
                            </li>
                        )}                        
                    </ul>
                </div>
            </div>
        </nav>
    )
}
