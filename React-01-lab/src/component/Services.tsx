interface Ser{
    servic:string;
    pric:number;
}
function Services(props:Ser) {
  return (
    <>
        <h4 className="name">{props.servic}</h4>
        <p className="l">{props.pric}</p>
    </>
  )
}

export default Services