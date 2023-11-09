import { HashRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Collection from "./Collection";

function App() {
	return (
    <div className=" ">
		<HashRouter>
			<Routes>
				<Route path={"/"} element={<Home />} />
        <Route path={"/assets/:id"} element={<Collection />}></Route>
			</Routes>
		</HashRouter>
    </div>
	);
}

export default App;