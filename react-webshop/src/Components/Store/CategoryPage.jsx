import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from './ProductCard';
import { firestore } from '../../firebase-config';
import { v4 as uuidv4 } from 'uuid';

export default function CategoryPage() {

    const [productsList, setProductsList] = useState([]);
    const [docList, setDocList] = useState([]);

    let { category } = useParams();

    function capitalizeFirstLetter(string) {
        return string[0].toUpperCase() + string.slice(1);
    }

    function resetLists(){
        setProductsList([]);
        setDocList([]);
    }

    function getSearchCategory(urlSlug) {
        let searchCategory;

        switch (urlSlug) {
            case "fightsticks":
                searchCategory = "arcadestick";
                break;
            case "pads":
                searchCategory = "pad";
                break;
                case "buttons":
                searchCategory = "button";
                break;
                
            default:
                searchCategory = null;
                break;
        }
        return searchCategory;
    }

    useEffect(() => {
        console.log("Load category page");
        resetLists();
        firestore.collection("products")
            .where("Category", "==", getSearchCategory(category)).get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    // console.log(`${doc.id} => ${doc.data()}`);
                    // setDocId(doc.id);
                    setProductsList(prevState => {
                        let state = [doc.data(), ...prevState];
                        // console.log(state);
                        return state;
                    });
                    setDocList(prevState => {
                        let state = [doc.id, ...prevState];
                        return state;
                    });
                });
            });
        return () => {

        }
    }, [category]);

    return (
        <div>
            <h2>{capitalizeFirstLetter(category)} category</h2>
            {/* <ProductCard collectionId="products" docId="7dLJiiXaJ9yj6MRI9XJJ" description="test" to={`${category}/7dLJiiXaJ9yj6MRI9XJJ`} /> */}
            <div className="row d-flex justify-content-evenly">
                {productsList.map((product, index) => {
                    // console.log(docList[index]);
                    return <ProductCard key={uuidv4()} collectionId="products" docId={docList[index]} description="Some quick example text to build on the card title and make up the bulk of the card's content." to={`/store/${category}/${docList[index]}`} />
                })}
                {/* <ProductCard brand="Hori" model="Fighting Commander" edition="PS4 + PS3 + PC" src="https://media.s-bol.com/WrZv5zPOX7J/1200x708.jpg" description="Some quick example text to build on the card title and make up the bulk of the card's content." price="$359.95" />
                <ProductCard brand="Hori" model="Fighting Commander" edition="Nintendo Switch/PC" src="https://media.s-bol.com/oVw5NnygPgnY/1200x814.jpg" description="Some quick example text to build on the card title and make up the bulk of the card's content." price="$359.95" />
                <ProductCard brand="Razer" model="Raiju" edition="Tournament Edition" src="https://media.s-bol.com/xOZn2yVkzMr/1200x782.jpg" description="Some quick example text to build on the card title and make up the bulk of the card's content." price="$359.95" />
                <ProductCard brand="Hori" model="Fighting Commander" edition="Nintendo Switch/PC" src="https://media.s-bol.com/oVw5NnygPgnY/1200x814.jpg" description="Some quick example text to build on the card title and make up the bulk of the card's content." price="$359.95" />
                <ProductCard brand="Hori" model="Fighting Commander" edition="Nintendo Switch/PC" src="https://media.s-bol.com/oVw5NnygPgnY/1200x814.jpg" description="Some quick example text to build on the card title and make up the bulk of the card's content." price="$359.95" />
                <ProductCard brand="Hori" model="Fighting Commander" edition="Nintendo Switch/PC" src="https://media.s-bol.com/oVw5NnygPgnY/1200x814.jpg" description="Some quick example text to build on the card title and make up the bulk of the card's content." price="$359.95" /> */}
            </div>
        </div>
    )
}
