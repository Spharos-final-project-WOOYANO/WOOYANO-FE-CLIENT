import React from 'react'
import { useSession } from 'next-auth/react'
import { usePathname } from 'next/navigation';

const menuList = [
  {
    id:1,
    value:'회원정보 관리'
  },
  {
    id:2,
    value:'업체정보 관리'
  },
  {
    id:3,
    value:'리뷰 관리'
  },
  {
    id:4,
    value:'작업자 관리'
  },
  {
    id:5,
    value:'예약 관리'
  },
  {
    id:6,
    value:'정산 관리'
  },
  {
    id:7,
    value:'서비스 관리'
  },
]

interface menulistType {
  id:number,
  value:string
}

function SideBar(props : {isOpened: Boolean, setIsOpened: React.Dispatch<React.SetStateAction<Boolean>>}) {

  const {isOpened, setIsOpened} = props;
    const session = useSession();
    const pathName = usePathname();

  return (
    <div>

    </div>
  )
}

export default SideBar