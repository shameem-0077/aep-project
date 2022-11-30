import React, { useState } from "react";
import OtpInput from "react-otp-input";
import styled from "styled-components";

function OtpWindow() {
  const [otp, setOtp] = useState("");
  // let handleChange = (otp) => {
  //   setOtp({ otp })
  // };
  return (
    <Container>
      <Wrapper>
        <Content>
          <Head>Enter Verification Code</Head>
          <HrLine />
          <ParaGraph>
            We have send you a verification code to your +91 8987 989 023
          </ParaGraph>
          <OtpInput value={otp} numInputs={6} separator={<span>-</span>} />
        </Content>
      </Wrapper>
    </Container>
  );
}

const Container = styled.section`
  position: fixed;
  background: rgba(0, 0, 0, 0.6);
  height: 100%;
  width: 100%;
  z-index: 5000;
`;
const Wrapper = styled.div`
  position: absolute;
  width: 738px;
  height: 558px;
  left: 25%;
  top: 25%;
  background-color: #fff;
`;
const Content = styled.div``;
const Head = styled.h3``;
const HrLine = styled.hr``;
const ParaGraph = styled.p``;

export default OtpWindow;
