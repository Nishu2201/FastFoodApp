import React from "react";
import {motion} from "framer-motion";
import pic from "../home/foodpic.png";
import fmGif from "../contact/form.Gif";
// import fmGif from "../assets/GifPic.gif";

const Contact = () => {
  return <section className="contact">
   <motion.form
    initial ={{ x:"-100vw",
     opacity: 0,          
               }}
               animate={{
                x:0,
                opacity: 1,
               }}
               transition={{delay: 0.3 }}
               >
   <img src={fmGif} alt="Gif" 
   width={"90%"} height={"15%"}/> 
    <h2>Contact Us</h2>
  <input type ="text" placeholder="Name" />
    <input type="email" placeholder="Email" id="" />

<textarea placeholder="Message..." id="" cols="30" rows="10"></textarea>


<button type="submit"><b>Send</b></button>
   </motion.form>
<motion.div className="formBorder"
initial ={{ x:"100vw",
opacity: 0,          
          }}
          animate={{
           x:0,
           opacity: 1,
          }}
          transition={{delay: 0.3 }}
          >
<motion.div
initial ={{ y:"-100vh", x:"50%",
opacity: 0,          
          }}
          animate={{
           x:"50%", y:"-50%",
           opacity: 1,
          }}
          transition={{delay: 1 }}
          > 
  <img src={pic} alt="Dishes" width={"200%"} height={"200%"}  />
   </motion.div>

</motion.div>
  </section>

}

export default Contact;