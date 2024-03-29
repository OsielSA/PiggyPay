const BASE_URL = 'http://192.168.0.11:8080/piggy-pay/api';
// const BASE_URL = 'http://192.168.1.186:8080/piggy-pay/api';
// const BASE_URL = 'http://192.168.0.36:8080/piggy-pay/api';

const API_URLS = {
    DEBIT_ACOUNTS: `${BASE_URL}/debit_account/byUser/1`,
    GET_DEBIT_ACCOUNT: `${BASE_URL}/debit_account/byID/{idAccount}`,
    SAVE_DEBIT_ACCOUNT: `${BASE_URL}/debit_account/save`,
    UPDATE_DEBIT_ACOUNT: `${BASE_URL}/debit_account/update/{idAccount}`,
    DELETE_DEBIT_ACOUNT: `${BASE_URL}/debit_account/delete/{idAccount}`,
    GET_MOVEMENTS: `${BASE_URL}/debit_account/movement/{idAccount}`,
    SAVE_MOVEMENT: `${BASE_URL}/debit_account/movement/save`,
};

export { API_URLS };