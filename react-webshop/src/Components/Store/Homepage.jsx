import React from 'react'
import FeaturedCard from '../../FeaturedCard'

export default function Homepage() {
    return (
        <div>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://www.etokki.com/image/cache/catalog/ss_omni_r8_kr-1140x380.jpg" class="d-block w-75 mx-auto" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="https://www.etokki.com/image/cache/catalog/ss_omni_r8_sa-1140x380.jpg" class="d-block w-75 mx-auto" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="https://www.etokki.com/image/cache/catalog/ss_taeyoung_fanta_hemi-1140x380.jpg" class="d-block w-75 mx-auto" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            <h1>Featured</h1>
            <div class="row d-flex justify-content-evenly">
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
