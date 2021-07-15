import axios from 'axios';

export default axios.create({
  baseURL: 'https://parseapi.back4app.com/classes/Review/pGLq0d1eLK',
  headers: {
    'Content-type': 'application/json',
    'X-Parse-Application-Id': 'Q8sjscxVKld84xOEgxW7HmsvrP8iujMIoffPtyfW',
    'X-Parse-REST-API-Key': 'IeCVx5Ejr4Blm03sY8tmFLbDWsj7qADSwzobwXV6',
  },
});
