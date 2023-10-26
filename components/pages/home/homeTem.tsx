'use client'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const menuList = [
  {
    id:1,
    contents:"회원정보 관리",
    imageurl:"/images/icon/memberInfoManage.png",
    url:"memberinfo"
  },
  {
    id:2,
    contents:"업체정보 관리",
    imageurl:"/images/icon/storeInfoManage.png",
    url:"storeinfo"
  },
  {
    id:3,
    contents:"리뷰 관리",
    imageurl:"/images/icon/reviewManage.png",
    url:"reviewlist"
  },
  {
    id:4,
    contents:"작업자 관리",
    imageurl:"/images/icon/workerManage.png",
    url:"workerlist"
  },
  {
    id:5,
    contents:"예약 관리",
    imageurl:"/images/icon/reservationManage.png",
    url:"reservationlist"
  },
  {
    id:6,
    contents:"정산 관리",
    imageurl:"/images/icon/settleManage.png",
    url:"settlement"
  },
  {
    id:7,
    contents:"서비스 관리",
    imageurl:"/images/icon/serviceManage.png",
    url:"servicemanage"
  }
]

interface menulistType {
  id:number,
  contents:string,
  imageurl:string,
  url:string
}

function HomeTem() {
  const router = useRouter();

  const handleMenuItemClick = (path: string) => {
    router.push(path);
  };

  return (
    <div>
      <p className='text-center text-3xl font-bold'>
        HOME
      </p>
      <div className='flex justify-center mx-auto'>
        <div className = 'flex-col'>
          {
            menuList.map((item:menulistType)=>(
              <div key={item.id} className='min-w-[280px] ml-9 flex justify-start gap-10 my-[100px] text-xl'
              onClick={() => handleMenuItemClick(`/${item.url.toLowerCase()}`)}>
                <Image
                src={item.imageurl}
                alt={item.contents}
                width={32}
                height={32}
                />
                <p className='pt-1'>
                  {item.contents}
                </p>
                
              </div>
              
              
            ))
          }

      </div>  
    </div>
    </div>
  )
}

export default HomeTem