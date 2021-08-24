import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { firestore } from '../../firebase-config';

export default function ProductCard({ brand, model, edition, src, description, price, to }) {

    const [productData, setPoductData] = useState();

    

    useEffect(() => {

        // firestore.collection("products").get().then((querySnapshot) => {
        //     querySnapshot.forEach((doc) => {
        //         console.log(`${doc.id} => ${doc.data()}`);
        //     });
        // });
        
        return () => {
            
        }
    }, [])

    function addToCart() {
        console.log("buy");
        
        firestore.collection("users").add({
            first: "Ada",
            last: "Lovelace",
            born: 1815
        })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });


        // firestore.collection("users").get().then((querySnapshot) => {
        //     querySnapshot.forEach((doc) => {
        //         console.log(`${doc.id} => ${doc.data()}`);
        //     });
        // });


        
        console.log("wat");
    }


    return (
        <div className="card border-primary mb-3 me-3 col-3">
            <h2 className="card-header">{brand}</h2>
            <div className="card-body">
                <h3 className="card-title fs-5">{model}</h3>
                <h4 className="card-subtitle fs-6 text-muted">{edition}</h4>
            </div>
            <Link to={to}>
                <img className="img-fluid" src={src} alt="" />
            </Link>
            <div className="card-body">
                <p className="card-text">{description}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item fs-5 text-center">{price}</li>
            </ul>
            <div className="card-body d-flex justify-content-evenly">
                <button type="button" className="btn btn-primary">Wishlist</button>
                <button type="button" className="btn btn-success" onClick={addToCart}>Buy Now</button>
            </div>
        </div>
    )
}
