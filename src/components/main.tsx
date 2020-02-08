import { createElement, render } from '../preact/index.js';
import { useEffect } from '../preact-hook/index.js';

interface IProps {
    type: string;
}
const Main: preact.FunctionalComponent<IProps> = (props: IProps) => {

    const { type } = props;

    useEffect(()=> {
        console.log('-------->type', type)
    }, [type])
    
    return <div>Hello Preact</div>
}

export default Main;