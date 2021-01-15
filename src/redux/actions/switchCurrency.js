import { CHANGE_CURRENCY } from '../types/currencyTypes';

export const switchCurrency = data => {
    
    return {
      type: CHANGE_CURRENCY,
      payload: data
    }
}