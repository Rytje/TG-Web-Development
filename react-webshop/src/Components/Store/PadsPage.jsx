import React from 'react'
import ProductCard from './ProductCard'

export default function PadsPage() {
    return (
        <div>
            <h2>Pads category</h2>
            <div className="row d-flex justify-content-evenly">
                <ProductCard brand="Hori" model="Fighting Commander" edition="PS4 + PS3 + PC" src="https://media.s-bol.com/WrZv5zPOX7J/1200x708.jpg" description="Some quick example text to build on the card title and make up the bulk of the card's content." price="$359.95" />
                <ProductCard brand="Hori" model="Fighting Commander" edition="Nintendo Switch/PC" src="https://media.s-bol.com/oVw5NnygPgnY/1200x814.jpg" description="Some quick example text to build on the card title and make up the bulk of the card's content." price="$359.95" />
                <ProductCard brand="Razer" model="Raiju" edition="Tournament Edition" src="https://media.s-bol.com/xOZn2yVkzMr/1200x782.jpg" description="Some quick example text to build on the card title and make up the bulk of the card's content." price="$359.95" />
                <ProductCard brand="Hori" model="Fighting Commander" edition="Nintendo Switch/PC" src="https://media.s-bol.com/oVw5NnygPgnY/1200x814.jpg" description="Some quick example text to build on the card title and make up the bulk of the card's content." price="$359.95" />
                <ProductCard brand="Hori" model="Fighting Commander" edition="Nintendo Switch/PC" src="https://media.s-bol.com/oVw5NnygPgnY/1200x814.jpg" description="Some quick example text to build on the card title and make up the bulk of the card's content." price="$359.95" />
                <ProductCard brand="Hori" model="Fighting Commander" edition="Nintendo Switch/PC" src="https://media.s-bol.com/oVw5NnygPgnY/1200x814.jpg" description="Some quick example text to build on the card title and make up the bulk of the card's content." price="$359.95" />
            </div>
        </div>
    )
}
