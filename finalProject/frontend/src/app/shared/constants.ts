const BASE_URL = 'http://localhost:5000';

export const PRODUCTS_URL = BASE_URL + '/api/products';
export const PRODUCTS_CATEGORIES_URL = PRODUCTS_URL + '/categories'
export const PRODUCTS_BY_SEARCH_URL = PRODUCTS_URL + '/search/';
export const PRODUCTS_BY_CATEGORY_URL = PRODUCTS_URL + '/category/';
export const PRODUCTS_BY_ID_URL = PRODUCTS_URL + '/';

export const USER_LOGIN_URL = BASE_URL + '/api/users/login';

// CRUD
export const CREATE_PRODUCTS = PRODUCTS_URL + '/create';

