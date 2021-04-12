import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { HasFormatter } from './interfaces/HasFormatter.js';


  
  
  const form = document.querySelector('.new-item-form') as HTMLFormElement;
  console.log(form.children);
  
  // inputs
  const type = document.querySelector('#type') as HTMLInputElement;
  const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
  const details = document.querySelector('#details') as HTMLInputElement;
  const amount = document.querySelector('#amount') as HTMLInputElement;
  
// list template instance
  const ul = document.querySelector('ul')!;
  const list = new ListTemplate(ul);

  form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let values:[string, string, number] = [tofrom.value, details.value, amount.valueAsNumber]
  
    let doc: HasFormatter;
    if (type.value === 'invoice') {
      doc = new Invoice(...values);
    } else {
      doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
  });

  //GENERICS

//Captura el tipo de dato que se esta pasando 
// const addUID = <T>(obj: T) => {
//     let uid = Math.floor(Math.random() * 100);
//     return {...obj, uid}
//  }

//   let docOne = addUID({name: 'yoshi', age: 30});

//   console.log(docOne.name);

// //Podemos hacer q el tipo de dato de la interface sea variable dependiendo de lo que quiera

//   interface Resource <T>{
//     uid: number,
//     resourceName: string,
//     data: T
//   }

//   const docThree : Resource<object> = {
//     uid: 1,
//     resourceName: 'Juan',
//     data: {name:'jose'}
//   }

//   const docFour: Resource<string[]> = {
//     uid: 1,
//     resourceName: 'Juan',
//     data: ['jose', 'pedro']

//   }


//ENUMS

// son un tipo de dato especial en typescript que nos permite almacenar una serie de constantes
//Y asociarlos a un valor numerico

// enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }

// interface Resource <T>{
//     uid: number,
//     resourceName: ResourceType.BOOK, //0
//     data: T
//   }

//   const docThree : Resource<object> = {
//     uid: 1,
//     resourceType: ResourceType.AUTHOR, //1
//     data: {name:'jose'}
//   }

//   const docFour: Resource<string[]> = {
//     uid: 1,
//     resourceType: ResourceType.FILM, //2
//     data: ['jose', 'pedro']

//   }


//TUPLES
// let arr = ['rue', 25, true]
// let tup: [string, number, boolean] = ['rue', 25, true]

