//index.js  //api directory

import axios from "axios";

export const getPlacesData = async (type, sw, ne) => {
  try {
    const { data: {data} } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
  
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
        'X-RapidAPI-Key': '8c6d8dfb63mshab9e42854288e28p17a8e2jsnad588d9bd611'
      }
    });

    return data;
  } catch (error) {
    console.log(error)
  }
}
