const express = require('express');
const app = express();

app.get('/sum', (req, res) => {
    let a = Number(req.query.a);
    let b = Number(req.query.b);
    if((isNaN(a))||( isNaN(b))){
        console.log('Error');
    }else {
        console.log(a + b);
    }
});
app.post('/reverse-case', (req, res)=> {
    let word = req.query.a;
    var ArrayOfWord = word.split('');
    for (let i = 0; i < ArrayOfWord.length; i++) {
        if ((ArrayOfWord[i].charCodeAt()>= 65)&&(ArrayOfWord[i].charCodeAt()<= 90)){
            ArrayOfWord[i] = String.fromCharCode(ArrayOfWord[i].charCodeAt() +32);
        } else if ((ArrayOfWord[i].charCodeAt()>= 97)&&(ArrayOfWord[i].charCodeAt()<= 122)){
            ArrayOfWord[i] = String.fromCharCode(ArrayOfWord[i].charCodeAt() -32);
        }
    }
    console.log(ArrayOfWord.join(''));
});
app.put('/obj-to-array', (req, res)=> {
    i=0;
    const entries = Object.entries( req.query);
    var ArrayObject = [];
    entries.forEach(([key, value]) => {
        ArrayObject[i] = {
            key:  key,
            value:  value
        };
        i++;
    })
    i=0
    console.log(ArrayObject);
});
app.patch('/reverse-array', (req, res)=> {
    a=0;
    let values = req.query.number;
    var values2 = [];
    for(let i=values.length-1; i >=0; i--){
        values2[a] = values[i];
        a++;
    }
    a=0;
    console.log(values2);
});
app.delete('/duplicates', (req, res)=> {
    let values = req.query.number;
    var values2 = [];
    for(let i=0; i <values.length; i++){
        a=false;

        for(let j = 0;j<values2.length;j++) {
            if (values2[j] == values[i]) {
                a = true;
            }
        }

        if(a==false){
            values2.push(values[i]);
        }

    }
    console.log(values2);
});

app.listen(3100, () => {
    console.log('Application listening on port 3100!');
});