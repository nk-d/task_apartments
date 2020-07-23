import { URL_APARTMENTS } from '../constants';

const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
    });

    // Use headers.append() for append header

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
        .then(response =>
            response.json().then(json => {
                if(!json.response.length || !json.response) {
                    return Promise.reject([json, response.status]);
                }
                return json.response;
            })
        ).catch(error =>
            console.log('Some error: ' + error)
        );
};

export default request;

// Get all apartments with relationships
export function getApartments() {
    return request({
        url: URL_APARTMENTS,
        method: 'GET'
    });
}