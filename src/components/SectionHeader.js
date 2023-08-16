/*
Title for every section
*/

function SectionHeader({name}) {
    return (
        <div className='w3-xlarge w3-padding-16 w3-center'>
            <strong>{name}</strong>
        </div>
    )
}

export default SectionHeader