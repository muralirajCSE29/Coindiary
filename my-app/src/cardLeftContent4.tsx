import { useState } from "react";
import logo from "./tree-736885__480.jpg";
import TextContent from "./TextContent";
function CardLeftContent4() {
    const [displayCardRight, setDisplayCardRight] = useState(false);
    function handleContentClick() {
        if (displayCardRight === false) {
            setDisplayCardRight(true);
        }

    }
    return (
        <div>
            <div className="bg-background-100 bg1 dark:bg-background-70 h-screen mt-1  drop-shadow-md rounded-md relative border-[2px] border-border-100 ">
                {/* <img src={}></img> */}
                <div className="w-20 m-2 ">
                    <img src={logo}></img>
                </div>

                <div className="float-left">
                    <div>
                        <div   className="float-left text-center h-64 w-80 ml-2.5 mt-2.5 transform transition duration-500 hover:scale-90 bg-background-100 dark:bg-background-70  drop-shadow-md rounded-3xl relative  border ">
                            <h1 className="text-white">1</h1>
                            <p className="overflow-hidden text-white">
                                You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more.
                            </p>

                        </div>
                        <div   className="float-left text-center h-64 w-80 ml-2.5 mt-2.5 transform transition duration-500 hover:scale-90 bg-background-100 dark:bg-background-70  drop-shadow-md rounded-3xl relative  border ">
                            <h1 className="text-white">1</h1>

                            <p className="overflow-hidden text-white">
                                You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more.
                            </p>

                        </div>

                    </div>
                    <div>
                        <div  className="float-left text-center h-64 w-80 ml-2.5 mt-2.5 transform transition duration-500 hover:scale-90 bg-background-100 dark:bg-background-70  drop-shadow-md rounded-3xl relative  border ">
                            <h1 className="text-white">1</h1>

                            <p className="overflow-hidden text-white">
                                You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more.
                            </p>

                        </div>
                        <div  className="float-left text-center h-64 w-80 ml-2.5 mt-2.5 transform transition duration-500 hover:scale-90 bg-background-100 dark:bg-background-70  drop-shadow-md rounded-3xl relative  border ">
                            <h1 className="text-white">1</h1>

                            <p className="overflow-hidden text-white">
                                You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more.
                            </p>

                        </div>

                    </div>

                </div>
                <div className="float-left w-6/12">
                    <div className="grid h-56 place-content-center">
                        <h1 className="text-white">hello</h1>
                    </div>
                </div>

            </div>
            {displayCardRight &&
                <div>
                    <TextContent />

                </div>}
        </div>
    )

}
export default CardLeftContent4;