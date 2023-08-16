/*
Flash messages for notifications and feedbacks
*/

function FlashMsg() {
    const hideMe = () => {
        document.getElementById('message').className='w3-hide';
    }
    
    return (
        <div id='message'>
            <div className='w3-cell-row w3-blue w3-border w3-animate-opacity'>
                <div className="w3-cell w3-cell-top">
                    <div><strong>Notice!</strong> Admission is ongoing for the 2023/2024 academic session. <strong><a href="/">Click here to register your ward.</a></strong></div>
                </div>
                <div className="w3-cell w3-cell-top">
                    <div className="w3-dark-gray w3-opacity w3-hover-gray w3-center" onClick={hideMe} style={{padding: "2px"}}>
                        <span><strong>&times;</strong></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlashMsg