import { useState } from "react";
import logo from "./tree-736885__480.jpg";
import TextContent from "./TextContent";
function Text() {
    const[displayCardRight,setDisplayCardRight]=useState(false);
    function handleButtonClick()
    {
        if(displayCardRight===false)
        {
            setDisplayCardRight(true)
        }

    }
    return (
        <div className="bg1"> 
    
             

        <div className="bg-background-100 dark:bg-background-70 h-screen mt-1  drop-shadow-md rounded-md relative border-[2px] border-border-100 ">
            <div className="w-20 m-2 ">
                <img src={logo}></img>
            </div>
            <div className="grid h-56 place-content-center ">
                <h1 className="text-white pt-32 mt-16 text-4xl  ">This is an <span className="text-yellow-500"> Intelligent Content </span> platform</h1>
                <h1 className="text-white text-center mt-16  text-2xl">When i fell in love with cryptocurrency</h1>
                <h1 className="mt-2 text-white text-center text-2xl mt-3">All i saw is treasure in misery</h1>
                <h1 className="text-white text-center text-2xl text-yellow-400 mt-3">So i wish to buy BTC</h1>
                <h1 className="text-white text-center text-2xl text-yellow-400 mt-3">But i had no CTC</h1>
                <h1 className="text-white text-center text-2xl  mt-3">It then lead to my agony</h1>
                <button type="button"  className="bg-green-500 h-14 mt-24  hover:bg-blue-700 text-white  py-2 px-4 rounded"></button>
                <h1 className="text-white text-center text-2xl  mt-3">Get early access</h1>
               
            </div>
        </div>
        {
            displayCardRight && 
            <TextContent />
        }
        </div>
    )

}
export default Text;