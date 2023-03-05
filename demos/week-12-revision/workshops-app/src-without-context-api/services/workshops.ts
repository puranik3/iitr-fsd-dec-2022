import axios from 'axios';
import IWorkshop from '../models/IWorkshop';

const getWorkshops = async () => {
    const response = await axios.get( `https://workshops-server.herokuapp.com/workshops` );
    return response.data as IWorkshop[];
};

const postWorkshop = async ( workshop : Partial<IWorkshop> ) => {
    const response = await axios.post( `https://workshops-server.herokuapp.com/workshops`, workshop, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return response.data as IWorkshop;
};

const deleteWorkshop = async ( workshopId : number ) => {
    await axios.delete( `https://workshops-server.herokuapp.com/workshops/${workshopId}` );
};

export {
    getWorkshops,
    postWorkshop,
    deleteWorkshop
};