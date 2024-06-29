import "./MultiSelect.css";

function MultiSelect(props)
{
    const arrowRotation = (event) =>
    {
        if (event.currentTarget.children[0].hasAttribute("transform"))
        {
            event.currentTarget.children[0].removeAttribute("transform");
            event.currentTarget.nextSibling.classList.remove("display");
        }
        else
        {
            event.currentTarget.children[0].setAttribute("transform", "rotate(180)");
            event.currentTarget.nextSibling.classList.add("display");
        }
    };

    return (
        <div className="container">
            <h1>Select your favorite anime characters</h1>
            <div className="select">
                <div onClick={(event) => arrowRotation(event)} className="top">
                    <svg xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 -960 960 960" width="34px" fill="#000000">
                        <path d="M480-360 280-560h400L480-360Z"/>
                    </svg>
                    <p>Characters</p>
                </div>
                <ul>
                    {props.characters.map((character, index) =>
                    {
                        return (
                            <li key={index}>
                                <input onChange={props.onChange} value={character} type="checkbox" id={`ch${index}`} />
                                <label htmlFor={`ch${index}`}>{character}</label>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default MultiSelect;