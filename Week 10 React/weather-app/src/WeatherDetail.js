import React, { Component } from 'react'
import './WeatherDetail.css'
import { apiKey } from './secret-file';

export default class WeatherDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: props.city,
            apiData: null
        };

        this.goToOverview = this.goToOverview.bind(this);
    }

    componentDidMount(){
        console.log("Details pagina did mount");
        this.getAllWeatherData();
    }

    goToOverview(){
        console.log("I clicked a button");
        this.props.setOnDetailState({
            state: false
        });
    }

    getAllWeatherData(){
        // console.log(this.props);
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.props.latitude}&lon=${this.props.longitude}&exclude=current,minutely,hourly,alerts&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then (data => {
            console.log(data);
            // this.state.apiData = data;
            this.setState({
                apiData: data
            });
            console.log(this.state.apiData);
            console.log("Daily: " + this.state.apiData.daily[0].dt);
            console.log(new Date(this.state.apiData.daily[0].dt * 1000));
        });
    }

    getDay(unixTime){
        let date = new Date(unixTime * 1000);
        return date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear();
    }

    render() {
        console.log("Render now");

        console.log(this.state.apiData);

        if (this.state.apiData == null){
            console.log("First load");
             return null;
        }

        console.log("Na if");
        
        return (
            <div className="weather-detail">
                <nav>
                    <button onClick={this.goToOverview}>&lt;</button>
                    <h1>{this.props.city}</h1>
                </nav>

                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Accordion Item #1 {this.state.apiData.timezone} {this.getDay(this.state.apiData.daily[0].dt)}
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Accordion Item #2
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Accordion Item #3
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
