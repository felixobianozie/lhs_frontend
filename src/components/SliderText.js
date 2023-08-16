/*
Description text for each slider
*/

function SliderText({slideIndex}){
    const mainTagsL = {
        'className': "w3-xxlarge",
        'style': {textShadow: "0px 0px 20px red"}
    };
    const mainTagsM = {
        'className': "w3-large w3-hide-medium",
        'style': {textShadow: "0px 0px 20px red"}
    };
    const descTagsL = {
        'className': "w3-large",
        'style': {textShadow: "0px 0px 20px blue"} 
    };
    const descTagsM = {
        'className': "",
        'style': {textShadow: "0px 0px 20px blue"} 
    };
    const SliderBody = [
        ['We Guarantee Quality Education ', '...our approach to teaching and learning is top rated'],
        ['Read, Research And Do More', '...plant high curiosity, provide enabling resources to solve them'],
        ['Education Beyond The Classroom', '...we also prioritize athletic skills and fitness'],
    ];
    
    return (
        <>        
            <div className="w3-section w3-text-white w3-hide-small">
                <div className={mainTagsL['className']} style={mainTagsL['style']}><strong>{SliderBody[slideIndex][0]}</strong></div>
                <div className={descTagsL['className']} style={descTagsL['style']}><strong>{SliderBody[slideIndex][1]}</strong></div>
            </div>
            <div className="w3-section w3-text-white w3-hide-medium w3-hide-large">
                <div className={mainTagsM['className']} style={mainTagsM['style']}><strong>{SliderBody[slideIndex][0]}</strong></div>
                <div className={descTagsM['className']} style={descTagsM['style']}><strong>{SliderBody[slideIndex][1]}</strong></div>
            </div>
        </>
 )
}

export default SliderText