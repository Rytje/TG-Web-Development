import React, { useState } from 'react';
import { firestore, auth } from '../../firebase-config';
import Navigation from '../Layout/Navigation';
import TopBar from '../Layout/TopBar';
import CartItem from './CartItem';
import { v4 as uuidv4 } from 'uuid';
import Footer from '../Layout/Footer';

export default function Cart() {

    const [cartContent, setCartContent] = useState([]);

    function showCart() {
        console.log("show cart");

        firestore.collection("users").where("email", "==", auth.currentUser.email).get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots


                    // console.log(doc.id);

                    let docRef = doc;
                    doc.ref.collection("cart").get().then((querySnapshot) => {
                        querySnapshot.forEach((doc) => {
                            // console.log(`${doc.id} => ${doc.data()}`);

                            setCartContent(prevState => {
                                let state = [doc.data(), ...prevState];
                                // console.log(state);
                                return state;
                            });

                        });
                    });

                });
            })

        // firestore.collection("users").where("email", "==", auth.currentUser.email).get()
        // .then((querySnapshot) => {
        //     querySnapshot.forEach((doc) => {
        //         // doc.data() is never undefined for query doc snapshots



        //     });
        // })
        // .catch(function (error) {
        //     console.log("Error getting documents: ", error);
        // });
    }

    return (
        <div>
            <TopBar />
            <Navigation />
            <h1>Cart</h1>
            <button onClick={showCart}>Show Cart</button>
            {/* <ul className="list-group">
                {cartContent.map((cartItem) => {
                    // console.log(docList[index]);
                    return <CartItem key={uuidv4()} product={cartItem.product} />
                })}
            </ul> */}


            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Product</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {cartContent.map((cartItem) => {
                        // console.log(docList[index]);
                        return <CartItem key={uuidv4()} product={cartItem.product} />
                    })}
                </tbody>
            </table>
            <Footer />
        </div>
    )
}
