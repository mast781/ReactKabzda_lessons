import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import UncontrolledOnOff from "./components/UncontrolledOnOff/UncontrolledOnOff";

// function declaration

function App(props: any) {
    // полезное что-то
    // обязана вернуть JSX

    console.log("App rendering")

    let [ratingValue, setRatingValue] =  useState<RatingValueType>(4)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)


    return (
        <div className={"App"}>
           {/* <OnOff />*/}

            <UncontrolledRating />

            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Accordion titleValue={"Menu"}
                       collapsed={accordionCollapsed}
                       onChange = {() => {setAccordionCollapsed(!accordionCollapsed)}} />

            {/*{<OnOff on={switchOn} onChange={setSwitchOn}/>}*/}
            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
            <UncontrolledAccordion titleValue={"Blabla"} />


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
