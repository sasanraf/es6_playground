import { addToDom } from './helpers'; // dot/period means add helper from current directory
import add from './add';
//import Person from './person'
//import SuperPerson from './person'
import SuperMegaPerson from './person'


// const Bob = new Person('Bob');
// const Susie = new Person('Susie');

// const Bob = new SuperPerson('Bob');
// const Susie = new SuperPerson('Susie');

const Bob = new SuperMegaPerson('Bob','BobBatman');
const Susie = new SuperMegaPerson('Susie','SusieCatWoman');


addToDom('<h1>React is awsome!</h1>');
addToDom(`<p>18 + 24 = ${ add(18,24,'+') }</p>`);
addToDom(`<p>24 / 18 = ${ add(24,18,'/') }</p>`);
addToDom('<br>');
addToDom(`${Bob.sleep(5)}`);
addToDom(`<h2>${Bob.speak('Hello')}!</h2>`);
addToDom(`<h2>${Susie.speak('Hi Bob')}</h2>`);
addToDom(`<h2>${Susie.superXRay()}</h2>`);
addToDom(`<h2>${Susie.superHeroName()}</h2>`);
