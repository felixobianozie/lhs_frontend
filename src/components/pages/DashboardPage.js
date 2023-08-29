/**
 * This is the dashboard where all the
 * the magic happens
 */

function DashboardPage() {
    document.title = 'LHS | Dashboard';
    
    return(
        <div className="w3-green w3-center w3-xxxlarge w3-padding-64" style={{minHeight:'100vh'}}>
            Welcome to the dashboard.<br/>
            This is where all the magic happens.
        </div>
    )
}

export default DashboardPage;