import React from "react";
import styled from "styled-components";
import steypLogo from "../../assets/images/steyp-logo.svg";
import LineBg from "../../assets/images/lines-bg.svg";
import { type } from "@testing-library/user-event/dist/type";
import { Link } from "react-router-dom";
import OtpWindow from "./OtpWindow";

function Registration() {
  return (
    <>
      <Spotlight>
        <Sleft>
          <Img1>
            <Steyp src={steypLogo} />
          </Img1>
          <H1>Apply for Admission</H1>
          <P8>
            Steyp's Engineering program is only for students who qualifies
            Steyp's eligibility test
          </P8>
          <ImageBox>
            <Ma src={require("../../assets/images/Mammookka.png")} />
          </ImageBox>
        </Sleft>
        <Sright>
          <H2>Steyp's Applicant Form</H2>
          <P1>
            Welcome back! Enter the details that your entered during
            registration
          </P1>
          <Form>
            <Label>Full Name*</Label>
            <Input10 placeholder="Enter Full Name" required />
            <Ab />
            <Mains>
              <MLeft>
                <Label>Date of Birth *</Label>
                <Ab />
                <Input21 type="date" placeholder="DD-MM-YYYY" required />
              </MLeft>
              <MRight>
                <P>Phone Number *</P>
                <Div6 className="main">
                  <Br />
                  <Div1>
                    <Div2 className="country-img">
                      <Img3
                        src={require("../../assets/images/india.png")}
                        alt="flag"
                      />
                    </Div2>
                    <Div className="country-code">+91</Div>
                    <Input1
                      type="number"
                      placeholder="Enter Phone Number"
                      required
                    />
                  </Div1>
                </Div6>
              </MRight>
            </Mains>
            <Radio1>
              <P>Are you a</P>
              <Input
                type="radio"
                id="html"
                name="fav_language"
                required
              />  <Label>School Student</Label>
              <Input type="radio" id="css" name="fav_language" required /> {" "}
              <Label>College Student</Label>
              <Input
                type="radio"
                id="javascript"
                name="fav_language"
                required
              />
              <Label>Graduate or Dropout</Label>
            </Radio1>
            <Radio2>
              <P>Please select your local body</P>
              <Input
                type="radio"
                id="html"
                name="fav_language"
                required
              />  <Label>Panchayath</Label>
              <Input type="radio" id="css" name="fav_language" required /> {" "}
              <Label>Muncipality</Label>
              <Input
                type="radio"
                id="javascript"
                name="fav_language"
                required
              />
              <Label>Corporation</Label>
            </Radio2>
            <P>Enter your panchayath</P>
            <Select name="cars" id="cars" required>
              <Option value={"enter your panchayath"}></Option>
              <Option>KALLARA</Option>
              <Option>PANGODE</Option>
              <Option>BHARATHANNOOR</Option>
              <Option>THANNICHAL</Option>
              <Option>POTHENCODE</Option>
              <Option>THAMBANOOR</Option>
              <Option>NALANJIRA</Option>
              <Option>NEDUMANGADU</Option>
            </Select>
            <Button>
              <Link to="/verfiy">Apply Now</Link>
            </Button>
          </Form>
        </Sright>
      </Spotlight>
    </>
  );
}
export default Registration;
const Spotlight = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-around;
  @media all and (max-width: 768px) {
    flex-wrap: wrap;
  }
`;
const Sleft = styled.div`
  width: 40%;
  background-color: #f3f9eb;
  margin-top: 31px;
  padding-top: 53px;
  margin-left: 25px;
  background-image: url(${LineBg});
  @media all and (max-width: 768px) {
    width: 80%;
  }
`;
const Ab = styled.br``;
const Img1 = styled.div`
  width: 14px 40px;
  margin: auto;
  width: 23%;
  margin-bottom: 15px;
`;
const Img3 = styled.img`
  border-radius: 15px;
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;
const ImageBox = styled.div``;
const Ma = styled.img`
  display: block;
  width: 100%;
`;
const Mains = styled.div`
  display: flex;
  justify-content: space-between;
  width: 800px;
  @media all and (max-width: 768px) {
    flex-wrap: wrap;
    width: 400px;
    padding-bottom: 20px;
  }
  @media all and (max-width: 480px) {
    width: 199px;
  }
`;
const MLeft = styled.div`
  width: 46%;
  @media all and (max-width: 768px) {
    width: 80%;
  }
  @media all and (max-width: 480px) {
    width: 80%;
  }
`;
const MRight = styled.div`
  width: 46%;
  @media all and (max-width: 768px) {
    width: 80%;
  }
  /* @media all and (max-width:480px){
        width:60%;
    } */
`;
const Br = styled.br``;
const Input10 = styled.input`
  width: 750px;
  height: 40px;
  padding-left: 20px;
  padding-right: 5px;
  font-size: 20px;
  margin-bottom: 26px;
  color: #888;
  border: 0.2px solid #888;
  border-radius: 8px;
  margin-top: 20px;
  @media all and (max-width: 768px) {
    width: 350px;
  }
  @media all and (max-width: 768px) {
    width: 280px;
  }
  @media all and (max-width: 360px) {
    width: 250px;
  }
`;
const H2 = styled.h1`
  font-size: 38px;
  font-family: "Gordita Medium";
  @media all and (max-width: 640px) {
    font-size: 28px;
  }
  @media all and (max-width: 640px) {
    font-size: 20px;
  }
`;
const P = styled.p`
  margin-top: 0;
  margin-bottom: 21px;
  font-size: 20px;
  @media all and(max-width:640px) {
    margin-top: 16px;
  }
`;
const P8 = styled.p`
  color: #888;
  margin: 10px auto;
  width: 97%;
  font-size: 18px;
  font-size: 17px;
  text-align: center;
  @media all and (max-width: 1380px) {
    width: 81%;
    margin-bottom: 20px;
  }
  @media all and (max-width: 1080px) {
    width: 95%;
  }
`;
const Input21 = styled.input`
  margin-top: 21px;
  margin-bottom: 10px;
  padding-left: 20px;
  width: 280px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid #000;
  font-size: 18px;
  @media all and (max-width: 480px) {
    width: 199px;
  }
  @media all and (max-width: 360px) {
    width: 250px;
  }
`;
const Input1 = styled.input`
  border: none;
  font-size: 20px;
  outline: none;
  width: 76%;
  @media all and(max-width:480px) {
    width: 10%;
    color: #fff;
    font-size: 1px;
  }

  input[type="number"] {
    width: 80%;
  }
`;
const Form = styled.form``;
const Input = styled.input`
  margin-bottom: 20px;
`;
const Radio1 = styled.form`
  margin-bottom: 20px;
`;
const Radio2 = styled.form`
  margin-bottom: 10px;
`;
const Label = styled.label`
  margin-top: 30px;
  margin-bottom: 30px;
  font-size: 20px;
  @media all and (max-width: 1380px) {
    margin-right: 20px;
  }
`;
const Option = styled.option``;
const Select = styled.select`
  width: 300px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid #000;
  background: #fff;
  @media all and (max-width: 360px) {
    width: 266px;
  }
`;
const Steyp = styled.img`
  width: 100%;
  display: block;
  @media all and (max-width: 1380px) {
    margin-bottom: 20px;
  }
  @media all and (max-width: 640px) {
    margin-bottom: 20px;
  }
`;
const Div = styled.div``;
const Div6 = styled.div`
  border: 1px solid #000;
  width: 300px;
  height: 40px;
  margin-top: 21px;
  margin-bottom: 14px;
  border-radius: 8px;
  padding-left: 20px;
  @media all and (max-width: 480px) {
    width: 270px;
  }
  @media all and (max-width: 360px) {
    width: 260px;
  }
`;
const Div1 = styled.form`
  display: flex;
  align-items: center;
`;
const Div2 = styled.div`
  border-radius: 50%;
`;
const Img = styled.img``;
const Sright = styled.div`
  width: 60%;
  margin-left: 5%;
  padding-bottom: 40px;
  @media all and (max-width: 768px) {
    width: 80%;
  }
`;
const P1 = styled.p`
  color: #888;
  font-size: 18px;
`;
const H1 = styled.h1`
  margin: auto;
  text-align: center;
  font-size: 30px;
  font-family: "Gordita Regular";
  @media all and (max-width: 1280px) {
    margin-bottom: 25px;
  }
`;
const Button = styled.button`
  display: block;
  margin-left: 300px;
  height: 52px;
  width: 160px;
  justify-content: space-evenly;
  align-items: center;
  font-weight: 700;
  background: linear-gradient(
    111deg,
    rgb(21, 191, 129) 0%,
    rgb(11, 96, 65) 100%
  );
  color: #fff;
  border-radius: 30px;
  @media all and (max-width: 640px) {
    margin-left: 0;
    margin-top: 30px;
  }
`;
