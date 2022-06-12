/**
 * @namespace Alpha
 */

import { IGetCountry } from "../All";
import GenericDAO from "../GenericDAO";

 const route = 'alpha';

 
 const get = async (filters?: { name: string; value: string; }[]): Promise<IGetCountry[]> => GenericDAO.getQuery(route,filters);
 
 export default {
   get
 };
 