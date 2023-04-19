import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';

import { Link, animateScroll as scroll } from "react-scroll";

import { MdOutlineLightMode } from "react-icons/md";
import { CiDark } from "react-icons/ci";

import { useContext } from 'react';
import { ThemeContext } from '../context';



const navigation = [
  { name: 'About', href: 'about', current: false },
  { name: 'Works', href: 'works', current: false },
  { name: 'Contact', href: 'contact', current: false },
]

function classNames(...classes) {

  return classes.filter(Boolean).join(' ')
}

export default function Navbar({changeTheme}) {
  const theme = useContext(ThemeContext);

  return (
    <Disclosure as="nav" className=" sticky top-0 z-50 ">
      {({ open }) => (
        <>
          <div className={`mx-auto max-w-7xl px-2 sm:px-6 lg:px-12 shadow-xl border-b-gray-500 border-b  ${theme== "light" ?  " bg-gray-50" : " bg-gray-800 "} `}>
            <div className="relative flex h-16 px-12 items-center justify-between ">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch  sm:justify-between">
                <div className="flex flex-shrink-0 items-center">
                <Link
                to='about'
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                delay={100}
                className={`font-bold text-lg cursor-pointer  ${theme == "light" ? ' text-gray-800' : 'text-gray-100'}`}>ISHARA</Link>
                
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1000}
                        delay={100}
                        className={classNames(
                          item.current ? 'underline text-gray-800' : 'text-gray-800 hover:underline   underline-offset-4 ',
                          theme == "light" ? ' text-gray-800' : 'text-gray-100',
                          'rounded-md px-3 py-2 text-md font-medium cursor-pointer'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>

              </div>
             

              <div class="flex items-center justify-center ml-6">
  
              <label for="toggleB" class="flex items-center cursor-pointer">
              
                <div class="relative">
              
                  <input type="checkbox" id="toggleB" class="sr-only" onChange={() => {
                    changeTheme()
                  }} />

                  <div class="block bg-gray-500 w-14 h-8 rounded-full"></div>
                  <div class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full flex justify-center  items-center transition">{theme == 'light' ? <MdOutlineLightMode /> : <CiDark /> }</div>
                </div>

             
              </label>

            </div>
        
             

            </div>
            
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">

              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-900 hover:bg-gray-900 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              
            </div>

          </Disclosure.Panel>

        </>
      )}
    </Disclosure>
  )
}
