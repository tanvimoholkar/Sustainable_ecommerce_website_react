import styled from 'styled-components'
import React, { useState } from "react";
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import { sliderItems } from '../data';

const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
position: relative;
overflow: hidden;
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
opacity: 0.5;
z-index: 2;
`

const Wrapper = styled.div`
height: 100%;
display: flex;
transition: all 1.5s ease;
transform: translateX(${props=>props.slideIndex * -100}vw);
`
const Slide = styled.div`
width: 100vw;
height: 100vh; 
display: flex;
align-item: center;
background-color: #${props=>props.bg}
`
const Imgcontainer = styled.div`
height: 100%;
flex:1;`

const Image1 = styled.img`
padding-top: 70px;
position: 'absolute'; 
top: 55; 
left: 20; 
zIndex: 1;
height: 56%;
`
const Image2 = styled.img`
padding-top: 45px;
padding-right: 45px;
height: 78%;
`

const InfoContainer = styled.div`
flex: auto;
padding: 50px;`

const Title = styled.h1`
font-size: 70px;`
const Desc = styled.p`
margin: 45px 0px;
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
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
      if(direction==="left"){
        setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
      } else {
        setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
      }
    };
  return (
    <Container>
      <Arrow direction="left" onClick={()=>handleClick("left")}>
      <ArrowLeftOutlined/>
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
        <Slide bg={item.bg} key={item.id}>
        <InfoContainer>
          <Title>{item.title}</Title>
          <Desc>{item.desc}</Desc>
          <Button>Shop Now!</Button>
        </InfoContainer>
        <Imgcontainer>
        <Image1 src={item.img1}/>
        </Imgcontainer>
        <Imgcontainer><Image2 src={item.img2}/>
        </Imgcontainer>
        </Slide>))}
      </Wrapper>
      <Arrow direction="right" onClick={()=>handleClick("right")}>
      <ArrowRightOutlined/>
      </Arrow>
    </Container>
  )
}