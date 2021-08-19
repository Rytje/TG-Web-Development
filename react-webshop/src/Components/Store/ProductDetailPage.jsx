import React from 'react'

export default function ProductDetailPage({ brand, model, edition, description, price }) {
    return (
        <div>
            <div className="row">
                <h1 className="mb-5">Product detail page</h1>
                <div className="row d-flex justify-content-around mb-5">
                    <div className="col-4">
                        <img className="img-fluid" src="https://www.etokki.com/image/cache/catalog/omni_whitegold_front-500x500.jpg" alt="" />
                    </div>
                    <div className="card border-primary mb-3 me-3 col-3">
                        <h2 className="card-header">{brand}test</h2>
                        <div className="card-body">
                            <h3 className="card-title fs-5">{model}test</h3>
                            <h4 className="card-subtitle fs-6 text-muted">{edition}test</h4>
                        </div>
                        <div className="card-body">
                            <p className="card-text">{description}asdasdasd</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item fs-5 text-center">{price}300</li>
                        </ul>
                        <div className="card-body d-flex justify-content-evenly">
                            <button type="button" className="btn btn-primary">Wishlist</button>
                            <button type="button" className="btn btn-success">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <h2>More details</h2>
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a className="nav-link active fs-4" data-bs-toggle="tab" href="#home">Images</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fs-4" data-bs-toggle="tab" href="#profile">Specifications</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fs-4" data-bs-toggle="tab" href="#reviews">Reviews</a>
                        </li>
                    </ul>
                    <div id="myTabContent" className="tab-content col-8 bg-dark">
                        <div className="tab-pane fade active show" id="home">
                            <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
                        </div>
                        <div className="tab-pane fade" id="profile">
                            <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit.</p>
                        </div>
                        <div className="tab-pane fade" id="reviews">
                            <p>This one hella good and pretty</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
