interface prog{
    name:string;
    plangoeg:string;
    exyears:number;
    cambany:string;
}

function Programers(props:prog) {
return (
    <>
        <div>
            <h4>{props.name}</h4>
            <p>{props.plangoeg}</p>
            <p>{props.exyears}</p>
            <p>{props.cambany}</p>
        </div>
        
    </>
)
}

export default Programers