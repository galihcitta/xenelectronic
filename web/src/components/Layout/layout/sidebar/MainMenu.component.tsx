import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ListItem, DropBtn, NavLink } from '../Sidebar.styles';

import { SideDrawer } from '../../../SideDrawer/SideDrawer.component';

import { Store } from '../../../../modules/rootReducer';
import { selectIsAuth } from '../../../../modules/user/user.selectors';
import { checkSession } from '../../../../modules/user/user.actions';
import { selectCartItemsCount } from '../../../../modules/cart/cart.selectors';

interface MainMenuSelection {
  isAuth: boolean;
  cartItemsCount: number;
}

export interface MainMenuProps extends MainMenuSelection {
  showSidebar: boolean;
  handleCloseSidebar: () => void;
  openInterior: () => void;
  openExterior: () => void;
  checkSession: typeof checkSession;
}

export const _MainMenu: React.FC<MainMenuProps> = ({
  openInterior,
  openExterior,
  showSidebar,
  handleCloseSidebar,
  isAuth,
  cartItemsCount,
  checkSession
}) => {
  // const handleLogout = () => {
  //   localStorage.removeItem('jwtToken');
  //   checkSession();
  // };

  return (
    <SideDrawer
      toggled={showSidebar}
      handleClose={handleCloseSidebar}
      zIndex={10}
      title="Xen Electronic"
    >
      <ListItem>
        <NavLink onClick={handleCloseSidebar} to="/">
          Home
        </NavLink>
      </ListItem>
      <ListItem>
        <DropBtn onClick={openInterior}>
          Entertainment
          <i className="fas fa-angle-right"></i>
        </DropBtn>
      </ListItem>
      <ListItem>
        <DropBtn onClick={openExterior}>
          Productivity
          <i className="fas fa-angle-right"></i>
        </DropBtn>
      </ListItem>
    
      <ListItem>
        <NavLink onClick={handleCloseSidebar} to="/cart">
          Cart ({cartItemsCount})
        </NavLink>
      </ListItem>
    </SideDrawer>
  );
};

const mapStateToProps = createStructuredSelector<Store, MainMenuSelection>({
  isAuth: selectIsAuth,
  cartItemsCount: selectCartItemsCount
});

export const MainMenu = connect(
  mapStateToProps,
  { checkSession }
)(_MainMenu);
