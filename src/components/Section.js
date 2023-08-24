
function Section({ children, id, title}) {
    const arrowId = `${id}Arrow`;

    const myStyle = {marginBottom:'3px'};
    const myBtnClass = "w3-button w3-block w3-left-align w3-card-2";

    function dropTogler(id) {
        let x = document.getElementById(id);
        x.classList.toggle("slide");
    }

    function dropArrowTogler(id) {
        let x = document.getElementsByClassName(id);

        for (let i = 0; i < 2; i++) {
            if (x[i].className.indexOf("w3-hide") === -1) {
                x[i].className += " w3-hide";
            } else { 
            x[i].className = x[i].className.replace(" w3-hide", "");
            }
        }
    }

    return (
        <>
            <button onClick={() => {dropTogler(id); dropArrowTogler(arrowId)}} className={myBtnClass} style={myStyle}>
                    <strong>{title}</strong>
                    <div className={`w3-right ${arrowId}`}><strong>&#8595;</strong></div>
                    <div className={`w3-right ${arrowId} w3-hide`}><strong>&#8593;</strong></div>
            </button>
            <section 
                id={id} 
                className="accordion w3-container" 
                style={{textAlign:'justify', textJustify:'inter-word'}}
            >
                { children }
            </section>
        </>
    )
}

export default Section