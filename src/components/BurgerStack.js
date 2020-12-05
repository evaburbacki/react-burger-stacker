// where the order of ingredients go
import React from "react";
import Burgeringredients from "./BurgerIngredients"

const BurgerStack = ({burgerStack}) =>{
    return(
        <>
        <BurgerIngredients burgerStack={burgerStack} />
        </>
    )
};



export default BurgerStack;