import React, { useEffect } from "react";
import StyledNavLink from "../StyledNavLink";
import NavBarDropdown from "./NavBar/NavBarDropdown";
import NavBarLinkList from "./NavBar/NavBarLinkList";
import NavBarLogo from "./NavBar/NavBarLogo";
import NavBarWrapper from "./NavBar/NavBarWrapper";

const NavBar = () => {
    const isLoggedIn = false;

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((json) => console.log(json));
    }, []);

    return (
        <NavBarWrapper>
            <NavBarLogo
                link="/"
                src="/assets/img/rr-logo.svg"
                label="React Router v5"
            />
            <NavBarLinkList>
                {isLoggedIn ? (
                    <>
                        <StyledNavLink to="/">Something</StyledNavLink>
                        <StyledNavLink to="/posts" end>
                            Posts
                        </StyledNavLink>
                        <NavBarDropdown />
                    </>
                ) : (
                    <StyledNavLink to="/auth/login" styleType="button">
                        SignUp
                    </StyledNavLink>
                )}
            </NavBarLinkList>
        </NavBarWrapper>
    );
};

export default NavBar;
