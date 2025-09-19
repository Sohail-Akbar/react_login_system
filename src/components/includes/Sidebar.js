import React from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
    MDBListGroup,
    MDBListGroupItem,
} from "mdb-react-ui-kit";

const Sidebar = () => {
    return (
        <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white">
            <div className="position-sticky">
                <MDBListGroup flush className="mx-3 mt-4">

                    <MDBListGroupItem
                        tag="a"
                        href="#"
                        action
                        className="py-2"
                    >
                        <i className="fas fa-tachometer-alt fa-fw me-3"></i>
                        <span>Main dashboard</span>
                    </MDBListGroupItem>

                    <MDBListGroupItem
                        tag="a"
                        href="#"
                        action
                        className="py-2 active"
                    >
                        <i className="fas fa-chart-area fa-fw me-3"></i>
                        <span>Website traffic</span>
                    </MDBListGroupItem>

                    <MDBListGroupItem tag="a" href="#" action className="py-2">
                        <i className="fas fa-lock fa-fw me-3"></i>
                        <span>Password</span>
                    </MDBListGroupItem>

                    <MDBListGroupItem tag="a" href="#" action className="py-2">
                        <i className="fas fa-chart-line fa-fw me-3"></i>
                        <span>Analytics</span>
                    </MDBListGroupItem>

                    <MDBListGroupItem tag="a" href="#" action className="py-2">
                        <i className="fas fa-chart-pie fa-fw me-3"></i>
                        <span>SEO</span>
                    </MDBListGroupItem>

                    <MDBListGroupItem tag="a" href="#" action className="py-2">
                        <i className="fas fa-chart-bar fa-fw me-3"></i>
                        <span>Orders</span>
                    </MDBListGroupItem>

                    <MDBListGroupItem tag="a" href="#" action className="py-2">
                        <i className="fas fa-globe fa-fw me-3"></i>
                        <span>International</span>
                    </MDBListGroupItem>

                    <MDBListGroupItem tag="a" href="#" action className="py-2">
                        <i className="fas fa-building fa-fw me-3"></i>
                        <span>Partners</span>
                    </MDBListGroupItem>

                    <MDBListGroupItem tag="a" href="#" action className="py-2">
                        <i className="fas fa-calendar fa-fw me-3"></i>
                        <span>Calendar</span>
                    </MDBListGroupItem>

                    <MDBListGroupItem tag="a" href="#" action className="py-2">
                        <i className="fas fa-users fa-fw me-3"></i>
                        <span>Users</span>
                    </MDBListGroupItem>

                    <MDBListGroupItem tag="a" href="#" action className="py-2">
                        <i className="fas fa-money-bill fa-fw me-3"></i>
                        <span>Sales</span>
                    </MDBListGroupItem>

                </MDBListGroup>
            </div>
        </nav>
    );
};

export default Sidebar;
