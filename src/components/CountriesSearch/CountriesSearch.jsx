import { useState } from "react";
import styles from "./CountriesSearch.module.css";
import { useCountrySearch } from "../../hooks/useCountrySearch";

//Created a component CountriesSearch whose job is to maintain state for the searchtext which user has typed in the input bar
// And return the list of map to be displayed on UI.

export const CountriesSearch = () => {
    //Maintained state for the text user typed in input bar.
    const [searchText, setSearchText] = useState("");
    //Using the custom hook useCountrysearch to fetch the filteredCountries and also sending the searchText - state to the custom hook.
    const { filteredCountries } = useCountrySearch(searchText);

    //Created a method to handle the input of the user and setting it to the state - using setter method of the state,
    //It ensures to keep the value typed in the state named as searchText
    const handleSearchText = (e) => {
        const query = e.target.value;
        setSearchText(query);
    }

    //Below we have returned the filteredCountries using map function to display each country's flaf img as well as name. 
    return (
        <div>
            <div className={styles.inputContainer}>
                <input type="text" className={styles.input} placeholder="Search for countries" value={searchText} onChange={handleSearchText} />
            </div>
            <div className={styles.mainContainer}>
                {filteredCountries.map((country) => {
                    return (<div key={country.name.common} className={styles.countryCard}>
                        <div> <img className={styles.flagImg} src={country.flags.png} alt={country.name.common} /></div>
                        <div>{country.name.common}</div>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}