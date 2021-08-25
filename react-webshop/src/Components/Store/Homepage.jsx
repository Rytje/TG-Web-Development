import React, {useState, useEffect} from 'react';
import Navigation from '../Layout/Navigation';
import TopBar from '../Layout/TopBar';
import ProductCard from './ProductCard';
import Footer from '../Layout/Footer';
import { firestore } from '../../firebase-config';
import {v4 as uuidv4} from 'uuid';

export default function Homepage() {

    const [productsList, setProductsList] = useState([]);
    const [docList, setDocList] = useState([]);
    // const [docId, setDocId] = useState();

    useEffect(() => {
        console.log("Load home page");
        firestore.collection("featured").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data()}`);
                // setDocId(doc.id);
                setProductsList(prevState =>{
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

    function loadHomePage(){
        
    }

    return (
        <div>
            <TopBar />
            <Navigation />
            <div id="carouselExampleIndicators" className="carousel slide mb-5" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://www.etokki.com/image/cache/catalog/ss_omni_r8_kr-1140x380.jpg" className="d-block w-75 mx-auto" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.etokki.com/image/cache/catalog/ss_omni_r8_sa-1140x380.jpg" className="d-block w-75 mx-auto" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.etokki.com/image/cache/catalog/ss_taeyoung_fanta_hemi-1140x380.jpg" className="d-block w-75 mx-auto" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <h1 className="ms-5 mb-3">Featured</h1>
            <div className="row d-flex justify-content-evenly">
                {productsList.map((product, index) =>{
                    console.log(docList[index]);
                    return <ProductCard key={uuidv4()} collectionId="featured" docId={docList[index]} description="Some quick example text to build on the card title and make up the bulk of the card's content." to={`/store/fightsticks/${docList[index]}`} />
                })}
                {/* <ProductCard collectionId="products" docId="SM4MDHkEREqAheBlZCiW" description="Some quick example text to build on the card title and make up the bulk of the card's content." to="/store/fightsticks/test"/> */}
                {/* <ProductCard brand="Etokki" model="Omni Arcade Stick" edition="Korean Edition" src="https://www.etokki.com/image/catalog/omni_6s_kr.jpg" description="Some quick example text to build on the card title and make up the bulk of the card's content." price="$359.95" to="/store/fightsticks/test" />
                <ProductCard brand="Etokki" model="Omni Arcade Stick" edition="Sanwa Edition" src="https://www.etokki.com/image/catalog/omni_6_sa.jpg" description="Some quick example text to build on the card title and make up the bulk of the card's content." price="$359.95" to="/store/fightsticks/test" />
                <ProductCard brand="Hori" model="Fighting Commander" edition="PS4 + PS3 + PC" src="https://media.s-bol.com/WrZv5zPOX7J/1200x708.jpg" description="Some quick example text to build on the card title and make up the bulk of the card's content." price="$359.95" to="/store/fightsticks/test" />
                <ProductCard brand="Hori" model="Fighting Commander" edition="Nintendo Switch/PC" src="https://media.s-bol.com/oVw5NnygPgnY/1200x814.jpg" description="Some quick example text to build on the card title and make up the bulk of the card's content." price="$359.95" to="/store/fightsticks/test" />
                <ProductCard brand="Razer" model="Raiju" edition="Tournament Edition" src="https://media.s-bol.com/xOZn2yVkzMr/1200x782.jpg" description="Some quick example text to build on the card title and make up the bulk of the card's content." price="$359.95" to="/store/fightsticks/test" /> */}
            </div>
        <Footer />

        </div>
    );
}
