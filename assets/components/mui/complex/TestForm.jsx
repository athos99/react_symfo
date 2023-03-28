import React, {useState} from 'react';
import {OptionEmailContext} from './Context.jsx';
import GroupEmail from "./GroupEmail";
import OptionEmail from "./OptionEmail";
import Titre from "./Titre";


const TestForm = () => {
    console.log('TestForm');
    const [optionEmail, setOptionEmail] = useState(true);
    return (
        <>
            <OptionEmailContext.Provider value={{optionEmail, setOptionEmail}}>
                <Titre></Titre>
                <OptionEmail></OptionEmail>
                <GroupEmail></GroupEmail>
            </OptionEmailContext.Provider>
        </>
    );
}

export default TestForm;