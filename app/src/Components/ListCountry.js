import React from 'react'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import '../Components/ListCountry.css'
function ListCountry({alldata}) {
    
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
                {alldata.map((country) =>(
                    <div className="row detail">
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
                        {/* <div className="languages col-md-2 text-center">
                     
                        </div> */}
                        <div className="arrowkey col-md-2 text-center">
                           <KeyboardArrowRightIcon></KeyboardArrowRightIcon>
                        </div>
                       
                    </div>
                ))}
          </div>  
        </>
    )
}

export default ListCountry
