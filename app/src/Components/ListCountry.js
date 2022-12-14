import React from 'react'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import '../Components/ListCountry.css';
import { Link } from 'react-router-dom';

function ListCountry({ allData }) {
    //list of the countries with map method
    return (
        <>
            <div className="container-fluid">
                <div className="row title">
                    <div className="col-md-2 text-center text-secondary">
                        <p>Flag</p>
                    </div>
                    <div className="col-md-2 text-center text-secondary">
                        <p>Name</p>
                    </div>
                    <div className="col-md-2 text-center text-secondary">
                        <p>Region</p>
                    </div>
                    <div className="col-md-2 text-center text-secondary">
                        <p>Population</p>
                    </div>
                    <div className="col-md-2 text-center text-secondary">
                        <p>Languages</p>
                    </div>
                    <div className="col-md-2 text-center text-secondary">
                        <p>Link</p>
                    </div>
                </div>
                {allData.map((country,index) => (
                    <div key={index} className="row detail">
                        <div className="flag col-md-2 text-center">
                            {country.flag}
                        </div>
                        <div className="name col-md-2 text-center">
                            {country.name.common}
                        </div>
                        <div className="region col-md-2 text-center">
                            {country.region}
                        </div>
                        <div className="population col-md-2 text-center">
                            {country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </div>
                        <div className="population col-md-2 text-center">
                            {
                                allData.map((item) => (
                                    item.languages && Object.keys(item.languages).map((key, index) => (
                                        <ul key={index}>
                                            <li className="language-list">
                                                {item.languages[key]}
                                            </li>
                                        </ul>
                                    ))))
                            }
                        </div>
                        <div className="arrowkey col-md-2 text-center">
                            <Link to={"/" + country.name.common}><KeyboardArrowRightIcon></KeyboardArrowRightIcon></Link>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ListCountry
