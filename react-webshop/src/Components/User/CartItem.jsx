import React from 'react';

export default function CartItem({ product }) {


    return (
        <>
            {/* <li className="list-group-item d-flex justify-content-between align-items-center">
                    <img className="img-fluid w-25" src="https://www.etokki.com/image/catalog/omni_6_sa.jpg" />
                    {product}
                    <span className="badge bg-primary rounded-pill">14</span>
                    <button>Remove</button>
                </li> */}

            <tr className="table-default">
                <th scope="row"><img className="img-fluid w-25" src="https://www.etokki.com/image/catalog/omni_6_sa.jpg" /></th>
                <td>{product}</td>
                <td><span className="badge bg-primary rounded-pill">14</span></td>
                <td><button>Remove</button></td>
            </tr>
        </>
    )
}
