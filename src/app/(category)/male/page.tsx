import React from 'react'
import { products } from '@/utils/products'
import Link from 'next/link'
import Image from 'next/image'

const Maleproducts = () => {
 const maleProduct = products.filter((product)=> product.category === 'male');
 
  return (
    <div className='w-full max-w-7xl mx-auto mt-5'>
    <div className='grid grid-cols-4 gap-6'>
    {maleProduct.map((product)=> 
       <Link href={`/products/${product.id}`} key={product.id}>
          <div className='flex flex-col space-y-2'>
            <Image className='w-full' src={product.image} width={250} height={270} alt="" />
            <h2 className='text-base font-bold'>{product.name}</h2>
            <p className='text-sm text-gray-500'>{product.tagline}</p>
            <p className='text-sm'>${product.price}</p>
          </div>
        </Link>
        )}
    </div>
    </div>
  )
}

export default Maleproducts
