import axios from 'axios';
import { Alert } from 'react-native';
import Constants from '../constants';

const get = async (
  route: string,
  filter?: string
  ): Promise<any> => {
  try {
    let response: any;
    let headers = {};

    let stringRequest: string = `${Constants.BASE_URL}${route}`;

    if (filter) {
      stringRequest = stringRequest + '/' + filter;
    }

    response = await axios.get(
      stringRequest,
      { headers }
    );
    return response.data;

  } catch (e) {
    // Erros podem ser do Axios ou outros. Caso sejam erros http 4xx (401, 402, etc)
    // é gerado um ClientError. Caso sejam erros http 5xx (500, 501, etc) é lançado
    // um erro ServerError. Caso sejam outros tipos de erros http ou erros de outra natureza,
    // o erro é relançado para a função que chamou.
    if (axios.isAxiosError(e)) {
      const statusCode = e.response?.status;

      if (statusCode?.toString().startsWith('4'))
        console.error('Verifique os dados e tente novamente.');

      if (statusCode?.toString().startsWith('5'))
      console.error('Servidor indisponível.');
    }
  }
};

const getQuery = async (
  route: string,
  filters?: {
    name: string;
    value: string;
  }[],
  ): Promise<any> => {
  try {
    let response: any;
    let headers = {};

    let stringRequest: string = `${Constants.BASE_URL}${route}`;

    if (filters) {
      stringRequest = stringRequest + '?';
      filters.map((item, index) => {
        stringRequest = stringRequest + `${item.name}=${item.value}${!((filters.length - 1) == index) ? '&' : ''}`;
      })
    }
    
    response = await axios.get(
      stringRequest,
      { headers }
    );
    return response.data;

  } catch (e) {
    // Erros podem ser do Axios ou outros. Caso sejam erros http 4xx (401, 402, etc)
    // é gerado um ClientError. Caso sejam erros http 5xx (500, 501, etc) é lançado
    // um erro ServerError. Caso sejam outros tipos de erros http ou erros de outra natureza,
    // o erro é relançado para a função que chamou.
    if (axios.isAxiosError(e)) {
      const statusCode = e.response?.status;

      if (statusCode?.toString().startsWith('4'))
      console.error('Verifique os dados e tente novamente.');

      if (statusCode?.toString().startsWith('5'))
      console.error('Servidor indisponível.');
    }
  }
};

export default {
  get,
  getQuery
};
