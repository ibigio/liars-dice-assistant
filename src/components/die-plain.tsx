import * as React from 'react';
import one from '../images/white-dice/1.svg';
import {DicePlain} from './icons';
// import styles from './die.module.css';



const diceSvgs = loadDiceSvgs();
console.log(diceSvgs);

function loadDiceSvgs() {
    // const pattern = /(\d)\.svg$/;
    const diceSvgsCtx = require.context('../images/white-dice', true, /(\d)\.svg$/);
    return diceSvgsCtx.keys().reduce(
        (svgs: { [key: number]: string }, path) => {
            const match = path.match(/(\d)\.svg$/);
            if (!match) return svgs;
            const numPips: number = Number(match[1]);
            svgs[numPips] = path;
            return svgs;
        }, {})
}

console.log(loadDiceSvgs());


 type LegalNumPips = 1 | 2 | 3 | 4 | 5 | 6;

interface DieProps {
    numPips: LegalNumPips
}

export default function DiePlain({numPips}: DieProps) {
return <img src={DicePlain[numPips]} />;

}