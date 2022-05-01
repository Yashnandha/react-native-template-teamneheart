/**
 * Services Files
 * Params
 * Request files
 * API end point
 */

import params from '../services/config/params';
import constant from '../services/config/constant';
import { get, doDelete, doPost, doPostWithAuth, doPut, getWithParams } from '../services/config/request';


export default {
     params: params,
     constant: constant,
     method: {
          get: get,
          doPost: doPost,
          doDelete: doDelete,
          doPostWithAuth: doPostWithAuth,
          doPut: doPut,
          getWithParams: getWithParams
     }
};