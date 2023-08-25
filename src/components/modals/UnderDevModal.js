/**
 * To tell user that service is not available
 */

//This function is to be assigned to any component intended to display this modal on click
export function showUnderDev() {
    document.getElementById('underDev').style.display='block';
}

function UnderDev() {

    function hideModal(id) {
        document.getElementById(id).style.display='none';
    }

    return (
        <>
            <div id="underDev" className="w3-modal">
                <div className="w3-modal-content w3-card-4 w3-animate-zoom w3-padding-64 w3-container w3-pale-red" style={{maxWidth:'400px', marginLeft: 'auto', marginRight: 'auto'}}>
                    <div className="w3-center"><br/>
                        <span onClick={() => hideModal('underDev')} className="w3-button w3-xlarge w3-hover-red w3-display-topright" title="Close Modal">&times;</span>
                    </div>
                    <div className='w3-center w3-xlarge'>Sorry, this service is temporarily shut down for development purposes. We are currently improving it to bring you maximum satisfaction.</div>
                </div>
            </div>
        </>
    )
}

export default UnderDev