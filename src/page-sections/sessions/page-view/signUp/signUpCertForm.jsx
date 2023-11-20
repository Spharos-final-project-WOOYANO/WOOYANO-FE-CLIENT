"use client";
import { Button, Grid, Divider, TextField, Box, DialogContentText } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup"; // CUSTOM DEFINED HOOK
import { H5, H6, Paragraph } from "components/typography"; // CUSTOM SESSIONS LAYOUT

import Layout from "page-sections/sessions/Layout";
import { LabelTwoTone } from "@mui/icons-material";

export default function SignUpCertForm(props) {
  const { signUpData, setSignUpData } = props;

  //이메일 유효성 검사 변수
  const [checkEmail, setCheckEmail] = useState(false);

  const handleOnChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    const id = e.target.id;
    // 이메일 유효성 검사 정규식
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    //이메일 유효성 검사
    if (id === "email") {
      const checkedEmail = emailRegex.test(value);
      setCheckEmail(checkedEmail);
      if (checkedEmail) {
        setSignUpData((prevData) => ({
          ...prevData,
          emailformcheck: true,
          [id]: value,
        }));
      } else {
        setSignUpData((prevData) => ({
          ...prevData,
          emailformcheck: false,
          [id]: value,
        }));
      }
      console.log("Email Form Check:", checkedEmail);
    } else {
      setSignUpData({
        ...signUpData,
        [id]: value,
      });
    }
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Must be a valid email")
      .max(255)
      .required("Email is required"), // password: Yup.string()
  });

  const { errors, values, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      validationSchema,
    });

  return (
    <>
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
            Welcome to Wooyano! 우야노에 오신걸 환영합니다!
          </Paragraph>
          <div>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <H6 fontSize={16} mb={1}>
                  Register with your Email
                </H6>
                <DialogContentText>Name</DialogContentText>
                <TextField
                  fullWidth
                  id="username"
                  type="name"
                  placeholder="사장님 이름을 입력해주세요.(사업자 등록증 기준)"
                  value={signUpData.username}
                  onChange={handleOnChange}
                />
              </Grid>
              <Grid item xs={12}>
              <DialogContentText>Email</DialogContentText>
                <TextField
                  fullWidth
                  id="email"
                  type="text"
                  placeholder="ex) wooyano@example.com"
                  value={signUpData.email}
                  onChange={handleOnChange}
                  onBlur={handleBlur}
                  helperText={touched.email && errors.email}
                  error={Boolean(touched.email && errors.email)}
                />
              </Grid>
              <Grid item xs={12}>
              <Paragraph mt={0} textAlign={"center"} color="text.secondary" >
                회원가입시, 우야노 서비스 이용약관과 
                <Box mt={1} fontWeight={500} textAlign={"center"} href="#">
                개인정보 처리방침에 동의합니다.
                </Box>{" "}
                <Box mt={1} fontWeight={500} textAlign={"center"} href="#">
                회원가입 완료 이후, 가입 승인까지 3~5일 소요됩니다.
                </Box>{" "}
              </Paragraph>
            </Grid>
            </Grid>
          </div>
        </Box>
    </>
  )
}
