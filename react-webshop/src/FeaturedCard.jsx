import React from 'react'

export default function FeaturedCard() {


    return (
        <div class="card border-primary mb-3 me-3 col-3">
                    <h2 class="card-header">Etokki</h2>
                    <div class="card-body">
                        <h5 class="card-title">Omni Arcade Stick</h5>
                        <h6 class="card-subtitle text-muted">White Gold Edition</h6>
                    </div>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" class="d-block user-select-none" width="100%" height="200" aria-label="Placeholder: Image cap" focusable="false" role="img" preserveAspectRatio="xMidYMid slice" viewBox="0 0 318 180">
                        <rect width="100%" height="100%" fill="#868e96"></rect>
                        <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text>
                    </svg> */}
                    <img src="https://www.etokki.com/image/cache/catalog/omni_whitegold_front-500x500.jpg" alt="" />
                    <div class="card-body">
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item text-center">$359.95</li>
                        {/* <li class="list-group-item">Dapibus ac facilisis in</li> */}
                        {/* <li class="list-group-item">Vestibulum at eros</li> */}
                    </ul>
                    <div class="card-body d-flex justify-content-evenly">
                    <button type="button" class="btn btn-primary">Wishlist</button>
                    <button type="button" class="btn btn-success">Buy Now</button>
                        {/* <a href="#" class="card-link">Card link</a> */}
                        {/* <a href="#" class="card-link">Another link</a> */}
                    </div>
                    <div class="card-footer text-muted">
                        {/* 2 days ago */}
                    </div>
                </div>
    )
}
