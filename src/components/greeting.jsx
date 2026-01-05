import React from "react";
import styled from "styled-components";
import { Divider } from "antd";
import {
  GROOM_NAME,
  GROOM_FATHER_NAME,
  GROOM_MOTHER_NAME,
  BRIDE_NAME,
  BRIDE_FATHER_NAME,
  BRIDE_MOTHER_NAME,
} from "../../config";
import Flower from "../assets/flower1.png";

const Wrapper = styled.div`
  padding-top: 42px;
  margin: 0 auto;
  width: 70%;
`;

const Title = styled.p`
  font-size: 1rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
  text-align: center;
`;

const Content = styled.p`
  font-size: 0.72rem;
  line-height: 1.75;
  opacity: 0.75;
  margin-bottom: 16px;
  width: 100%;
  text-align: center;
`;

const GroomBride = styled.p`
  font-size: 0.875rem;
  line-height: 1.75;
  opacity: 0.85;
  margin-bottom: 0px;
  width: 100%;
  text-align: center;
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 1.375rem;
  padding-bottom: 42px;
`;

const Greeting = () => {
  return (
    <Wrapper>
      <Divider style={{ marginTop: 32, marginBottom: 32 }} plain>
        <Title data-aos="fade-up">초대합니다</Title>
      </Divider>
      <Image data-aos="fade-up" src={Flower} />
      <Content data-aos="fade-up">
        낳아주시고 길러주신
        <br />
        <br />
        사랑하고 존경하는 어머니
        <br />
        <br />
        송영자 여사님의 산수연을 맞이하여
        <br />
        <br />
        축하하는 자리를 마련하였습니다.
        <br />
        <br />
        부디 참석하시어
        <br />
        <br />
        자리를 빛내주시면 감사하겠습니다.
        <br />
        <br />
        &nbsp;
      </Content>
      <GroomBride data-aos="fade-up">
        <b>딸</b> 조메리, 조진숙
        <br />
        <b>사위</b> 구중석, 최종원
        <br />
        <b>손주</b> 조민상
        <br />
        <b>손녀</b> 조은혜, 조은미
        <br />
        <b>외손녀</b> 구혜린, 구혜원, 구지원
      </GroomBride>
    </Wrapper>
  );
};

export default Greeting;
