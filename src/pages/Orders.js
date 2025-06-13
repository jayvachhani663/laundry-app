import "./Orders.css";
import AfterSigninHeader from "../components/afterSigninHeader";
import LeftSidebar from "../components/sidebar";
import FooterBottom from "../components/FooterBottom";

const Orders = () => {
    return (
        <div className="orders-page">
            <AfterSigninHeader/>
            <div className="orders-main">
                <LeftSidebar activeIcon={"list"}/>
                <div className="orders-content">
                    <h2>Orders</h2>
                </div>
            </div>
             <FooterBottom/>
        </div>
    )
}

export default Orders;