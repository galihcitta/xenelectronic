import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  NavList,
  NavItem,
  PageLink,
  NavDropdown,
  DropList,
  DropListItem,
  FilterShopLink
} from './HeaderLinks.styles';

import { Store } from '../../../../modules/rootReducer';
import { Type } from '../../../../modules/shop/shop.interfaces';
import { selectIsAuth } from '../../../../modules/user/user.selectors';
import { checkSession } from '../../../../modules/user/user.actions';
import { fetchProductsByType } from '../../../../modules/shop/shop.actions';
import { selectCartItemsCount } from '../../../../modules/cart/cart.selectors';

const shopLinks = [
  'SmartPhone',
  'TV',
  'Laptop',
  'AC',
  'VacuumCleaner',
  'WashMachine'
];

interface HeaderLinksSelection {
  isAuth: boolean;
  cartItemsCount: number;
}

export interface HeaderLinksProps extends HeaderLinksSelection {
  checkSession: typeof checkSession;
  fetchProductsByType: typeof fetchProductsByType;
}

export const _HeaderLinks: React.FC<HeaderLinksProps> = ({
  isAuth,
  cartItemsCount,
  checkSession,
  fetchProductsByType
}) => {
  // const handleLogout = () => {
  //   localStorage.removeItem('jwtToken');
  //   checkSession();
  // };

  return (
    <NavList>
      <NavItem>
        <PageLink onClick={() => fetchProductsByType('all')} to="/shop">
          Products
          <i className="fas fa-caret-down"></i>
        </PageLink>
        <NavDropdown>
          <DropList>
            {shopLinks.map(linkName => (
              <DropListItem key={linkName}>
                <FilterShopLink
                  onClick={() =>
                    fetchProductsByType(linkName.toLocaleLowerCase() as Type)
                  }
                  to="/shop"
                >
                  {linkName}
                </FilterShopLink>
              </DropListItem>
            ))}
          </DropList>
        </NavDropdown>
      </NavItem>
      <NavItem>
        <PageLink to="/cart">Cart ({cartItemsCount})</PageLink>
      </NavItem>
    </NavList>
  );
};

const mapStateToProps = createStructuredSelector<Store, HeaderLinksSelection>({
  isAuth: selectIsAuth,
  cartItemsCount: selectCartItemsCount
});

export const HeaderLinks = connect(
  mapStateToProps,
  { checkSession, fetchProductsByType }
)(_HeaderLinks);
