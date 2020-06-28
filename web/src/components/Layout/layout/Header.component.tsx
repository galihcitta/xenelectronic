import React from 'react';

import { HeaderLinks } from './header/HeaderLinks.component';

import {
  HeaderWrapper,
  HeaderLimiter,
  Logo,
  LogoTitle,
  Nav,
  Hamburger,
  SearchBtn
} from './Header.styles';

export interface HeaderProps {
  handleOpen: () => void;
  toggleSearchForm: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  handleOpen,
  toggleSearchForm
}) => {
  return (
    <HeaderWrapper>
      <HeaderLimiter>
        <Logo to="/">
          <LogoTitle>Xen Electronic</LogoTitle>
        </Logo>
        <Nav>
          <Hamburger aria-label="open menu" title="Menu" onClick={handleOpen}>
            <i className="fas fa-bars"></i>
          </Hamburger>
          <HeaderLinks />
          <SearchBtn
            aria-label="submit searching"
            title="Search"
            onClick={toggleSearchForm}
          >
            <i className="fas fa-search"></i>
          </SearchBtn>
        </Nav>
      </HeaderLimiter>
    </HeaderWrapper>
  );
};
