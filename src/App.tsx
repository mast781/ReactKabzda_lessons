import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";

// function declaration

function App(props: any) {
    // полезное что-то
    // обязана вернуть JSX

    console.log("App rendering")

    let [ratingValue, setRatingValue] =  useState<RatingValueType>(4)

    return (
        <div className={"App"}>
           {/* <OnOff />

            <UncontrolledAccordion titleValue={"Menu"} />*/}

            <UncontrolledRating />

            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Accordion titleValue={"Menu"} collapsed={false} />

            {/*<OnOff on={true} />
            <OnOff on={false} />*/}

            {/*<Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>*/}
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle rendering")
    return <h1>{ props.title }</h1>
}

export default App;
