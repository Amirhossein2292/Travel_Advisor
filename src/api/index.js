//index.js  //api directory

import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';




export const getPlacesData = async (sw, ne) => {
  try {
    const { data: {data} } = await axios.get(URL, {
  
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
        'X-RapidAPI-Key': '12362801cemshdeb7a57e6e4b32cp162d64jsnc405efffcf4b'
      }
    });

    return data;
  } catch (error) {
    console.log(error)
  }
}
