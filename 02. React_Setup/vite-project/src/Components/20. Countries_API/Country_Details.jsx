import React, {useEffect, useState} from 'react';
import "./Country_Details.css";
import { useParams } from 'react-router-dom';

const Country_Details = () => {
  const params = useParams();
  const countryName = params.country
  const [countryData, setCountryData] = useState({});
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
    .then(res => res.json())
    .then(([data]) => {
      console.log(data);
      setCountryData({
        name: data.name.common,
        nativeName: Object.values(data.name.nativeName)[0].common,
        population: data.population.toLocaleString(),
        region: data.region,
        subRegion: data.subregion,
        capital: data.capital?.[0] || "N/A",
        topLevelDomain: data.tld?.[0] || "N/A",
        currencies: Object.values(data.currencies).map(c => c.name).join(", "),
        languages: Object.values(data.languages).join(", "),
        borderCountries: data.borders || [],
        flag: data.flags.svg,
      })
    }).catch(error => setNotFound(true))
  }, [])

  if(notFound){
    return <div>Country Not Found..</div>
  }

  return countryData === null ? ( "Loading..." ) : (
    <main>
    <div className="country-details-container">
      <span className="back-button" onClick={() => history.back()}>
        <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
      </span>
      <div className="country-details">
        <img src={countryData.flag} alt="" />
        <div className="details-text-container">
          <h1>{countryData.name || "Loading..."}</h1>
          <div className="details-text">
            <p><b>Native Name: </b><span className="native-name">{countryData.nativeName}</span></p>
            <p><b>Population: </b><span className="population">{countryData.population}</span></p>
            <p><b>Region: </b><span className="region">{countryData.region}</span></p>
            <p><b>Sub Region: </b><span className="sub-region">{countryData.subRegion}</span></p>
            <p><b>Capital: </b><span className="capital">{countryData.capital}</span></p>
            <p>
              <b>Top Level Domain: </b><span className="top-level-domain">{countryData.topLevelDomain}</span>
            </p>
            <p><b>Currencies: </b><span className="currencies">{countryData.currencies}</span></p>
            <p><b>Languages: </b><span className="languages">{countryData.languages}</span></p>
          </div>
          <div className="border-countries"><b>Border Countries: </b>&nbsp;</div>
        </div>
      </div>
    </div>
  </main>
  )
}

export default Country_Details