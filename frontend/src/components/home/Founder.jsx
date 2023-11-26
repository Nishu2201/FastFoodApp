import React from "react";
import {motion} from "framer-motion";
import pic from "../../assets/Founderpic.jpeg";

const Founder =() => {

       return ( 
    <section className="founder">
       <div> <motion.div
            initial ={{x:"-100%"}}
         whileInView={{x:0}}
        >
            <img src={pic} alt="Founder" height={200} width={200}/>
            </motion.div>
            <h3>Nishu</h3>

            <p> Hey! Everyone I am Nishu, the founder of Mood with Food.
            <br />
            Our aim is to make a healthy & tasty food for you.
            </p>
            </div>
        </section>
    );
};

export default Founder;