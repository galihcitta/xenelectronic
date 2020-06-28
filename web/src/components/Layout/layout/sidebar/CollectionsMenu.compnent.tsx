import React from 'react';
import { connect } from 'react-redux';

import { ListItem, FilterShopLink } from '../Sidebar.styles';

import { SideDrawer } from '../../../SideDrawer/SideDrawer.component';
import { fetchProductsByType } from '../../../../modules/shop/shop.actions';

import { Type } from '../../../../modules/shop/shop.interfaces';

const interiorLinks = ['SmartPhone', 'TV', 'Laptop'];
const exteriorLinks = ['AC', 'VacuumCleaner','WashMachine'];

export interface CollectionsMenuProps {
  showInterior: boolean;
  showExterior: boolean;
  closeInterior: () => void;
  closeExterior: () => void;
  handleCloseMenu: () => void;
  fetchProductsByType: typeof fetchProductsByType;
}

export const _CollectionsMenu: React.FC<CollectionsMenuProps> = ({
  showInterior,
  showExterior,
  closeInterior,
  closeExterior,
  handleCloseMenu,
  fetchProductsByType
}) => {
  const onLinkClick = (type: Type) => {
    fetchProductsByType(type);
    handleCloseMenu();
  };

  return (
    <>
      <SideDrawer
        toggled={showInterior}
        handleClose={closeInterior}
        zIndex={11}
        title="Entertainment"
      >
        {interiorLinks.map(linkName => (
          <ListItem key={linkName}>
            <FilterShopLink
              onClick={() => onLinkClick(linkName.toLocaleLowerCase() as Type)}
              to="/shop"
            >
              {linkName}
            </FilterShopLink>
          </ListItem>
        ))}
      </SideDrawer>
      <SideDrawer
        toggled={showExterior}
        handleClose={closeExterior}
        zIndex={11}
        title="Productivity"
      >
        {exteriorLinks.map(linkName => (
          <ListItem key={linkName}>
            <FilterShopLink
              onClick={() => onLinkClick(linkName.toLocaleLowerCase() as Type)}
              to="/shop"
            >
              {linkName}
            </FilterShopLink>
          </ListItem>
        ))}
      </SideDrawer>
    </>
  );
};

export const CollectionsMenu = connect(
  null,
  { fetchProductsByType }
)(_CollectionsMenu);
