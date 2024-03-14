import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { Input } from '@/components/ui/input'

export default function Home() {
  return (
    <main>
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex lg:flex-row gap-14 items-center my-[4rem]">
          <div className="flex flex-col justify-between gap-20">
            <div className="flex flex-col space-y-7">
              <span className="bg-[#e1edff] text-[#0000ff] py-2 text-center font-semibold rounded-md w-[120px]">
                Sale 70%
              </span>
              <h1 className=" text-[3.5rem] leading-[55px] tracking-[.03em] font-bold text-[#212121]">
                An Industrial Take on Streetwear
              </h1>
              <p className="text-[#666] text-base font-normal lg:w-[70%]">
                Anyone can beat you but no one can beat your outfit as long as
                you wear Dine outfits.
              </p>
              <a
                href=""
                className="bg-[#212121] py-4 px-5 text-white flex gap-2 w-60 justify-center"
              >
                <ShoppingCart /> Start Shopping
              </a>
            </div>
            <div className="flex flex-row justify-between">
              <Image
                src={"/images/Featured1.webp"}
                width={100}
                height={35}
                alt="logo"
              />
              <Image
                src={"/images/Featured2.webp"}
                width={100}
                height={35}
                alt="logo"
              />
              <Image
                src={"/images/Featured3.webp"}
                width={100}
                height={35}
                alt="logo"
              />
              <Image
                src={"/images/Featured4.webp"}
                width={100}
                height={35}
                alt="logo"
              />
            </div>
          </div>
          <div className="flex justify-center h-full">
            <div className=" w-[600px] h-[600px] bg-[#ffece3] rounded-full relative">
              <Image
                src={"/images/header.webp"}
                width={650}
                height={650}
                className="absolute -top-6 left-0 right-0 block mx-auto aspect-square"
                alt="girl"
              />
            </div>
          </div>
        </div>
        {/* sec promotion */}
        <div className="flex flex-col space-y-6">
          <span className="text-[12px] tracking-widest text-[#0062f5] font-bold text-center">
            PROMOTIONS
          </span>
          <h2 className="text-[#212121] text-center font-bold text-[32px] mt-0">
            Our Promotions Events
          </h2>
          <div className="flex justify-between gap-6">
            <div className="flex flex-grow-[2] flex-shrink flex-col gap-5">
              <div className="bg-[#d6d6d8] flex justify-around px-6 items-center">
                <div className="">
                  <h3 className="text-3xl">GET UP TO 60%</h3>
                  <p className="text-lg">For the summer season</p>
                </div>
                <Image
                  src={"/images/event1.webp"}
                  width={282}
                  height={218}
                  alt=""
                />
              </div>
              <div className="bg-[#212121] py-10 text-center">
                <h3 className="text-4xl text-white font-bold mb-4">
                  GET 30% Off
                </h3>
                <p className="text-base text-white">USE PROMO CODE</p>
                <button className="bg-[#474747] py-2 px-10 rounded-lg text-white font-semibold tracking-widest mt-2">
                  DINEWEEKENDSALE
                </button>
              </div>
            </div>
            <div className="flex flex-grow flex-shrink justify-between">
              <div className="bg-[#efe1c7] pt-4 px-4">
                <p className="text-base">Flex Sweatshirt</p>
                <p>
                  <del>$100.00</del> <span className="font-bold">$75.00</span>
                </p>
                <Image
                  src={"/images/event2.webp"}
                  width={280}
                  height={380}
                  alt=""
                />
              </div>
              <div className="bg-[#d7d7d9] pt-4 px-4">
                <p className="text-base">Flex Sweatshirt</p>
                <p>
                  <del>$100.00</del> <span className="font-bold">$75.00</span>
                </p>
                <Image
                  src={"/images/event3.webp"}
                  width={280}
                  height={362}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* sec unique */}
      <div className="bg-[image:linear-gradient(180deg,white_0%,white_50%,#fbfcff_50%,#fbfcff_100%)] min-h-48">
        <div className="w-full max-w-7xl mx-auto">
          <h2 className="text-[#212121] text-[2.75rem] ms-auto lg:w-[45%] leading-[55px] font-bold">
            Unique and Authentic Vintage Designer Jewellery
          </h2>
        </div>
      </div>

      {/* sec all products */}
      <div className="bg-[#fbfcff] py-16">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-2 items-center">
            <div className="grid grid-cols-2 gap-y-12 relative">
              <h2 className="text-[6.875rem] absolute opacity-5 leading-[110px] font-bold -top-3">
                Different from others
              </h2>
              <div className="lg:w-[70%]">
                <h2 className="text-[1.125rem] font-semibold mb-[1rem]">
                  Using Good Quality Materials
                </h2>
                <p className="text-lg font-light">
                  Lorem ipsum dolor sit amt, consectetur adipiscing elit.
                </p>
              </div>
              <div className="lg:w-[70%]">
                <h2 className="text-[1.125rem] font-semibold mb-[1rem]">
                  Using Good Quality Materials
                </h2>
                <p className="text-lg font-light">
                  Lorem ipsum dolor sit amt, consectetur adipiscing elit.
                </p>
              </div>

              <div className="lg:w-[70%]">
                <h2 className="text-[1.125rem] font-semibold mb-[1rem]">
                  Using Good Quality Materials
                </h2>
                <p className="text-lg font-light">
                  Lorem ipsum dolor sit amt, consectetur adipiscing elit.
                </p>
              </div>

              <div className="lg:w-[70%]">
                <h2 className="text-[1.125rem] font-semibold mb-[1rem]">
                  Using Good Quality Materials
                </h2>
                <p className="text-lg font-light">
                  Lorem ipsum dolor sit amt, consectetur adipiscing elit.
                </p>
              </div>
            </div>

            <div className="flex gap-10 items-center">
              <Image
                src={"/images/feature.webp"}
                width={300}
                height={350}
                alt=""
              />
              <div className="flex flex-col gap-y-6">
                <p className="text-[1rem] leading-[26px] font-light">
                  This piece is ethically crafted in our small family-owned
                  workshop in Peru with unmatched attention to detail and care.
                  The Natural color is the actual natural color of the fiber,
                  undyed and 100% traceable.
                </p>
                <button className="bg-[#212121] py-4 font-semibold text-white">
                  See All Product
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* sec newsletter */}
      <div className="min-h-64 flex items-center">
         <div className="w-[45%] mx-auto flex flex-col gap-y-5 text-center relative z-10">
          <h1 className="absolute -z-10 text-[7.5rem] font-bold text-[#f2f3f7]">Newsletter</h1>
             <h2 className="text-[2rem] font-bold text-[#212121]">Subscribe Our Newsletter</h2>
             <p className="text-base text-[#212121]">Get the latest information and promo offers directly</p>
             <div className="flex flex-row  gap-3 w-[90%] mx-auto">
              <Input className="rounded-none" type="text" placeholder="Input email address" />
              <button className="py-2 px-4 whitespace-nowrap bg-black text-white font-semibold">Get Started</button>
             </div>
         </div>
      </div>
    </main>
    
  );
}
