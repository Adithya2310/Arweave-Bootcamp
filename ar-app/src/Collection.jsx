import { useEffect, useState } from "react";
import { getTransactionData } from "./utils/queryData";
import { Link, useParams } from "react-router-dom";
import Loader from "./components/Loader";

const Collection=()=>{
    const {id:Collection}=useParams();

    // to store the list of atomic assets from the collection
    const [arAssetData,setArAssetData]=useState(null);

    // to store the list of atomic collecitons
    useEffect(() => {
		async function getData() {
			const data = await getTransactionData(Collection);
			console.log("asset data", data.items);
			setArAssetData(data.items);
        }
        getData();
	}, []);

    if(arAssetData==null)
    {
        return <Loader/>
    }
    return (
        <div className=" ml-1 px-1">
        <h1 className="text-3xl pt-3  my-3 mx-9 font-semibold text-slate-300">Collection</h1>
        <div className="w-full h-1 mb-10 bg-slate-600 mx-auto mt-2 rounded-full"></div>
        {/* <div className="flex justify-center items-center"></div> */}
            <div className=" place-items-center px-3 ml-2 mx-auto grid grid-template-row grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-5">
                {arAssetData.map((nft)=>{
                    return (
                        <Link to={`https://arweave.net/${nft}`}>
                            <div className="m-3 h-[400px] w-[300px] pt-2 px-3 bg-slate-500 rounded">
                                <img className="h-[300px] w-[300px] rounded my-2" src={`https://arweave.net/${nft}`} alt="trial nft" />
                                <p className="px-2 word-wrap overflow-clip text-slate-300 text-semibold">Id:<br/><span className="text-white ">{nft}</span></p>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>)
}
export default Collection;