"use client";
import React, { ChangeEvent, FC, useEffect, useState } from "react";
// import { DaumAddressType } from "@/types/DaumAddrssType";
import Swal from "sweetalert2";
// import PostCodeDaum from "@/components/widget/postCodeDaum";
import {
  Button,
  Grid,
  Divider,
  TextField,
  Box,
  DialogContentText,
  Input,
  Select,
} from "@mui/material";
import { H5, H6, Paragraph } from "components/typography"; // CUSTOM SESSIONS LAYOUT
import { ArrowDropDown } from "@mui/icons-material";

const SignUpForm = (props) => {
  const [isView, setIsView] = useState(false);
  const [addressInfo, setAddressInfo] = useState();
  const { signUpData, setSignUpData } = props;
  const [pwType, setPwType] = useState(true);

  //회원가입 정보 업데이트
  const handleOnChange = (e) => {
    const value = e.target.value;
    const id = e.target.id;
    //비밀번호 체크
    if (signUpData.password === signUpData.secondPassword) {
      setSignUpData({
        ...signUpData,
        passwordCheck: true,
      });
    } else {
      setSignUpData({
        ...signUpData,
        passwordCheck: false,
      });
    }

    if (id === "birthday") {
      console.log("birth:" + value, "type:" + typeof value);
      // 생년월일 필드인 경우 입력값에서 하이픈을 제거하여 "YYYYMMDD" 형식으로 변환
      const birthdayForm = value.replace(/-/g, "");
      setSignUpData({
        ...signUpData,
        birthday: birthdayForm,
      });
    } else {
      setSignUpData({
        ...signUpData,
        [id]: value,
      });
    }
    if (signUpData.nicknameCheck && id === "nickname") {
      // 닉네임 중복확인 후 변경했을 때
      setSignUpData({
        ...signUpData,
        nicknameCheck: false,
      });
    }
  };

  //모달창 상태
  const handleOpenModal = () => {
    setIsView(!isView);
  };

  const handlePwType = () => {
    setPwType(!pwType);
  };

  //닉네임 중복확인 및 확인여부 업데이트
  const handleNickNameCheck = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/users/nickname/check?nickname=${signUpData.nickname}`
      );
      if (res.ok) {
        const data = await res.json();
        console.log(data);
        if (data.result.checkResult === true) {
          setSignUpData({
            ...signUpData,
            nicknameCheck: false,
          });
          Swal.fire({
            text: "이미 사용중입니다.",
            toast: false,
            position: "center",
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: false,
            customClass: {
              container: "my-swal",
              popup: "my-swal-position",
            },
          });
        } else if (data.result.checkResult === false) {
          setSignUpData({
            ...signUpData,
            nicknameCheck: true,
          });
          Swal.fire({
            text: "사용가능한 닉네임입니다.",
            toast: false,
            position: "center",
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: false,
            customClass: {
              container: "my-swal",
              popup: "my-swal-position",
            },
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "실패",
            text: "요청에 실패했습니다.",
          });
        }
      }
    } catch (error) {
      console.error("오류 발생:", error);
    }
  };

  const bankList = [
    "국민은행",
    "신한은행",
    "우리은행",
    "하나은행",
    "기업은행",
    "외환은행",
    "수협은행",
    "한국씨티은행",
    "KEB하나은행",
    "케이뱅크",
    "경남은행",
    "광주은행",
    "대구은행",
    "부산은행",
    "전북은행",
    "제주은행",
    "카카오뱅크",
    "케이뱅크",
    "새마을금고",
    "우체국",
  ];
  const [selectedBank, setSelectedBank] = useState("");

  //주소 검색결과 두 값이 모두 있을 경우 지역주소와 시군구 코드 업데이트
  useEffect(() => {
    if (addressInfo?.address && addressInfo?.sigunguCode) {
      const localCodeset = parseInt(addressInfo.sigunguCode);
      setSignUpData((prevForm) => ({
        ...prevForm,
        localCode: localCodeset,
        localAddress: addressInfo.address,
      }));
    }
  }, [addressInfo]);

  return (
    <Box maxWidth={1000} p={2}>
      <H5
        fontSize={{
          sm: 30,
          xs: 25,
        }}
      >
        Sign up
      </H5>

      <Paragraph mt={1} mb={6} color="text.secondary">
        빈칸없이 전부 작성해주세요.
      </Paragraph>
      <Box>
        <Box mt={1.5}>
          <Paragraph>Name</Paragraph>
        </Box>{" "}
        <TextField
          fullWidth
          id="username"
          type="text"
          value={signUpData.username}
          onChange={handleOnChange}
          readOnly
        />
      </Box>
      <Box>
        <Box mt={1.5}>
          <Paragraph>Email</Paragraph>
        </Box>{" "}
        <TextField
          fullWidth
          id="email"
          type="text"
          value={signUpData.email}
          onChange={handleOnChange}
          readOnly
        />
      </Box>
      <Box>
        <Box mt={1.5}>
          <Paragraph>Password</Paragraph>
        </Box>
        <TextField
          fullWidth
          placeholder="사용하실 비밀번호를 입력해주세요."
          id="password"
          type="password"
          value={signUpData.password}
          onChange={handleOnChange}
        />
        <Box>
          {/* <PasswordViewButton pwType={pwType} onClick={handlePwType} /> */}
        </Box>
      </Box>
      <Box>
        <Box mt={1.5}>
          <Paragraph>Password Check</Paragraph>
        </Box>
        <TextField
          fullWidth
          placeholder="비밀번호를 한번 더 입력해주세요."
          id="secondPassword"
          type="password"
          value={signUpData.secondPassword}
          onChange={handleOnChange}
        />
      </Box>
      <Box>
        <Box mt={1.5}>
          <Paragraph>Company Name</Paragraph>
        </Box>
        <Box gap={1.5}>
          <TextField
            fullWidth
            placeholder="업체명을 작성해주세요."
            id="nickname"
            type="text"
            value={signUpData.nickname}
            onChange={handleOnChange}
            maxLength={8}
          />
        </Box>
      </Box>
      <Box>
        <Box mt={1.5}>
          <Paragraph>Phone Number</Paragraph>
        </Box>{" "}
        <TextField
          fullWidth
          placeholder="'-' 빼고 전부 입력해주세요."
          id="phone"
          type="text"
          value={signUpData.phone}
          onChange={handleOnChange}
        />
      </Box>
      <Box>
        <Box mt={1.5}>
          <Paragraph>Addess</Paragraph>
        </Box>
        <div>
          {/* <PostCodeDaum
                  isView={isView}
                  setIsView={setIsView}
                  setAddressInfo={setAddressInfo}
                /> */}
        </div>

        <Box display="flex" gap={1.5}>
          <TextField
            fullWidth
            placeholder="Find 버튼을 통해 주소를 검색해주세요."
            id="localAddress"
            type="text"
            value={signUpData.localAddress}
            onChange={handleOnChange}
            readOnly
          />
          <Button
            onClick={() => {
              handleOpenModal();
            }}
          >
            Find
          </Button>
        </Box>
        <Box mt={1}>
          <TextField
            fullWidth
            placeholder="상세주소를 입력해주세요."
            id="extraAddress"
            type="text"
            value={signUpData.extraAddress}
            onChange={handleOnChange}
          />
        </Box>
      </Box>
      <Box>
        <Box mt={1.5}>
          <Paragraph>Registration Number</Paragraph>
        </Box>
        <TextField
          fullWidth
          placeholder="사업자 등록번호를'-' 빼고 전부 입력해주세요."
          id="registrationNumber"
          type="number"
          value={signUpData.phone}
          onChange={handleOnChange}
        />
      </Box>
      <Box>
        <Box mt={1.5}>
          <Paragraph>Registration Certificate</Paragraph>
        </Box>
        <Input
          fullWidth
          placeholder="사업자 등록증 이미지를 첨부해주세요."
          id="registrationNumber"
          type="file"
          accept="image/*"
          value={signUpData.phone}
          onChange={handleOnChange}
        />
      </Box>

      <Box display={"flex"} gap={1.5}>
        <Box maxWidth={1 / 3}>
          <Box mt={1.5}>
            <Paragraph>Bank Name</Paragraph>
          </Box>
          <Select
            fullWidth
            placeholder="정산을 위한 은행을 선택해주세요."
            id="bankName"
            type="file"
            // value={signUpData.phone}
            // onChange={handleOnChange}
          >
            <option value="" disabled>
              은행을 선택해주세요.
            </option>
            {bankList.map((bank, index) => (
              <option key={index} value={bank}>
                {bank}
              </option>
            ))}
          </Select>
        </Box>

        <Box maxWidth={1 / 2}>
          <Box mt={1.5}>
            <Paragraph>Bank Account</Paragraph>
          </Box>
          <TextField
            fullWidth
            placeholder="계좌번호를 '-'를 제외하여 입력해주세요"
            id="bankAccount"
            type="number"
            value={signUpData.phone}
            onChange={handleOnChange}
          />
        </Box>
      </Box>
      <Box>
        <Box maxWidth={1 / 2}>
          <Box mt={1.5}>
            <Paragraph>Bank Holder</Paragraph>
          </Box>
          <TextField
            fullWidth
            placeholder="예금주를 입력해주세요."
            id="bankHolder"
            type="text"
            value={signUpData.bankHolder}
            onChange={handleOnChange}
          />
        </Box>
        <Box maxWidth={1 / 2}>
          <Box mt={1.5}>
            <Paragraph>Copy of bankbook</Paragraph>
          </Box>
          <Input
            fullWidth
            placeholder="통장사본을 올려주세요."
            id="bankImg"
            type="file"
            accept="image/*"
            value={signUpData.bankImg}
            onChange={handleOnChange}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default SignUpForm;
