import axios from 'axios';
import IWorkshop from '../models/IWorkshop';

const getWorkshops = async () => {
    const response = await axios.get( `https://workshops-server.herokuapp.com/workshops` );
    return response.data as IWorkshop[];
};

export {
    getWorkshops
};