import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { firestore, auth } from '../../firebase-config';

export default function ProductCard({ collectionId, docId, description, to }) {

    const [productData, setProductData] = useState();



    useEffect(() => {

        // firestore.collection("products").get().then((querySnapshot) => {
        //     querySnapshot.forEach((doc) => {
        //         console.log(`${doc.id} => ${doc.data()}`);
        //     });
        // });

        getProductData(collectionId, docId);

        return () => {

        }
    }, [])

    function addToCart() {
        console.log("Add to cart");
        console.log(auth.currentUser.email);
        let userDocId;
        firestore.collection("users")
            .where("email", "==", auth.currentUser.email).get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    userDocId = doc.id;


                    firestore.collection("users").doc(userDocId).collection("cart").add({
                        product: `${docId}`,
                        quantity: 1,
                        collection: `${collectionId}`
                    })
                    .then((docRef) => {
                            console.log("Document written with ID: ", docRef.id);
                        })
                        .catch((error) => {
                            console.error("Error adding document: ", error);
                        });



                });
            })
            .catch(function (error) {
                console.log("Error getting documents: ", error);
            });

            

        // firestore.collection("users").add({
        //     first: "Ada",
        //     last: "Lovelace",
        //     born: 1815
        // })
        // .then((docRef) => {
        //     console.log("Document written with ID: ", docRef.id);
        // })
        // .catch((error) => {
        //     console.error("Error adding document: ", error);
        // });



        // firestore.collection("featured").get().then((querySnapshot) => {
        //     querySnapshot.forEach((doc) => {
        //         console.log(`${doc.id} => ${doc.data()}`);
        //         <ProductCard docId={doc.id}/>
        //     });
        // });
    }

    function getProductData(collectionId, docId) {
        let docRef = firestore.collection(collectionId).doc(docId);

        // console.log(docRef.id);

        docRef.get().then((doc) => {
            if (doc.exists) {
                // console.log("Document data:", doc.data());
                setProductData(doc.data());
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    }


    return (
        <div className="card border-primary mb-3 me-3 col-3">
            <h2 className="card-header">{productData?.Brand}</h2>
            <div className="card-body">
                <h3 className="card-title fs-5">{productData?.Model}</h3>
                <h4 className="card-subtitle fs-6 text-muted">{productData?.Edition}</h4>
            </div>
            <Link to={to}>
                <img className="img-fluid" src={productData?.Image} alt="" />
            </Link>
            <div className="card-body">
                <p className="card-text">{description}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item fs-5 text-center">${productData?.Price}</li>
            </ul>
            <div className="card-body d-flex justify-content-evenly">
                <button type="button" className="btn btn-primary">Wishlist</button>
                <button type="button" className="btn btn-success" onClick={addToCart}>Buy Now</button>
            </div>
        </div>
    )
}
