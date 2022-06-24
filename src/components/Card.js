import React from "react";
import { FaStar } from 'react-icons/fa'

export default function Card(props) {

    return (
        <div className="md-card">
            <div className="md-card-header">
                <img src={require("../images/" + props.img)} className="md-card-image" />
                <span className="md-card-banner">SOLD OUT</span>
            </div>
            <div className="md-card-footer">
                <p className="md-card-top"><span className="md-card-icon"><FaStar /></span><span className="md-rating">{props.rating}
                </span><span className="grey-text">({props.reviewCount}) - {props.location}</span></p>
                <p className="md-card-titel">{props.title}</p>
                <p className="md-card-sub"><span className="md-price">From {props.price}$ / </span>person</p>
            </div>
        </div>
    )
}