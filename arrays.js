// Перемешать массив в произвольном порядке

let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    ,array2 = []
    ;

while(array1.length > 0){
  a = Math.floor(Math.random() * (array1.length) ) + 0;
  array2.push(array1[a]);
  array1.splice(a, 1);
}

// Способ 2

array1.sort((a, b) => {return (a - b)*Math.round(Math.random()) * 2 - 1}));

// Имееться массив [9, 8, 7, 6, 5, 4, 3, 2, 1] преобразовать в [999999999, 88888888, 7777777, 666666, 55555, 4444, 333, 22, 1]

let array3 = [9, 8, 7, 6, 5, 4, 3, 2, 1];

for(i=0; i < array3.length; i++){
  str = array3[i].toString();
  array3[i]= Number(str.repeat(array3[i]));
}

// Способ 2
let array4 =[];
array4 = array3.map(el => Number(el.toString().repeat(el)));

// Способ 3
let array5 = [];
for(i=0; i< array3.length; i++){
  strg='';
  for(j=0; j<array3[i]; j++){		
    strg +=array3[i]		
  }
  array5.push(Number(strg))
}

//



