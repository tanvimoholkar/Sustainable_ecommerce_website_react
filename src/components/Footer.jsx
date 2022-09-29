import { Description } from '@material-ui/icons';
import React from 'react'
import myLogo from './Logo.svg';

const Container =  styled.div`
display: flex;
`
const Left =  styled.div`
flex: 1;
`
const Center =  styled.div`
flex: 1;
`
const Right =  styled.div`
flex: 1;
`

const Footer = () => {
  return (
    <Container>
    <Left>
        <Logo><img src={myLogo} width={182} height={64}/></Logo>
        <Description></Description>
        <SocialContainer>
            <SocialIcon>
                
            </SocialIcon>
        </SocialContainer>
    </Left>
    <Center></Center>
    <Right></Right>
    </Container>
  )
}

export default Footer