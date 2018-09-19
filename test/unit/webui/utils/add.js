import request from 'request';

export default function makeApiCall() {
    return new Promise((resolve, reject) => {
        request('http://www.google.com', function (error, response, body) {
            if (!error) {
                resolve(response);
            } else {
                reject(error);
            }
        });
    });
}