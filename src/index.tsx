import { createElement, render } from './preact/index.js';

const App = () => {
    return <div>Hello Preact</div>
}
render(<App />, document.getElementById('root') as Element)