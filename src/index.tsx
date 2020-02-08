import { createElement, render } from './preact/index.js';
import Main from './components/main';
import { useState } from './preact-hook/index.js';

const App: preact.FunctionalComponent = () => {
    const [type, setType] = useState<string>('a');

    const handleClick = () => {
        setType(Math.random().toString());
    };

    return (
        <div>
            <Main type={type} />
            <button onClick={handleClick}>改变状态</button>
        </div>
    );
};

render(<App />, document.getElementById('root') as Element);
