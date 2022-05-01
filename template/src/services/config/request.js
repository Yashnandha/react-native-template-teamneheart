import axios from 'axios';
import { Alert } from 'react-native';
import screenname from '../../utils/screenname';
import { navigateAndSimpleReset } from '../sagaservice/NavigationService';
import constant from './constant';

axios.defaults.baseURL = constant.BASE_URL;

let session = true;
const ErrorHandler = error => {
  if (error.message == 'Network Error') {
    Alert.alert('No Internet', 'Check Your Internet Connection .');
  } else if (error.message == 'Request failed with status code 401') {
    navigateAndSimpleReset(screenname.SESSION, 0);
  } else if (error.message == 'Request failed with status code 500') {
    Alert.alert(error.message);
  } else if (error.message == 'timeout of 0ms exceeded') {
    Alert.alert('Bad Internet', 'Bad Internet Connection .');
  } else {
    Alert.alert(error.message);
  }
};

const get = slug => {
  return new Promise((resolve, reject) => {
    axios
      .get(slug)
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err);
        ErrorHandler(err);
      });
  });
};

const getWithParams = (slug, data, token) => {
  // console.log('token', token);
  return new Promise((resolve, reject) => {
    axios
      .get(slug + data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err);
        ErrorHandler(err);
      });
  });
};

const doPostWithAuth = (slug, data, token = null) => {
  return new Promise((resolve, reject) => {
    axios
      .post(slug, data, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Bearer ${token}`,
        },
      })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
        ErrorHandler(err);
      });
  });
};

const doPost = (slug, data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(slug, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
        ErrorHandler(err);
      });
  });
};

const doPut = (slug, data, token) => {
  return new Promise((resolve, reject) => {
    axios
      .put(slug, data, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Bearer ${token}`,
        },
      })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        ErrorHandler(err);
        reject(err);
      });
  });
};

const doDelete = (slug, token) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(slug, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        ErrorHandler(err);
        reject(err);
      });
  });
};

export { get, getWithParams, doPostWithAuth, doPost, doPut, doDelete };
