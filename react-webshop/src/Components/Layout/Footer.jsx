import React from 'react'

export default function Footer() {

    let date = new Date();



    return (
            <div className="row">
                <table className="table mb-0">
                    <thead className="table-dark">
                        <tr>
                            <th className="fs-5 fw-normal" scope="col">Customer service</th>
                            <th className="fs-5 fw-normal" scope="col">About After School Fight Club</th>
                            <th className="fs-5 fw-normal" scope="col">Business</th>
                            <th className="fs-5 fw-normal" scope="col">Shop locations</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="table-dark">
                            <td><a href="#">Contact</a></td>
                            <td><a href="#">Work at ASFC</a></td>
                            <td><a href="#">Business sales</a></td>
                            <td><a href="#">Amsterdam</a></td>
                        </tr>
                        <tr className="table-dark">
                            <td><a href="#">Returns</a></td>
                            <td><a href="#">Blog</a></td>
                            <td><a href="#">Become a partner</a></td>
                            <td><a href="#">Tokyo</a></td>
                        </tr>
                        <tr className="table-dark">
                            <td><a href="#">Terms &amp; Conditions</a></td>
                            <td><a href="#">Opening times</a></td>
                            <td><a href="#">API</a></td>
                            <td><a href="#">London</a></td>
                        </tr>
                    </tbody>
                </table>
                <p className="text-center text-secondary bg-dark pt-3 mb-0">&copy; Made by Ryno {date.getFullYear()}</p>
            </div>
    )
}
