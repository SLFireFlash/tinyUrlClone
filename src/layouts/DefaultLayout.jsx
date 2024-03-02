import {Outlet} from "react-router-dom";

import NavBar from "../components/Navbar";
import FooterV from "../components/FooterV";

export default function () {

    return(
        <>            
            <div className="wrapper">
                    <NavBar />
                    <div className="page-body">
                        <Outlet />
                    </div>
                    <FooterV />
                
            </div>
        
        </>
    )
}