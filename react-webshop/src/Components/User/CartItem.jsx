import React, { useEffect, useState } from 'react';
import { firestore, auth } from '../../firebase-config';

export default function CartItem({ product, collection, cartItemDocRef, cartContent, setCartContent, cartItem, setErrorMessage, showToast }) {

    const [productData, setProductData] = useState();

    useEffect(() => {
        let docRef = firestore.collection(collection).doc(product);
        docRef.get().then((doc) => {
            if (doc.exists) {
                setProductData(doc.data());
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });

        return () => {

        }
    }, [])


    function removeSelfFromCart() {
        console.log(cartItemDocRef);

        firestore.collection("users").where("email", "==", auth.currentUser.email).get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots


                    console.log(cartContent);
                    console.log(cartItem.product);
                    showToast();

                    cartContent.forEach(element => {
                        if (element.product == cartItem.product) {
                            setCartContent(cartContent.filter(item => item !== cartItem));
                            doc.ref.collection("cart").doc(cartItemDocRef).delete().then(() => {
                                console.log("Document successfully deleted!");
                                setErrorMessage("Item has been successfully removed from your cart!");
                            }).catch((error) => {
                                setErrorMessage("Failed to remove item from your cart.");
                                console.error("Error removing document: ", error);
                            });
                        }
                    });



                });
            })
    }


    return (
        <>
            {/* <li className="list-group-item d-flex justify-content-between align-items-center">
                    <img className="img-fluid w-25" src="https://www.etokki.com/image/catalog/omni_6_sa.jpg" />
                    {product}
                    <span className="badge bg-primary rounded-pill">14</span>
                    <button>Remove</button>
                </li> */}

            <tr className="table-default">
                <th scope="row"><img className="img-fluid w-25" src={productData?.Image} /></th>
                <td>
                    <h2 className="card-title fs-4">{productData?.Brand}</h2>
                    <h3 className="card-title fs-5">{productData?.Model}</h3>
                    <h4 className="card-subtitle fs-6 text-muted">{productData?.Edition}</h4>
                </td>
                {/* <td><span className="badge bg-primary rounded-pill fs-6">14</span></td> */}
                <td>
                    <div className="form-group">
                        {/* <label for="exampleSelect1" class="form-label mt-4">Example select</label> */}
                        <select className="form-select" id="exampleSelect1">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                </td>
                <td><button className="btn btn-danger" onClick={removeSelfFromCart}>Remove</button></td>
                <td>${productData?.Price}</td>
            </tr>
        </>
    )
}
