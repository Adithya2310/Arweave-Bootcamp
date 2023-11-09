import Grid from "./components/Grid";
import { useState } from "react";
const Home=()=>{
    // to handle search 
    const [searchText,setSearchText]=useState("");
    const handleSearch=(e)=>{
        setSearchText(e.target.value);
    }

    return (
        <div className="ml-1 px-1">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl pt-3  my-3 mx-9 font-semibold text-slate-300">Discover</h1>
                <div>
                <form onSubmit={(e)=>e.preventDefault()}>
                    <input  
                      className=" bg-transparent outline mr-10 hidden md:block lg:block outline-slate-600 placeholder:px-3 px-2 py-1"
                      type="text"
                      name="searchText"
                      value={searchText}
                      placeholder="SEARCH"
                      onChange={handleSearch}
                    />
                </form>
            </div>
        </div>
        <div className="w-full h-1 mb-10 bg-slate-600 mx-auto mt-2 rounded-full"></div>
        <div className="mx-auto mt-2">
            <Grid
            searchText={searchText}
            ></Grid>
        </div>
        </div>
    )
}
export default Home;