// Assuming your [slug].tsx file
import { products } from "@/utils/products";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const getProducts = (categories: string) => {
  return products.filter((product) => product.category === categories);
};

export default function Page({ params }: { params: { slug: string } }) {
  console.log('Params:', params);
  const result = getProducts(params.slug);
  console.log('Filtered Products:', result);

  return (
    <>
      {result.map((product) => (
        <Link href={`/products/${product.id}`} key={product.id}>
          <div className='flex flex-col space-y-2'>
            <Image className='w-full' src={product.image} width={250} height={270} alt='' />
            <h2 className='text-base font-bold'>{product.name}</h2>
            <p className='text-sm text-gray-500'>{product.tagline}</p>
            <p className='text-sm'>${product.price}</p>
          </div>
        </Link>
      ))}
    </>
  );
}
