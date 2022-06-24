import React from "react"
import TopSection from "../images/topsection.png"
import Card from "./Card"
import DataArray from "../data.js"



export default function Header() {

    var cardContents = DataArray.map(function (data){
        return(
            <Card img={data.img} rating={data.stats.rating} reviewCount={data.stats.reviewCount}
             location={data.location} title={data.title} price={data.price} />
        )
    });

    return (
        <header className="header">
            <div className="container text-center">
                <img className="topsection" src={TopSection} />
            </div>

            <div className="container-fluid more-margin">
                <h1 className="header-h1">Online Expirences</h1>
                <p>Join unique interactive activities led by <br /> one-of-a-kind hosts-all without leaving <br /> home.</p>
            </div>

            <div className="container-fluid flex-row">
                {cardContents}
            </div>
        </header>
    )
}