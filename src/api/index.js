import axios from 'axios';

export const fetchData = async () => {
  try{
    const { data } = await axios({
        "method":"GET",
        "url":"https://covid19india.p.rapidapi.com/getStateData/TN",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"corona-virus-world-and-india-data.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_API_SECRET,
        "useQueryString":true
      }
    });

    return data;

  } catch(error){ 
    console.log(error);
  }
};