//import axios
import axios from 'axios';

//import alert
import { showAlert } from './alert';


//exporting a js file is not like node just add export
export const recharge = async (code, secretKey, phoneNumber, Amount) => {
    try {
        const allowCors = 'https://cors-anywhere.herokuapp.com/'
        const walletUrl = `${allowCors}https://api.wallets.africa/bills/airtime/purchase`

        const result = await axios({
            method: 'POST',
            headers: {
                'Authorization': 'Bearer 9nxiyzc0ooin',
                'Content-Type': 'application/json'
            },
            url: walletUrl,
            data: {
                code,
                secretKey,
                phoneNumber,
                Amount
            }
        });

        console.log(result)
        if (result.data.ResponseCode === '100') {
            showAlert('success', result.data.Message);
        };
        if (result.data.ResponseCode === '400') {
            showAlert('success', result.data.Message);
        };
        if (result.data.ResponseCode === '401') {
            showAlert('success', result.data.Message);
            // window.setTimeout(() => {
            //     location.assign('/');
            // }, 1500)
        };
    } catch (err) {
        showAlert('error', err.response.data.Message);
    }

};