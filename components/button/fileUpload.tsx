// 'use client'
// import React, { useState } from 'react'
// import AWS from 'aws-sdk'
// import Image from 'next/image'

// function FileUpload2() {
//   const [myfile, setMyfile] = useState<File | null>(null)
//   const [s3Object, setS3Object] = useState<any>(null)

//   console.log(process.env.AWS_REGION)

//   // 밑에 값들 이렇게 불러오지 말고 그대로 가져다 복붙 !
//   AWS.config.update(
//     {
//       region: process.env.AWS_REGION as string,
//       accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
//       secretAccessKey:process.env.AWS_SECRET_ACCESS_KEY as string
//     }
//   )

//   const uploadImage = async (e:React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     if (!myfile) return
//     console.log(myfile.name, myfile.type, myfile.size)

//     // S3 업로드
//     const params = {
//       Bucket : "wooyano",
//       Key:,
//       Body:,
//       ACL:,
//     }
//     // 그 다음 데이터 패치
//     const data = await new AWS.S3.ManagedUpload({
//       params : params
//     }).promise()
//     console.log(data)
//     setS3Object(data)
//     // then data fetch ( image url or file url and file name)
//     }

//     const handleS3FileDelete = async () => {
//       console.log(s3Object.Key)
//       const params = {
//           Bucket: "spharos-s3",
//           Key: s3Object.Key as string,
//       }
//       const res = await new AWS.S3().deleteObject(params, function(err, data) {
//           if (err) console.log(err, err.stack);  // error
//           else    {
//               console.log(data);
//               setS3Object(null)
//           }                  // deleted
//       })

//   }


//   return (
//     <div>
//       <form onSubmit={uploadImage} >
//             <input 
//             type="file" 
//             id="file"
//             onChange={
//                 (e) => {
//                 const files = e.target.files
//                 if (!files) return
//                 setMyfile(files[0])
//                 }
//             } 
//             />
//             <button type='submit'>
//             upload
//             </button>
//         </form>
//         {
//             s3Object &&  <Image src={s3Object.Location} width={300} height={300} alt={''} />
//         }
       
//         <button type="button" onClick={handleS3FileDelete}>
//             delete
//         </button>

//     </div>
//   )
// }

// export default FileUpload2