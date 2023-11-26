import React from "react"; 
import{IoFastFoodOutline}
from "react-icons/io5"
import { SiIfood } from "react-icons/si"
import { Link } from "react-router-dom";
import{FaShoppingCart,FaUserTie } from "react-icons/fa"
import{FiLogIn} from "react-icons/fi"
import {motion} from "framer-motion"


const Header =({ isAuthenticated= false }) => {
    return (
    <nav>   
                    <div>
                    <motion.div
        initial ={{x:"-100%"}}
       whileInView={{x:1}}
       transition={{delay: 0.1 }}
                > <SiIfood size={'2em'} color="orange" /> </motion.div><h1 style={{color:'orange'} }><sup><i>MooD </i></sup> </h1><sub style={{color:"rgb(149, 4, 59)"} }><b>with</b></sub><h3 style={{color:"orange"} }> <i>FooD</i></h3>
              <motion.div
        initial ={{x:"100%"}}
       whileInView={{x:2}}
       transition={{delay: 0.3 }}
         
                >
               {/* <SiIfood size={'1.1em'} color="orange" /> */}
        <sub><IoFastFoodOutline size={'3.2em'} color="rgb(149, 4, 59)" /></sub>
        </motion.div> </div>
        <div>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
            <Link to="/cart"><FaShoppingCart /></Link>
            <Link to={isAuthenticated ? "/me" : "/login"}>
              {isAuthenticated ? <FaUserTie/> : <FiLogIn />}  
            </Link>
        </div>
    </nav>
    );
};

export default Header;