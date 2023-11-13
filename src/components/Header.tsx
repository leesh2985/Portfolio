import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Header() {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo>LSG</Logo>
      </LogoContainer>
      <Nav>
        <NavItem>
          <NavLink to="/about">About me</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/skills">Skills</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/projects">Projects</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/career">Career</NavLink>
        </NavItem>
      </Nav>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  padding: 5px 90px;
  backdrop-filter: blur(6px);
  box-shadow: none;
  position: fixed;
`;

const LogoContainer = styled.div``;

const Logo = styled.div`
  font-size: 30px;
  font-weight: 700;
`;

const Nav = styled.nav`
  display: flex;
  padding: 10px 0;
`;

const NavItem = styled.li`
  margin-right: 60px;

  &:last-child {
    margin-right: 0;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #242424;
  font-weight: bold;

  &:hover {
    text-decoration: none;
  }
`;
