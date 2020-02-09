import { createElement, render } from './preact/index.js';
import Main from './components/main';
import { useState } from './preact-hook/index.js';
import _ from 'lodash';
import { IWindow } from './types';

declare let window: IWindow;

window._ = _;

const App: preact.FunctionalComponent = () => {
    const [type, setType] = useState<string>('a');

    const handleClick = () => {
        setType(Math.random().toString());
    };

    return (
        <div className="app">
            <Main type={type} />
            <button onClick={handleClick}>改变状态</button>
        </div>
    );
};

render(<App />, document.getElementById('root') as Element);
