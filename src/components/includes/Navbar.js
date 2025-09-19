import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import {
    MDBNavbar,
    MDBContainer,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBInputGroup,
    MDBDropdown,
    MDBDropdownMenu,
    MDBDropdownToggle,
    MDBDropdownItem,
    MDBDropdownDivider,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink
} from "mdb-react-ui-kit";

const Navbar = () => {
    const { logout } = useContext(AuthContext);
    return (
        <MDBNavbar expand="lg" light bgColor="white" fixed="top">
            <MDBContainer fluid>
                {/* Toggle button */}
                <MDBNavbarToggler
                    aria-controls="sidebarMenu"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <MDBIcon fas icon="bars" />
                </MDBNavbarToggler>

                {/* Brand */}
                <MDBNavbarBrand href="#">
                    <img
                        src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png"
                        height="25"
                        alt="MDB Logo"
                        loading="lazy"
                    />
                </MDBNavbarBrand>

                {/* Right side links */}
                <MDBNavbarNav className="ms-auto d-flex flex-row justify-content-end">
                    {/* Notification dropdown */}
                    <MDBNavbarItem>
                        <MDBDropdown>
                            <MDBDropdownToggle
                                tag="a"
                                className="nav-link me-3 me-lg-0 hidden-arrow"
                                role="button"
                            >
                                <MDBIcon fas icon="bell" />
                                <span className="badge rounded-pill badge-notification bg-danger">
                                    1
                                </span>
                            </MDBDropdownToggle>
                            <MDBDropdownMenu>
                                <MDBDropdownItem link>Some news</MDBDropdownItem>
                                <MDBDropdownItem link>Another news</MDBDropdownItem>
                                <MDBDropdownItem link>Something else</MDBDropdownItem>
                            </MDBDropdownMenu>
                        </MDBDropdown>
                    </MDBNavbarItem>

                    {/* Icons */}
                    <MDBNavbarItem>
                        <MDBNavbarLink href="#" className="me-3 me-lg-0">
                            <MDBIcon fas icon="fill-drip" />
                        </MDBNavbarLink>
                    </MDBNavbarItem>

                    <MDBNavbarItem>
                        <MDBNavbarLink href="#" className="me-3 me-lg-0">
                            <MDBIcon fab icon="github" />
                        </MDBNavbarLink>
                    </MDBNavbarItem>

                    {/* Language dropdown */}
                    <MDBNavbarItem>
                        <MDBDropdown>
                            <MDBDropdownToggle
                                tag="a"
                                className="nav-link me-3 me-lg-0 hidden-arrow"
                                role="button"
                            >
                                <i className="united kingdom flag m-0"></i>
                            </MDBDropdownToggle>
                            <MDBDropdownMenu>
                                <MDBDropdownItem link>
                                    <i className="united kingdom flag"></i> English
                                    <i className="fa fa-check text-success ms-2"></i>
                                </MDBDropdownItem>
                                <hr className="dropdown-divider" />
                                <MDBDropdownItem link>
                                    <i className="poland flag"></i> Polski
                                </MDBDropdownItem>
                                <MDBDropdownItem link>
                                    <i className="china flag"></i> 中文
                                </MDBDropdownItem>
                                <MDBDropdownItem link>
                                    <i className="japan flag"></i> 日本語
                                </MDBDropdownItem>
                                <MDBDropdownItem link>
                                    <i className="germany flag"></i> Deutsch
                                </MDBDropdownItem>
                                <MDBDropdownItem link>
                                    <i className="france flag"></i> Français
                                </MDBDropdownItem>
                                <MDBDropdownItem link>
                                    <i className="spain flag"></i> Español
                                </MDBDropdownItem>
                                <MDBDropdownItem link>
                                    <i className="russia flag"></i> Русский
                                </MDBDropdownItem>
                                <MDBDropdownItem link>
                                    <i className="portugal flag"></i> Português
                                </MDBDropdownItem>
                            </MDBDropdownMenu>
                        </MDBDropdown>
                    </MDBNavbarItem>

                    {/* Avatar dropdown */}
                    <MDBNavbarItem>
                        <MDBDropdown>
                            <MDBDropdownToggle
                                tag="a"
                                className="nav-link d-flex align-items-center hidden-arrow"
                                role="button"
                            >
                                <img
                                    src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg"
                                    className="rounded-circle"
                                    height="22"
                                    alt="Avatar"
                                    loading="lazy"
                                />
                            </MDBDropdownToggle>
                            <MDBDropdownMenu>
                                <MDBDropdownItem link>My profile</MDBDropdownItem>
                                <MDBDropdownItem link>Settings</MDBDropdownItem>
                                <MDBDropdownItem onClick={logout} link>Logout</MDBDropdownItem>
                            </MDBDropdownMenu>
                        </MDBDropdown>
                    </MDBNavbarItem>
                </MDBNavbarNav>
            </MDBContainer>
        </MDBNavbar>
    );
};

export default Navbar;
