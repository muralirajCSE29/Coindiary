import { useState } from "react";
import logo from "./tree-736885__480.jpg";
import CardLeftContent from "./CardLeftContent";
import CardLeftContent3 from "./CardLeftContent3";
function TextContentRight3() {
    const [displayCardLeft, setDisplayCardLeft] = useState(false);
    function handleContentClick() {
        if (displayCardLeft === false) {
            setDisplayCardLeft(true);
        }

    }
    return (
        <div>
            <div className="bg-background-100 bg2 dark:bg-background-70 h-screen mt-1 drop-shadow-md rounded-md relative border-[2px] border-border-100 ">
                {/* <img src={}></img> */}
                <div className="w-20 m-2 ">
                    <img src={logo}></img>
                </div>
                <div className="float-left w-6/12">
                    <div className="grid h-56 place-content-center">
                        <h1 className="text-white font-bold text-yellow-500 text-5xl pt-52">TOKENOMICS</h1>
                    </div>
                </div>
                <div className="float-left">
                    <div>
                        <div onClick={handleContentClick}  className="float-left text-center h-64 w-80 ml-3 mt-3 transform transition duration-500 hover:scale-105 bg-background-100 dark:bg-background-70  drop-shadow-md rounded-3xl relative  border ">
                            <h1 className="text-white text-yellow-500 text-2xl mt-6" >About crpto</h1>
                            <p className="overflow-hidden text-white mt-3">
                                You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more.
                            </p>
                        </div>
                        <div onClick={handleContentClick}  className="float-left text-center h-64 w-80 ml-3 mt-3 transform transition duration-500 hover:scale-105 bg-background-100 dark:bg-background-70  drop-shadow-md rounded-3xl relative  border ">
                            <h1 className="text-white text-yellow-500 text-2xl mt-6" >About crpto</h1>
                            <p className="overflow-hidden text-white mt-3">
                                You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more.
                            </p>

                        </div>

                    </div>
                    <div>
                        <div onClick={handleContentClick}  className="float-left text-center h-64 w-80 ml-3 mt-3 transform transition duration-500 hover:scale-105 bg-background-100 dark:bg-background-70  drop-shadow-md rounded-3xl relative  border ">
                            <h1 className="text-white text-yellow-500 text-2xl mt-6" >About crpto</h1>
                            <p className="overflow-hidden text-white mt-3">
                                You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more.
                            </p>

                        </div>
                        <div onClick={handleContentClick}  className="float-left text-center h-64 w-80 ml-2.5 mt-2.5 transform transition duration-500 hover:scale-105 bg-background-100 dark:bg-background-70  drop-shadow-md rounded-3xl relative  border ">
                            <h1 className="text-white text-yellow-500 text-2xl mt-6">About crpto</h1>
                            <p className="overflow-hidden text-white mt-3">
                                You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more.
                            </p>

                        </div>

                    </div>

                </div>

            </div>
            {displayCardLeft && <div>
                <CardLeftContent3 />
            </div>
            }

        </div>

    )

}
export default TextContentRight3;