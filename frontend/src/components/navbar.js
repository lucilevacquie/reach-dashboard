import React from "react"
import tw from "tailwind-styled-components";
import {Link} from "react-router-dom";

const Container = tw.div`
    flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10
`;

const NavWrapper = tw.div`
    hidden md:flex-1 md:flex md:items-center md:justify-between
`;

const Nav = tw.nav`
    flex space-x-10
`;

const LinkWrapper = tw.div`
    text-base font-medium text-gray-500 hover:text-gray-900
`;

export default function Navbar() {
    return(
        <Container>
            <NavWrapper>
                <Nav>
                    <LinkWrapper>
                        <Link to="/">Dashboard</Link>
                    </LinkWrapper>
                    <LinkWrapper>
                        <Link to="/register">Register</Link>
                    </LinkWrapper>
                    <LinkWrapper>
                        <Link to="/login">Login</Link>
                    </LinkWrapper>
                </Nav>
            </NavWrapper>
        </Container>
    )
}

