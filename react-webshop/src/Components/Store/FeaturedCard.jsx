import React from 'react'

export default function FeaturedCard() {


    return (
        <div className="card border-primary mb-3 me-3 col-3">
                    <h2 className="card-header">Etokki</h2>
                    <div className="card-body">
                        <h5 className="card-title">Omni Arcade Stick</h5>
                        <h6 className="card-subtitle text-muted">White Gold Edition</h6>
                    </div>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" className="d-block user-select-none" width="100%" height="200" aria-label="Placeholder: Image cap" focusable="false" role="img" preserveAspectRatio="xMidYMid slice" viewBox="0 0 318 180">
                        <rect width="100%" height="100%" fill="#868e96"></rect>
                        <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text>
                    </svg> */}
                    <img src="https://www.etokki.com/image/cache/catalog/omni_whitegold_front-500x500.jpg" alt="" />
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item text-center">$359.95</li>
                        {/* <li className="list-group-item">Dapibus ac facilisis in</li> */}
                        {/* <li className="list-group-item">Vestibulum at eros</li> */}
                    </ul>
                    <div className="card-body d-flex justify-content-evenly">
                    <button type="button" className="btn btn-primary">Wishlist</button>
                    <button type="button" className="btn btn-success">Buy Now</button>
                        {/* <a href="#" className="card-link">Card link</a> */}
                        {/* <a href="#" className="card-link">Another link</a> */}
                    </div>
                    <div className="card-footer text-muted">
                        {/* 2 days ago */}
                    </div>
                </div>
    )
}
