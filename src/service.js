import axios from 'axios';


export const getCountries = async () => {
    return await axios.get('https://restcountries.eu/rest/v2/all?fields=name;flag;callingCodes;alpha2Code').then(res => res.data);
}