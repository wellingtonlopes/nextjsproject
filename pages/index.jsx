import { useState } from 'react';

function Header({ title }) {
    return <h1>{title ? title : 'Default title'}</h1>;
}

export default function HomePage() {
    const names = ['Taynara Pinheiro', 'Wellington Lopes', 'Maui Lopes-Pinheiro', 'Zelda Lopes-Pinheiro'];
    const [likes, setLikes] = useState(0);

    function handleClick() {
        setLikes(likes + 1);
    }

    return (
        <div>
            <Header title="React 💙" />
            <ul>
                {names.map((name) => <li key={name}>{name}</li>)}
            </ul>

            <button onClick={handleClick}>Like({likes})</button>
        </div>
    );
}
