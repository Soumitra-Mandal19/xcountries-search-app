const Api_Url = "https://restcountries.com/v3.1/all";

export const getCountries = async()=>{
 const response = await fetch(Api_Url);
 const data = await response.json();
 return data;
}

