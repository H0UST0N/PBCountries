/**
 * @namespace Continent
 */

import GenericDAO from "../GenericDAO";
import { IGetCountry } from "../All";

 const route = 'continent';
 
 const get = async (filter?: string): Promise<IGetCountry[]> => GenericDAO.get(route, filter);
 
 export default {
   get
 };
 