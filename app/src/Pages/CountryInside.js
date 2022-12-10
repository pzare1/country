import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import './CountryInside.css';
import axios from 'axios';

function CountryInside() {
    const [countryDetail, setcountryDetail] = useState([])
    let params = useParams();
    function getCountry() {
        axios.get(`https://restcountries.com/v3.1/name/${params.country}`)
            .then(response => response.data)
            .then((data) => {
                setcountryDetail(data);
            });
    }
    useEffect(() => {
        getCountry();
        setcountryDetail(params.country)
    }, [])
    console.log(countryDetail);
    return (
        <>
            <div className="container">
                <div className="row mt-4">
                    <div className="col-md-6 nameflag d-flex justify-content-center">
                        <div className="flagsign">
                            {countryDetail[0]?.car?.signs[0]}
                        </div>
                        <div className="namecountry d-flex flex-column">
                            <h3 className="text-secondary title-country">{countryDetail[0]?.name?.common}</h3>
                            <p className="text-secondary">{countryDetail[0]?.name?.official}</p>
                        </div>
                    </div>
                    <div className="col-md-6 description-in">
                        <MoreVertIcon className="d-none d-sm-block"/>
                    </div>
                </div>
                <div className="row sign">
                    <div className="col-md-6 m-auto">
                        <img className="d-flex justify-content-center m-auto" width="70%" height="70%" src={countryDetail[0]?.coatOfArms?.png} />
                    </div>
                </div>
                <div className="row country-detail">
                    <div className="col-md-6 m-auto">
                        <p className="text-justify text-des mt-2 mb-2">
                            The country belongs to <span class="text-mark mt-2 mb-2">{countryDetail[0]?.region}</span> region and <span class="text-mark mt-2 mb-2">{countryDetail[0]?.subregion}</span> sub-region.
                            Located at the {countryDetail[0]?.capitalInfo?.latlng[0]} °N and {countryDetail[0]?.capitalInfo?.latlng[1]} °W, this country has population of <span class="text-mark mt-2 mb-2">{countryDetail[0]?.population}</span>
                            and it has gained the independent,according to the CIA World Factbook.
                        </p>
                    </div>
                </div>
                <div className="row location-back">
                    <div className="col-md-6 m-auto">
                        <Link className="m-2" to={"/"}><ChevronLeftIcon color="primary" /></Link>
                        <a href={countryDetail[0]?.maps?.googleMaps}><LocationOnIcon color="primary" /></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CountryInside
