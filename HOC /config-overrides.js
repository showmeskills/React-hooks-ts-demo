
const {override,addDecoratorsLegacy} = require("customize-cra")
const path = require("path");


const resolve = (dir)=>{
    return path.join(__dirname,dir);
}

// type Config =  { resolve: { alias: { [x: string]: string; }; }; externals: { "react": string; "react-dom": string; }; }

const customize = ()=>(config,env)=>{
    config.resolve.alias["@"] = resolve("src")
    if(env==="production"){
        config.externals = {
            "react":"React",
            "react-dom":"ReactDOM",
        }
    }
    return config;
}

module.exports =override(addDecoratorsLegacy(),customize());