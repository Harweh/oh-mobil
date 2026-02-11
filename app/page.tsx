'use client'

import { ArrowRight, Menu, Search, SearchIcon, ShoppingCartIcon, User, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Hero from '@/public/headphone.jpg'

const products = [
  {
    id: 1,
    name: "OH PowerBeat Pro Wireless Headset",
    price: "Dhs. 250.00",
    image: "/wireless.png",
  },
    {
    id: 2,
    name: "OH Smart Watch 602",
    price: "Dhs. 320.00",
    image: "/smw.jpg",
  },
    {
    id: 3,
    name: "OH Sonic Pods",
    price: "Dhs. 320.00",
    image: "/podss.jpg",
  },
    {
    id: 4,
    name: "OH TurboCube 45W Rettractable Wall Charger Adapter",
    price: "Dhs. 150.00",
    image: "/charger.png",
  },
    {
    id: 5,
    name: "OH TWS Earphone",
    price: "Dhs. 250.00",
    image: "/tws-earphone.jpg",
  },
];


export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);



  return (
    <div className="min-h-screen bg-white">

      <div className="bg-gray-100 text-black text-center py-2 text-sm">
        NEW ARRIVALS: LUXURY BY OH
      </div>

      <header className="border-b sticky top-0 bg-white z-50">
        <div className="container mx-auto px-4 py-4 lg:px-4">
          <div className="flex items-center justify-between h-10">

            <div className="flex items-center gap-4 md:gap-8">
              <button className="md:hidden text-black hover:text-gray-600 transition mr-6"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
                // onClick={toggleMenu}
                // type="button"
                >
                { mobileMenuOpen ? <X size={16} /> : < Menu size={16}  />}
              </button>

              <button className="md:hidden hover:text-gray-600 transition">
                <SearchIcon className="w-5 h-5 text-black"/>
              </button>

              <Link href="/" className="hidden text-xl font-extrabold md:block text-base font-bold text-black tracking-tight">
                OH MOBILITY
              </Link>

              <nav className="text-black hidden md:flex items-center gap-6">
                <Link href="/" className="text-black hover:text-gray-600 transition text-sm ">
                  Home
                </Link>

                <Link href="/catalog" className="text-black hover:text-gray-600 transition text-sm">
                  Catalog
                </Link>

                <Link href="/contact" className="text-sm text-black hover:text-gray-600 transition">
                  Contact
                </Link>
              </nav>
            </div>

            <Link href="/" className="text-black text-lg md:hidden text-base font-bold tracking-tight absolute left-1/2  -translate-x-1/2">
              OH MOBILITY
            </Link>

            <div className="flex items-center gap-8">
              <button className="hidden md:block hover:text-gray-600 transition">
                <SearchIcon className="w-5 h-5 text-black"/>
              </button>
              <button className="hidden md:block hover:text-gray-600 transition">
                  <User className="w-6 h-6 text-black" />
              </button>
              <button className="hidden md:block hover:text-gray-600 transition">
                  <ShoppingCartIcon className="ww-6 h-6 text-black" />
              </button>
            </div>


            <button className="md:hidden hover:text-gray-600 ml-100">
              <User className="w-5 h-5 text-black"/>
            </button>
            <button className="md:hidden hover:text-gray-600 transition">
                <ShoppingCartIcon className="w-5 h-5 text-black"/>
            </button>

              {/* <button className="lg:hidden">
                <menu className="w-6 h-6" />
              </button>

              <nav className="hidden lg:flex text-black items-center gap-8" > 
                <Link href="/" className="hover:text-gray-600 transition">
                  Home
                </Link>
                <Link href="/" className="hover:text-gray-600 transition">
                  Catalog
                </Link>
                <Link href="/" className="hover:text-gray-600 transition">
                  Contact
                </Link>
              </nav>

              <div className="flex items-center text-black gap-4">
                <button className="hover:text-gray-600 transition">
                  <Search className="ww-6 h-6" />
                </button>
                <button className="hover:text-gray-600 transition">
                  <User className="ww-6 h-6" />
                </button>
                <button className="hover:text-gray-600 transition">
                  <ShoppingCartIcon className="ww-6 h-6" />
                </button>
              </div> */}
          </div>
        </div>

        {/* <div className="md:hidden">
          <div className="fixed inset-0 z-[60] bg-black/50 md:hidden"
            onClick={closeMenu}
            >

              <div className="fixed top-0 left-0 h-200 w-64 bg-white z-50 shadow-xl md:hidden">
                <div className="p-4 border-b flex items-center justify-between ">
                  <span className="font-bold text-black">Menu</span>
                  <button
                    onClick={closeMenu}
                    type="button"
              
                    >
                    <X className="w-6 h-6 text-black" />
                  </button>

                  
                </div>
                <nav className="flex flex-col p-4">
                  <Link href="/" className="text-black py-3 px-5 hover:text-gray-500 transition border-b"
                
                    onClick={closeMenu}

                  >
                    Home
                  </Link>
                  <Link href="/" className="text-black py-3 px-5 hover:text-gray-500 transition border-b"
                
                    onClick={closeMenu}

                  >
                    Catalog
                  </Link>
                  <Link href="/" className="text-black py-3 px-5 hover:text-gray-500 transition border-b"
                
                    onClick={closeMenu}

                  >
                    Contact
                  </Link>
                </nav>
              </div>

          </div>
        </div> */}

          {mobileMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 w-75 h-74 bg-white shadow-lg">
              <div className="">
                <nav className="flex flex-col py-6 px-4 p-6 ">
                  <Link 
                    href="/" 
                    className="text-black pl-10 py-4 px-6 hover:text-gray-500 transition border-b"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link 
                    href="/" 
                    className="text-black pl-10 py-4 px-5 hover:text-gray-500 transition border-b"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Catalog
                  </Link>
                  <Link 
                    href="/" 
                    className="text-black pl-10 py-4 px-5 hover:text-gray-500 transition border-b"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </nav>
              </div>
            </div>
          )}

      </header>

      <section className="relative  mx-auto h-[400h] lg:h-[500]">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-translate z-10">
          <Image
            src={Hero}
            alt="Hero"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl text-gray-500 lg:text-5xl font-bold pt-65 mb-6">
            Browse our latest products
          </h1>
          <button className=" px-8 py-3 cursor-pointer border-1 border-white rounded-2xl hover:bg-gray-300 hover:text-black transition-all mb-8">
            Shop all
          </button>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10  ">
        <h2 className="text-3xl font-bold text-black mb-8 mt-6">Products</h2>

        <div className="grid grid-ccls-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="bg-gray-400 rounded-lg mb-4 overflow-hidden aspect-square relative" >
                <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-medium mb-2 text-sm lg:text-base text-black">
                {product.name}
              </h3>
              <p className="text-gray-600">{product.price}</p>
            </div>
          ))}
        </div>
        
      </section>

      <section className="bg-gray-50 relative">
        <div className="container mx-auto px-4 lg:px-6 py-12 md:py-16 lg:py-20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-6 md:gap-8 lg:gap-12">
            <div className="flex-1">
              <h2 className="text-gray-600 text-2xl lg:text-3xl font-bold mb-3">
                Join our product waiting list
              </h2>
              <p className="text-gray-600 mb-8 md:mb-8 text-sm">
                Get exclusive deals and early access too new products.
              </p>
            </div>
            
            <div className="flex-1  max-w-md md:mmax-w-lg">
              <form className="relative">
                <input 
                  type="email" 
                  placeholder="Email address"
                  className="w-full px-5 py-3 md:px-5 md:py-4 pr-14 md:pr-16 text-sm bg-white text-black border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"/>

                <button
                  type="submit"
                  className=" absolute right-2 md:right-3 top-1/2 -translate-y-1/2 p-2 text-black hover:bg-gray-100 rounded-md transition">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>


        </div>
      </section>

      <footer className="border-t mt-6">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-col-1 lg:grid-cols-2 text-center gap-16">
              <p className="text-sm text-gray-600">
                &copy; 2026 OH MOBILITY, Powered by Shopify
              </p>

              <Link href="/terms" className="text-sm text-gray-600 hover:text-black transition">
              Terms and Policies
              </Link>
            </div>
          </div>
      </footer>

    </div>
  );
}
