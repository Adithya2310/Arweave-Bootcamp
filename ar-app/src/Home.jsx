import Grid from "./components/Grid";
const Home=()=>{

    return (
        <div className="ml-1 px-1">
            <h1 className="text-3xl pt-3  my-3 mx-9 font-semibold text-slate-300">Discover</h1>
            <div className="w-full h-1 mb-10 bg-slate-600 mx-auto mt-2 rounded-full"></div>
            <div className="mx-auto mt-2">
                <Grid></Grid>
            </div>
        </div>
    )
}
export default Home;