// 'use client'
// import { useRouter } from 'next/navigation';
// import React, { useEffect, useState } from 'react'
// import { RegisterType } from '../type/register/registerType';
// import StoreInfoMap from './storeInfoMap';

// function StoreProcess() {

//   const router=useRouter();

//   const [registerData, setRegisterData] = useState<RegisterType>({
//     serviceLogo : "",
//     serviceDesc : "",
//     serviceImg : "",
//     serviceName : "",
//     serviceAddress : "",
//     serviceArea : "",
//     serviceDay : "",
//     serviceOpenTime : "",
//     serviceCloseTime : "",
//     closeCycle : "",
//     closeDay : ""
//   })

//   // 정보 등록 과정에서 처음 processId를 초기값 1로 설정해줌
//   const [processId, setProcessId] = useState<number>(1);

//   const processComponent : any = [ 
//     {1 : <StoreInfoMap />, btnTxt : "업체 정보 등록"},
//   ]

//   useEffect(() => {
    
//   },[registerData])

//   return (
//     <div>
//       { processId > 1? <ProcessNumberData={ProcessNumberData}/> : null }
//     </div>
//   )
// }

// export default StoreProcess