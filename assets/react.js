import 'bootstrap/dist/js/bootstrap.bundle';
import './styles/react.scss';


import React, {Component} from "react";
import ReactDom, {render} from "react-dom";
import RepLogApp5 from './react/controllers/MyComponent';
import RepLogApp6 from './components/RepLogApp';
import Tableau from './components/Tableau';

console.log('run react.js');

const shouldShowHeart = true;

const el1 = React.createElement('h2', null, "Historique de l'ascenseur 1", React.createElement('span', null, '❤️'));
console.log(el1);
ReactDom.render(el1, document.getElementById('lift-stuff-app1'));


const el2 = <h2>Lift Stuff! 2 <span>❤️</span></h2>;
console.log(el2);
ReactDom.render(el2, document.getElementById('lift-stuff-app2'));

class RepLogApp3 extends React.Component {
    render() {
        return <h2>Lift Stuff!3 <span>❤️</span></h2>;
    }
}

console.log(<RepLogApp3/>);
ReactDom.render(<RepLogApp3/>, document.getElementById('lift-stuff-app3'));


class RepLogApp4 extends Component {
    render() {
        return <h2>Lift Stuff 4! <span>❤️</span></h2>;
    }
}

console.log(<RepLogApp4/>);
ReactDom.render(<RepLogApp4/>, document.getElementById('lift-stuff-app4'));


console.log(<RepLogApp5/>);
ReactDom.render(<RepLogApp5/>, document.getElementById('lift-stuff-app5'));

console.log(<RepLogApp6 withHeart={true}/>);
ReactDom.render(
    <><RepLogApp6 withHeart={shouldShowHeart}/> <RepLogApp6 withHeart={!shouldShowHeart}/></>,
    document.getElementById('lift-stuff-app6')
);


console.log(<Tableau withHeart={true}/>);
ReactDom.render(
    <Tableau withHeart={shouldShowHeart}/> ,
    document.getElementById('lift-stuff-app6')
);
