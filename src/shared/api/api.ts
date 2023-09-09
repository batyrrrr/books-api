import axios from 'axios'

export const $api = axios.create({
  baseURL: `${import.meta.env.REACT_APP_BASE_URL}`,
  params: {
    key: `${import.meta.env.REACT_APP_GOOGLE_APY_KEY}`,
  }
})