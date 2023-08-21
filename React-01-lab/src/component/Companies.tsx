import Services from "./Services";
interface combany{
    name:string;
    numOfemploe:number;
    year:number;
    servic:string;
    pric:number;

}

function Companies(props:combany) {
return (
    <>
        <h4 className="name">{props.name}</h4>
        <p className="l">{props.numOfemploe}</p>
        <p className="year">{props.year}</p>
        <Services servic={props.servic} pric={props.pric}/>
    </>
)
}

export default Companies