/**
 * Created by AntonioGiordano on 07/10/16.
 */

import axios from 'axios'

const handleAJAXError = (err, cb) => {
  switch (err.status) {
    case 401:
      location.href = '/login'
      break
    default:
      alert(err.message)
      cb(err)
      break
  }
}

module.exports = {
  registration: (data, cb) => {
    axios.post('/registrate.json', data, {
      withCredentials: true
    }).then((response) => {
      cb(null, response.data)
    }).catch((err) => {
      cb(err)
    })
  },
  isLogged: (cb) => {
    axios.get('/isLogged.json', {
      withCredentials: true
    }).then((response) => {
      cb(null, response.data)
    }).catch((err) => {
      cb(err)
    })
  },
  login: (data, cb) => {
    axios.post('/login.json', data, {
      withCredentials: true
    }).then((response) => {
      cb(null, response.data)
    }).catch((err) => {
      cb(err)
    })
  },
  logout: (cb) => {
    axios.get('/logout.json', {
      withCredentials: true
    }).then((response) => {
      cb(null, response.data)
    }).catch((err) => {
      cb(err)
    })
  }
}
