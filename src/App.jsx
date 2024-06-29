import MultiSelect from './MultiSelect';
import { useState } from 'react';

function App() 
{
    const [selectedCharacters, setSelectedCharacters] = useState([]);
    const Characters = 
    [
        "Levi Ackerman",
        "Kakashi Hatake",
        "Itachi Uchiha",
        "Killua Zoldyck",
        "Naruto Uzumaki",
        "Minato Namikaze",
        "Eren Jaeger",
        "Mikasa Ackerman",
        "Madara Uchiha",
        "Saitama",
        "Jiraiya",
        "Roronoa Zoro",
        "Monkey D. Luffy",
        "Edward Elric",
        "Shikamaru Nara"
    ];

    const handleSelect = (event) =>
    {
        const checked = event.target.checked;
        const value = event.target.value;
        setSelectedCharacters(checked ? [...selectedCharacters, value] : selectedCharacters.filter((item) => item !== value));
    };

    console.log(selectedCharacters);

    return (
        <MultiSelect onChange={handleSelect} characters={Characters}></MultiSelect>
    );
}

export default App
