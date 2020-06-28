import { ShopActionTypes } from './shop.types';

/* ===== Common Shop Action Types ===== */

export type Type =
  | 'all'
  | 'smartphone'
  | 'tv'
  | 'laptop'
  | 'ac'
  | 'vacuumcleaner'
  | 'washmachine';

export interface Product {
  id: string;
  name: string;
  collection: string;
  type: Type;
  price: string;
  color: string;
  character: string;
  description: string;
  images: string[];
  quantity?: number;
}

export interface FilterItem {
  description: string;
  amountOfProducts: number;
}

export interface FiltersMap {
  [key: string]: FilterItem;
}

export interface FilterCriteria {
  color: string;
  character: string;
  price: number;
}

/* ===== Action Interfaces ===== */

export interface FetchProductsByTypeAction {
  type: ShopActionTypes.FETCH_PRODUCTS_BY_TYPE;
  payload: string;
}

export interface FetchProductsByQueryAction {
  type: ShopActionTypes.FETCH_PRODUCTS_BY_QUERY;
  payload: string;
}

export interface FetchProductsSuccessAction {
  type: ShopActionTypes.FETCH_PRODUCTS_SUCCESS;
  payload: Product[];
}

export interface FetchProductsFailureAction {
  type: ShopActionTypes.FETCH_PRODUCTS_FAILURE;
  payload: string;
}

export interface FilterProductsAction {
  type: ShopActionTypes.FILTER_PRODUCTS;
  payload: FilterCriteria;
}

export interface IncreaseLimitAction {
  type: ShopActionTypes.INCREASE_LIMIT;
}

export interface SetQueryAction {
  type: ShopActionTypes.SET_QUERY;
  payload: string;
}

export interface ClearQueryAction {
  type: ShopActionTypes.CLEAR_QUERY;
}

export type ShopActions =
  | FetchProductsByTypeAction
  | FetchProductsByQueryAction
  | FetchProductsSuccessAction
  | FetchProductsFailureAction
  | FilterProductsAction
  | IncreaseLimitAction
  | SetQueryAction
  | ClearQueryAction;
