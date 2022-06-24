import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header"

export default function App() {

    const rappers = ["Belmondo", "Oskar83", "Guziro"];

    var rapperTags = rappers.map(function (name) {
        return("<p>" + name + "</p>")
    });

    console.log(rapperTags);

    return (
        <div>
            <Navbar />
            <Header />
        </div>
    )
}