import React from 'react'
import { Container, DishType, DivType, Spicy, Vagitarian, Vegan } from './styles'

export default function SignatureOfDishes() {
  return (
    <Container>
        <DishType>SIGNAURE DISH OF:</DishType><br/>
        <DivType>
            <Spicy/>
            <DishType>Spicy</DishType><br/>
        </DivType>
       
        <DivType>
            <Vagitarian/>
            <DishType>Vagitarian</DishType><br/>
        </DivType>

        <DivType>
            <Vegan/>
            <DishType>Vegan</DishType><br/>
        </DivType>
    </Container>
  )
}
