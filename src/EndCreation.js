// TODO: combine photo uploaded and painting chosen into a gif or flipping css animation, plus music?, create "create" button maybe
//TODO: research how to add music by link or stream to og source

import React from "react";


export default function DisplayStare(props){
    const {imageSource, image_id} = props;


    return (
        <div className="MuseumStare" id="museumstare">
            <h1>Have a Profound Moment</h1>
            <img id="artimage" src={`https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`}/>
            <img src={imageSource} alt="selfie" imageid="imageId"/>

        </div>
    )
}