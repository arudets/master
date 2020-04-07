
// Зашифровка
maket = {
	a: 'o1',
	b: 'o2',
	c: 'o3',
	d: 'o4',
	e: 'o5',
	h: 'o8!!dasddasd',
	l: 'l2',
	o: 'l5',
	r: 'l8asdasd',
	w: 'z3'
} ,
strg = "hello, world!!!"  
array1 = [],
array2 = [],
array3 = [];

array1 = strg.split('');
array2 = Object.entries(maket).map((el) =>{return {index: el[0], value: el[1]}});

array1.forEach((el) =>{	
	if(array2.some((elem) =>{return elem.index.includes(el)})){		
		el = array2.filter((elem)=>elem.index == el)[0].value ;		
	}
	array3.push(el)
})

result = array3.join('');

// Разшифровка

array2.forEach((el) => {
	  if(result.includes(el.value)){	  
	    result = result.split(`${el.value}`).join(`${el.index}`);		
  	}
})
