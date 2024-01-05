import { Carousel } from "react-bootstrap";
import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import CardImage from "../Components/CardImage";

class Slider extends Component {
    state = {
        src1: this.props.src1,
        src2: this.props.src2,
        src3: this.props.src3,
        tinggi: this.props.tinggi
    };

    render() {
        return (
            <Carousel data-bs-theme="dark" interval={1000}>
                <Carousel.Item>
                    <img
                        className="d-block w-100 rounded"
                        src={this.state.src1}
                        height={this.state.tinggi}
                    />
                </Carousel.Item>
                
                <Carousel.Item>
                    <img
                        className="d-block w-100 rounded"
                        src={this.state.src2}
                        height={this.state.tinggi}
                    />
                </Carousel.Item>
                
                <Carousel.Item>
                    <img
                        className="d-block w-100 rounded"
                        src={this.state.src3}
                        height={this.state.tinggi}
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 rounded"
                        src={this.state.src2}
                        height={this.state.tinggi}
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 rounded"
                        src={this.state.src2}
                        height={this.state.tinggi}
                    />
                </Carousel.Item>
            </Carousel>  
        );
    }
}
export default Slider;

export const ContentWeb = (props) => {
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col">
                    <div className="">
                        <Slider
                            src1 = {require("../Asset/Carousel/caro1.png")}
                            src2 = {require("../Asset/Carousel/caro2.png")}
                            src3 = {require("../Asset/Carousel/caro3.png")}
                            tinggi="334px"
                        />
                    </div>
                    <div className="m-5 text-center">
                        <h2>
                            <u>{props.title}</u>
                        </h2>
                    </div>
                    <CardImage/>
                </div>
            </div>
        </div>
    );
};
