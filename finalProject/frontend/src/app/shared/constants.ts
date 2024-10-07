const BASE_URL = 'http://localhost:5000';

export const PRODUCTS_URL = BASE_URL + '/api/products';
export const PRODUCTS_CATEGORIES_URL = PRODUCTS_URL + '/categories'
export const PRODUCTS_BY_SEARCH_URL = PRODUCTS_URL + '/search/';
export const PRODUCTS_BY_CATEGORY_URL = PRODUCTS_URL + '/category/';
export const PRODUCTS_BY_ID_URL = PRODUCTS_URL + '/';

export const USER_LOGIN_URL = BASE_URL + '/api/users/login';
export const USER_REGISTER_URL = BASE_URL + '/api/users/register';

// CRUD URLs
export const CREATE_PRODUCTS = PRODUCTS_URL + '/create';
export const DELETE_PRODUCTS = PRODUCTS_URL + '/delete';
export const EDIT_PRODUCTS = PRODUCTS_URL + '/update';

export const ORDERS_URL = BASE_URL + '/api/orders';
export const ORDER_CREATE_URL = ORDERS_URL + '/create';
export const NEW_ORDER_URL = ORDERS_URL + '/newOrder';
export const ORDER_PAY_URL = ORDERS_URL + '/pay';

