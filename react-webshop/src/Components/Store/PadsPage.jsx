import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { firestore } from '../../firebase-config';
import { v4 as uuidv4 } from 'uuid'

export default function PadsPage() {

    const [productsList, setProductsList] = useState([]);
    const [docList, setDocList] = useState([]);


    useEffect(() => {
        console.log("Load pads page");
        firestore.collection("products")
            .where("Category", "==", "pad").get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    console.log(`${doc.id} => ${doc.data()}`);
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
    }, []);


    return (
        <div>
            <h2>Pads category</h2>
            <div className="row d-flex justify-content-evenly">
                {productsList.map((product, index) => {
                    console.log(docList[index]);
                    return <ProductCard key={uuidv4()} collectionId="products" docId={docList[index]} description="Some quick example text to build on the card title and make up the bulk of the card's content." to={`/store/pads/${docList[index]}`} />
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
