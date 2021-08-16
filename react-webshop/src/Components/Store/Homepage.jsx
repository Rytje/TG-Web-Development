import React from 'react'
import FeaturedCard from './FeaturedCard'

export default function Homepage() {
    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide mb-5" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://www.etokki.com/image/cache/catalog/ss_omni_r8_kr-1140x380.jpg" className="d-block w-75 mx-auto" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.etokki.com/image/cache/catalog/ss_omni_r8_sa-1140x380.jpg" className="d-block w-75 mx-auto" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.etokki.com/image/cache/catalog/ss_taeyoung_fanta_hemi-1140x380.jpg" className="d-block w-75 mx-auto" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <h1 className="ms-5 mb-3">Featured</h1>
            <div className="row d-flex justify-content-evenly">
                <FeaturedCard />
                <FeaturedCard />
                <FeaturedCard />
                <FeaturedCard />
                <FeaturedCard />
                <FeaturedCard />
            </div>
        </div>
    )
}
