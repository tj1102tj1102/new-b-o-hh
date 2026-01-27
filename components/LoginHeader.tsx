'use client';

import Image from 'next/image';

export default function LoginHeader() {
  return (
    <>
      <div className="w-full min-h-[30px] gap-2 relative flex flex-col items-center justify-center bg-[#f5f5f5] px-4 sm:px-15 py-2">
        <span className='text-gray-500 text-xs'>Bank of America deposit products: </span>
        <Image src="https://i.postimg.cc/T2JWXFLc/Clip-path-group.png" width={300} height={16} className="" alt="logo" />
      </div>
      <div className="w-full min-h-[30px] relative flex items-center justify-between bg-transparent px-4 sm:px-15 py-4">
        <div className="flex items-center gap-3">
          <Image src="https://i.postimg.cc/136vp5VJ/Bof-A-rgb.png" width={230} height={28} className="" alt="logo" />
          <span>Log In</span>
        </div>
      </div>
      <div className="bg-[#b40520] w-full min-h-[5px]">
        <div className="container mx-auto px-4 sm:px-15 py-4">
          <h1 className="text-white">Log In to Online Banking</h1>
        </div>
      </div>
    </>
  );
}
