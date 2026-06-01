import React, {useState} from "react"

function Tailwindgrid(){
    return(
       <div className=" grid sm:grid-cols-2 md:grid-cols-2 text-white p-6 gap-6 text-center font-semibold text-2xl sm:text-sm">
        <div className="bg-amber-700 p-4 rounded hover:bg-amber-600 hover:scale-105 transition-all duration-150">Feature 1</div>
        <div className="bg-amber-700 p-4 rounded hover:bg-amber-600 hover:scale-105 transition-all duration-150">Feature 2</div>
        <div className="bg-amber-700 p-4 rounded hover:bg-amber-600 hover:scale-105 transition-all duration-150">Feature 3</div>
        <div className="bg-amber-700 p-4 rounded hover:bg-amber-600 hover:scale-105 transition-all duration-150">Feature 4</div>
        <div className="bg-amber-700 p-4 rounded hover:bg-amber-600 hover:scale-105 transition-all duration-150">Feature 5</div>
        <div className="bg-amber-700 p-4 rounded hover:bg-amber-600 hover:scale-105 transition-all duration-150">Feature 6</div>
       </div>
    )
}

export default Tailwindgrid