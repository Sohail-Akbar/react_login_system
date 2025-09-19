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
                        className="py-2 active"
                    >
                        <i className="fas fa-tachometer-alt fa-fw me-3"></i>
                        <span>Dashboard</span>
                    </MDBListGroupItem>

                </MDBListGroup>
            </div>
        </nav>
    );
};

export default Sidebar;
