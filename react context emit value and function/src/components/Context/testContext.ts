import {createContext} from "react";
const testContext = createContext("");
const {Provider,Consumer} = testContext;


// eslint-disable-next-line import/no-anonymous-default-export
export{
    testContext,
    Provider,
    Consumer,
}

