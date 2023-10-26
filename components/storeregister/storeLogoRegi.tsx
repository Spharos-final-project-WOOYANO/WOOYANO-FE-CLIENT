'use client'
import { useRouter } from 'next/navigation';
import React from 'react'

function StoreLogoRegi() {

  const router=useRouter();

  return (
    <div>

      <p className='text-3xl font-bold mt-10'>
        로고 등록
      </p>
      <p className='text-xs mt-3'>
        로고를 등록해주세요
      </p>

      <p className='flex flex-col mt-10'>로고
        <input className='border-2 border-black w-[300px] mx-auto h-[35px] pl-3 ' type = "text" placeholder='사진을 첨부해주세요.' />
      </p>

      <div className = 'min-w-[300px]'>
      <button className='border-none bg-gray-300 text-black w-full leading-[50px] rounded-lg'>
        사진 첨부
      </button>
      </div>

      <div className='flex gap-5 min-w-[300px] justify-between mt-[100px]'>
        <button className='border-none bg-gray-300 text-black w-full leading-[50px] rounded-lg' onClick={()=>router.push("/home")}>
          이전
        </button>

        <button className='border-none bg-gray-300 text-black w-full leading-[50px] rounded-lg' onClick={()=>router.push("/home")}>
          다음
        </button>
      </div>

    </div>
  )
}

export default StoreLogoRegi