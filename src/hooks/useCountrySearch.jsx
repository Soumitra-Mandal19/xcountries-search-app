import { getCountries } from "../components/CountriesSearch/api";
import { useState, useEffect } from "react";

//Created a custom hook named as useCountrySearch which takes searchText as prop which maintains a state of all the countries and
//useCountrySearch returns filtered country based on prop- searchtext revieved from CountriesSerach component
//Inititally by default searchText is empty string as we are using it below in return statement along with to LowerCase() 
//If we don't assign any default value to searchText it will give error
export const useCountrySearch = (searchText = "") => {
    //Maintain a state for countries to store all the list of countries
    const [countries, setCountries] = useState([]);
    //Using hook useEffect to fetch the data(list of countries) once as we have empty dependency array and setting it using setter method to Countries state    
    useEffect(() => {

        const getData = async () => {
            try {
                const data = await getCountries();
                setCountries(data);
            } catch (error) {
                console.error(`Error fetching data: ${error.message}`)
            }
        }
        getData();
    }, [])




    // Returning the filteredCountries a new array of all the filtered country based on serachText recieved
    // Applied filter method directly on countries which is a maintained in a state and assigned them to alias filtereCountries
    return {
        filteredCountries: countries.filter((country) => country.name.common.toLowerCase().includes(searchText.toLowerCase()))
    }

}