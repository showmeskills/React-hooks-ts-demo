
const data:string = "<h1>hello,there is a dangerously html render</h1>"

const Home = ()=>{
    return(
        <>
            <h1>短路运算符</h1>
        </>
    )
}

//为了防止xsx攻击
const Danger = ()=>{

    return(
        <>
            <h1
                dangerouslySetInnerHTML={{__html:data}}
            ></h1>
            {/* 当点击abc的时候就会选中 */}
            <label htmlFor="abc">abc <input type="checkbox" id="abc" /></label>
            {/* 短路运算符 */}
            {
                true && <Home/>
            }
        </>
    )
}

export default Danger;