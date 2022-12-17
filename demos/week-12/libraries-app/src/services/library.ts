import axios from 'axios';
import ILibrary from '../models/ILibrary';

const baseUrl = process.env.REACT_APP_BASE_URL;

const getLibraries = async () => {
    const response = await axios.get( `${baseUrl}/libraries` );
    return response.data as ILibrary[];
};

const getLibraryById = async ( id : string | number ) => {
    const response = await axios.get( `${baseUrl}/libraries/${id}` );
    return response.data as ILibrary;
};

export {
    getLibraries,
    getLibraryById
};