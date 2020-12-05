import React from "react";

const BurgerIngredients = ({burgerStack}) =>{
    return(
        <>
        <div>Start of Burger</div>
        <div> ................</div>
        {burgerStack && burgerStack.map((item, index)=> <div key={index}>{item.name}</div>)}
        <div> ................</div>
        <div>End of Burger</div>
        </>
    ) 
};



export default BurgerIngredients;
