import React from "react";
import pic from "./foodpic.png";
import {motion} from "framer-motion";
import Founder from "./Founder";
import Menu from "./Menu";


const Home = () => {
  return (
    <>
  <section className="home">
    <div >
    <motion.div
      //  
      initial ={{ x:"-100vw",
     opacity: 0,          
               }}
               animate={{
                x:0,
                opacity: 1,
               }}
               transition={{delay: 0.1 }}
               >
           <img src={pic} alt=" " width={"300"} height={"200"} />
          </motion.div>
        <h1>Mood with Food  </h1>
<p> <b><i>Give yourself a tasty & healthy food.</i></b></p>
</div>
    <a href="#menu"> Explore Menu</a>

    
  </section>

<Founder />


<Menu />
 </>
  );
};

export default Home;
