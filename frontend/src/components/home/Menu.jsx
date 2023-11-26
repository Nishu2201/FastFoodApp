import React from "react";
import MenuCard from "./MenuCard";
import CheesePizza from  "../../assets/Cheese-Pizza.png";
import MargaritaPizza from  "../../assets/Margarita-Pizza.png";
import TacoPizza from  "../../assets/taco-Piza.png";
import ChickenPizza from  "../../assets/Chicken-Pizza.png";
// import CheesePizza from  "../../assets/Cheese-Pizza.png";

const Menu =() => {

const addToCartHandler=(itemNum) => {};


    return <section id="menu">
        <h1> MENU</h1>

        <div> 
        <MenuCard  itemNum={1}
        pizzaSrc={CheesePizza} 
        price={200}
        title="Cheese Pizza" 
        handler={addToCartHandler}    
        delay={0}    
        />
        <MenuCard  itemNum={2}
        pizzaSrc={MargaritaPizza} 
        price={200}
        title="Margarita-Pizza" 
        handler={addToCartHandler}        
        delay={0.3}
        />
        <MenuCard  itemNum={3}
        pizzaSrc={TacoPizza} 
        price={200}
        title="Taco-pizza" 
        handler={addToCartHandler}   
        delay={0.5}     
        />
        <MenuCard  itemNum={4}
        pizzaSrc={ChickenPizza} 
        price={399}
        title="Chicken-Pizza" 
        handler={addToCartHandler}
        delay={0.8}        
        />

        </div>
    </section>
};

export default Menu;