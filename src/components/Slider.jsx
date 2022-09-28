import styled from 'styled-components'
import React from 'react'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';

const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
position: relative;
`

const Arrow = styled.div`
width: 50px;
height: 50px;
background-color: #f7f8f7;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;
left: ${props=> props.direction === "left" && "10px"};
right: ${props=> props.direction === "right" && "10px"};
margin: auto;
cursor: pointer;
opacity: 0.75;
`

const Wrapper = styled.div`
height: 100%;
`
const Slide = styled.div`
width: 100vw;
height: 100vh; 
display: flex;
align-item: center;
`
const Imgcontainer = styled.div`
height: 100%;
flex:2;`

const Image = styled.img`
padding-top: 45px;
padding-left: 45px;
height: 80%;
`

const InfoContainer = styled.div`
flex: auto;
padding: 50px;`

const Title = styled.h1`
font-size: 70px;`
const Desc = styled.p`
margin: 40px 0px;
font-size: 20px;
font-weight: 500px;
`
const Button = styled.button`
padding: 10px;
font-size: 20px;
color: #f7f8f7;
border-color: transparent;
background-color: #1A6837;
cursor: pointer;
`


export const Slider = () => {
  return (
    <Container>
      <Arrow direction="left">
      <ArrowLeftOutlined/>
      </Arrow>
      <Wrapper>
        <Slide>
        <Imgcontainer>
        <Image src="https://images.unsplash.com/photo-1513135724701-30343e546328?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=458&q=80" />
        </Imgcontainer>
        <InfoContainer>
          <Title>Sustainability at your Doorstep!</Title>
          <Desc>We shield you from any toxic chemicals by substituting them with natural ingredients. Using environmentally friendly items increases your quality of life in terms of mortality, age, diseases, and illness.</Desc>
          <Button>Explore</Button>
        </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right">
      <ArrowRightOutlined/>
      </Arrow>
    </Container>
  )
}
