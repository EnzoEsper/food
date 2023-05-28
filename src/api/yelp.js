import axios from 'axios';
import Constants from 'expo-constants';

const API_KEY = Constants.manifest.extra.API_KEY;

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: `Bearer ${API_KEY}`
  }
});