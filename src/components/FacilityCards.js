/*
Facility cards
*/

function FacilityCards({name, desc, photo}) {
    return(
        <div class="w3-container w3-col m6 l4 w3-padding-16">
            <div className="w3-card-4" style={{maxWidth:"400px", marginLeft:"auto", marginRight:"auto"}}>
                <img src={photo} alt="Facility" style={{maxWidth:"100%"}}/>
                <div className="w3-amber w3-container"><strong>{name}</strong></div>
                <div className='w3-container'>
                    <p style={{textAlign:"justify", textJustify:"inter-word"}}>{desc}</p>
                    <div className='w3-section w3-button w3-blue w3-round w3-small'>Learn More</div>
                </div>
            </div>
        </div>
    )
}

export default FacilityCards