import styled from 'styled-components';

export default function Header() {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo>LSH</Logo>
      </LogoContainer>
      <Nav>
        <NavItem>
          <NavLink href="/about">About me</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/skills">Skills</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/projects">Projects</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/contact">Contact</NavLink>
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

  @media (max-width: 1024px) {
    padding: 0px 20px;
  }

  @media (max-width: 425px) {
    padding: 0px 20px;
  }
`;

const LogoContainer = styled.div``;

const Logo = styled.div`
  font-size: 30px;
  font-weight: 700;

  @media (max-width: 425px) {
    font-size: 25px;
    margin-right: 30px;
  }
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

  @media (max-width: 768px) {
    margin-right: 30px;
  }

  @media (max-width: 425px) {
    margin-right: 25px;
    font-size: 15px;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #242424;
  font-weight: bold;

  &:hover {
    text-decoration: none;
  }
`;
