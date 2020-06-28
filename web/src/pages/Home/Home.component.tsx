import React from 'react';
import { connect } from 'react-redux';

import {
  Wrapper,
  NavLink,
  NavTitle,
  NavImage,
  ImageWrapper
} from './Home.styles';

import { fetchProductsByType } from '../../modules/shop/shop.actions';
import { Type } from '../../modules/shop/shop.interfaces';

import laptopImg from '../../assets/laptop.jpg';
import phoneImg from '../../assets/hp.jpg';
import acImg from '../../assets/ac.jpg';
import tvImg from '../../assets/tv.jpg';
import vcImg from '../../assets/vc.jpg';
import wmImg from '../../assets/wm.jpg';

const categories = [
  {
    title: 'SmartPhone',
    src: phoneImg
  },
  {
    title: 'TV',
    src: tvImg
  },
  {
    title: 'Laptop',
    src: laptopImg
  },
  {
    title: 'AC',
    src: acImg
  },
  {
    title: 'VacuumCleaner',
    src: vcImg
  },
  {
    title: 'WashMachine',
    src: wmImg
  }
];

export interface HomeProps {
  fetchProductsByType: typeof fetchProductsByType;
}

export const _Home: React.FC<HomeProps> = ({ fetchProductsByType }) => {
  return (
    <Wrapper>
      {categories.map(({ title, src }) => (
        <NavLink
          onClick={() => fetchProductsByType(title.toLowerCase() as Type)}
          to="/shop"
          key={title}
        >
          <NavTitle>{title}</NavTitle>
          <ImageWrapper>
            <NavImage src={src} alt="" />
          </ImageWrapper>
        </NavLink>
      ))}
    </Wrapper>
  );
};

export const Home = connect(
  null,
  { fetchProductsByType }
)(_Home);
