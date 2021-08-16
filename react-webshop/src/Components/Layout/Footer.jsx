import React from 'react'

export default function Footer() {


    return (
        <div className="container-fluid">

            <div className="row">
                <table className="table mb-0">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">Type</th>
                            <th scope="col">Column heading</th>
                            <th scope="col">Column heading</th>
                            <th scope="col">Column heading</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="table-dark">
                            <th scope="row">Dark</th>
                            <td>Column content</td>
                            <td>Column content</td>
                            <td>Column content</td>
                        </tr>
                        <tr className="table-dark">
                            <th scope="row">Dark</th>
                            <td>Column content</td>
                            <td>Column content</td>
                            <td>Column content</td>
                        </tr>
                        <tr className="table-dark">
                            <th scope="row">Dark</th>
                            <td>Column content</td>
                            <td>Column content</td>
                            <td>Column content</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
