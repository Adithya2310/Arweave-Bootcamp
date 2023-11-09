import { Link } from "react-router-dom";
import Collection from "../Collection";

const Grid=()=>{
    const Collections=["Ym1L8tJIfjGdKUly1c4fPOJE-81bOsQ1SK-MZUOj11Y"]
    return (
        <div className="h-full "> 
        <div className="px-3 ml-2 grid grid-template-row grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-5">
            {Collections.map((Collection)=>{
                return (
                <Link
                    to={`/assets/${Collection}`}>
                    <div className="m-3 h-[450px] w-[300px] pt-2 px-3 bg-slate-500 rounded">
                        <p className="px-2 word-wrap overflow-clip font-bold  text-semibold w-full text-center py-2">Name</p>
                        <img className="h-[300px] w-[300px] rounded my-2" src="https://arweave.net/JLBtGB1qtb4Uz2daN4ZYUt9hOREkNUIIkujTezqZjLI" alt="trial nft" />
                        <p className="px-2 word-wrap overflow-clip text-slate-300 text-semibold">Collection:<br/><span className="text-white ">Id</span></p>
                    </div>
                </Link>)
            })}
        </div>

        </div>
    )
}

export default Grid;