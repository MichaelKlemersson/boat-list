import React from 'react';

const BoatListItem = (props) => {
    const boat = props.boat;
    const boatImageStyle = {
        backgroundImage: `url(${boat.imageUrl})`
    };

    return (
        <div className="col-sm-6 col-xs-12">
            <div className="card mb-3">
                <div className="row no-gutters">
                    <div className="col-md-5">
                        <span className="boat card-img-top" style={boatImageStyle}></span>
                    </div>

                    <div className="col-md-7">
                        <div className="card-body">
                            <h3 className="card-title">{boat.name} {boat.year}</h3>
                            <div className="card-text mb-3">
                                <p>Reviews: <span className="badge badge-primary">{boat.reviews.total}</span></p>
                            </div>
                            <div className="card-text">
                                <ul className="boat-details">
                                    <li><strong>{boat.locality} > {boat.country}</strong></li>
                                    <li className="text-info">Size: {boat.length}</li>
                                    <li className="text-info">Cabins: {boat.cabins}</li>
                                    <li className="text-info">Guests: {boat.guests}</li>
                                </ul>
                            </div>
                        </div>
                        <div className="card-footer text-right">
                            <strong className="boat-price">{boat.price} EUR</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BoatListItem;
