import { Ref, forwardRef } from 'react';
import styled from 'styled-components';

interface HeaderProps {
  onButtonClick: (section: string) => void;
  activeSection: string;
}

const Header = forwardRef(({ onButtonClick, activeSection }: HeaderProps, ref: Ref<HTMLDivElement>) => {
  // const [activeSection, setActiveSection] = useState('about');

  const handleButtonClick = (section: string) => {
    onButtonClick(section);

    // setActiveSection(section);
  };

  return (
    <HeaderContainer ref={ref}>
      <LogoContainer>
        <Logo onClick={() => handleButtonClick('about')}>LSH</Logo>
      </LogoContainer>
      <Nav>
        {['about', 'projects', 'design', 'skills', 'contact'].map(section => (
          <NavItem key={section}>
            <NavBtn onClick={() => handleButtonClick(section)} className={activeSection === section ? 'active' : ''}>
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </NavBtn>
          </NavItem>
        ))}
      </Nav>
    </HeaderContainer>
  );
});

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
  z-index: 9999;

  @media (max-width: 1024px) {
    padding: 0px 20px;
  }

  @media (max-width: 425px) {
    justify-content: center;
  }
`;

const LogoContainer = styled.div``;

const Logo = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  font-size: 30px;
  font-weight: 700;

  @media (max-width: 425px) {
    display: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  padding: 10px 0;

  @media (max-width: 425px) {
  }
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

const NavBtn = styled.button`
  text-decoration: none;
  color: #242424;
  font-size: 16px;
  border: none;
  background: none;
  cursor: pointer;
  position: relative;

  &:hover,
  &.active {
    color: #fdd835;
    font-weight: bold;
  }

  &::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background-color: #fdd835;
    position: absolute;
    bottom: -3px;
    left: 0;
    transition: width 0.3s ease;
  }

  &.active::after {
    width: 100%;
  }
`;

export default Header;
