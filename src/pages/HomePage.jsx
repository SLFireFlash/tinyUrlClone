import NavBar from "../components/Navbar";
import FooterV from "../components/FooterV";
import ItemCard from "../components/ItemCard";
import JoinUs from "../components/JoinUs";
import StatusCard from "../components/StatusCard";

export default function HomePage (){

    return(
        <>
            <div className="sec-one">
                <div className="paste-link">
                    <ItemCard 
                        InputName= 'Paste Your Link Here' 
                        BtnName = 'Genarate Your Link'
                    />
                </div>
                <div className="get-link">
                    <ItemCard 
                        InputName= 'copy Your Link' 
                        BtnName = 'Copy Link'
                    />
                </div> 
            </div>
            <div className="sec-two">
                <JoinUs />
            </div>
            <div className="sec-three">
                <div className="sec-three-head">
                    <h2>Some of our system status</h2>
                </div>
                <div className="sec-three-cards">
                    <StatusCard 
                        count = '40'
                        name = 'total links'
                    />
                    <StatusCard 
                        count = '20'
                        name = 'active users'
                    />
                    <StatusCard 
                        count = '10'
                        name = 'active links'
                    />
                    <StatusCard 
                        count = '30'
                        name = 'removed links'
                    />
                </div>

            </div>
        </>
    )
}