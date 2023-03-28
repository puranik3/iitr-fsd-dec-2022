import axios from 'axios';
import IWorkshop from '../models/IWorkshop';

// const baseUrl = 'https://workshops-server.herokuapp.com';
const baseUrl = 'http://localhost:3000';

const getWorkshops = async () => {
    const response = await axios.get( `${baseUrl}/workshops` );
    return response.data as IWorkshop[];
};

const postWorkshop = async ( workshop : Partial<IWorkshop> ) => {
    const response = await axios.post( `${baseUrl}/workshops`, workshop, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return response.data as IWorkshop;
};

const patchWorkshop = async ( workshopId : number, workshop : Partial<IWorkshop> ) => {
    const response = await axios.patch( `${baseUrl}/workshops/${workshopId}`, workshop, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return response.data as IWorkshop;
};

const deleteWorkshop = async ( workshopId : number ) => {
    await axios.delete( `${baseUrl}/workshops/${workshopId}` );
};

export {
    getWorkshops,
    postWorkshop,
    patchWorkshop,
    deleteWorkshop
};