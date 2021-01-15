import axios from "axios";
import { GET_TICKETS } from '../types/getTickets';

export const getTickets = data => {
    
  return {
    type: GET_TICKETS,
    payload: data
  }
}
  
export const getTicketsAsync = () => {
  
  return dispatch => {
  
    axios.get('tickets.json')
      .then(data => {
        dispatch(getTickets(data.data.tickets))
    }).catch(err => {
      throw err
    })
  }
}