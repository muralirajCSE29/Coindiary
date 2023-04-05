import logo from "./tree-736885__480.jpg";

function EndPage() {
    return (
    
//             <div className="bg-background-100 bg-black dark:bg-background-70 h-screen mt-1  drop-shadow-md rounded-md relative border-[2px] border-border-100 ">

//                 <div className="grid h-56 place-content-center">
//                     <h1 className="text-white">End</h1>
                    


//                 </div>

//             </div>
//             )


// }
<div className="bg-black" >
        <div className="bg-background-100 bg1 dark:bg-background-70 h-screen mt-1  drop-shadow-md rounded-md relative border-[2px] border-border-100 ">
            <div className="w-20 m-2 ">
                <img src={logo}></img>
            </div>
            <div className="grid h-56 place-content-center ">
                <h1 className="text-white text-6xl font-bold"> Bringing social media to crypto</h1>
                <h1 className="text-yellow-500 pt-10 text-xl">Coindiary supports experiences for cryptocurrencies,consumers,and everyone in between</h1>
               
            </div>
            <div className=" ">
                <h1 className="text-white text-end mt-28 mx-24 text-xl  ">Be the first to know about </h1>
                <h1 className="text-white text-end text-xl mx-24" >Crypto news everyday!</h1>
            </div>
                <div>
                    <h1 className="text-white text-center mt-24"> &#169; 2023 Coindiary.All rights reserved</h1>
                </div>
        </div>
        
        </div>
    )

}
            export default EndPage;