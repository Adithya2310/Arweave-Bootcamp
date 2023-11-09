import { Link } from "react-router-dom";
import {Collections} from "../data/data"
import { useEffect, useState } from "react";
const Grid=({searchText})=>{
    // to filter the searched values
    console.log(searchText,"searchText");
    const [filteredCollections,setFilteredCollection]=useState(Collections);
    useEffect(()=>{
        setFilteredCollection(Collections.filter((Collection)=>{
            return searchText===""||Collection.Name.toLowerCase().includes(searchText)||Collection.Id.includes(searchText);
        }))
    },[searchText])
    return (
        <div className="h-full "> 
        <div className="px-3 ml-2 grid grid-template-row grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-5">
            {filteredCollections.map((Collection)=>{
                return (
                <Link
                    to={`/assets/${Collection.Id}`}>
                    <div className="m-3 h-[450px] w-[300px] pt-2 px-3 bg-slate-500 rounded">
                        <p className="px-2 word-wrap overflow-clip font-bold  text-semibold w-full text-center py-2">{Collection.Name}</p>
                        <img className="h-[300px] w-[300px] rounded my-2" src={`https://arweave.net/${Collection.Sample}`} alt="trial nft" />
                        <p className="px-2 word-wrap overflow-clip text-slate-300 text-semibold">Collection:<br/><span className="text-white ">{Collection.Id}</span></p>
                    </div>
                </Link>)
            })}
        </div>

        </div>
    )
}

export default Grid;