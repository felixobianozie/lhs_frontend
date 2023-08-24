function SubSection({ title, content }) {
    return (
        <>
            <h6 className="w3-center">
                <strong>{title}</strong>
            </h6>
            { content }
        </>
    )
}

export default SubSection