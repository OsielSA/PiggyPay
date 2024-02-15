// const BASE_URL = 'http://192.168.0.11:8080/piggy-pay/api';
const BASE_URL = 'http://192.168.0.36:8080/piggy-pay/api';

const API_URLS = {
    DEBIT_ACOUNTS: `${BASE_URL}/debit_account/byUser/1`,
    SAVE_DEBIT_ACOUNT: `${BASE_URL}/debit_account/save`,
    UPDATE_DEBIT_ACOUNT: `${BASE_URL}/debit_account/update/{idAccount}`,
    DELETE_DEBIT_ACOUNT: `${BASE_URL}/debit_account/delete/{idAccount}`
};

export { API_URLS };