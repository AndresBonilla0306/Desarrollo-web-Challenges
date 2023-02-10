const arrayPrueba = [1,2,3,4,5,6,7]
const array2 = ['a', 'b', 'c']
const arrayUnión = arrayPrueba.concat(array2)

console.log(arrayPrueba)

//Use el método length para imprimir el tamaño del arreglo
console.log(arrayPrueba.length)

//Use el método at para conocer el elemento en la posición que se selecione
var index
index=5
console.log(arrayPrueba.at(index))

//Use le método concat para concatenar varios array
console.log(arrayUnión)

//Constructor sirve para crear arreglos de varias maneras
const constructor = new Array(34,31,18)

console.log(constructor)

//Use el método CopyWithin para crear una copia cambiando el orden de los elementos del array, en un orden deseado
const arrayCopyWithin = ['A', 'B', 'C', 'D', 'E', 'F', 'G']

console.log(arrayCopyWithin.copyWithin(2,4,6))

//Use el método entries para retornar un nuevo arrat iterator que contiene un key value 

const arrayEntries = ['carro', 'moto', 'motoraton', 'avion', 'monopatin']

const iterator = arrayEntries.entries()

console.log(iterator.next().value)
console.log(iterator.next().value)

//Use el método every para poner a prueba todos los elementos del array a uan condición de su preferencia, este retornara un boolean (True ó False)

const EstaPorDebajo = (CurrentValue) => CurrentValue < 13

const arrayEvery = [1, 4, 6, 9, 11]

console.log(arrayEvery.every(EstaPorDebajo))

//Use el método fill para cambiar todos los elementos de un array a un valor estatico, de un inicio de la posición a un final 

const arrayFill = [23, 56, 13, 17, 89, 92]

console.log(arrayFill.fill(13,3,5))

//Use el método filtrer para crear una copia del array con una condición de su preferencia 

const ArrayFiltrer = ['Mamut', 'Cocodrilo', 'Leon', 'Tucan', 'Elefante']

const Filtrado = ArrayFiltrer.filter(word => word.length > 5)

console.log(Filtrado)

//Use el método find para encontrar el PRIMER elemento de un array con la condición deseada 

const arrayFind = [12, 24, 35, 17, 54, 63]

const Encontrado =arrayFind.find(Element => Element > 30)

console.log(Encontrado)

// Use el método findIndex para encontrar la posición del PRIMER elemento con la condición de su preferencia

const arrayFindIndex = [15, 8, 11, 24, 50, 16]

const BuscaElNumero = (Element) => Element > 15

console.log(arrayFindIndex.findIndex(BuscaElNumero))

//Use el método findLast para encontrar el ÚLTIMO elemento de un array con la condición de su preferencia

const arrayFindLast = ['Minecraft', 'Doom', 'Mario Bros', 'LoL','WoW', 'Raimbow six']

const Buscaloooo = arrayFindLast.findLast(word => word.length <4)

console.log(Buscaloooo)

// Use el método findIndexLast para encontrar la posición del ÚLTIMO elemento con la condición de su preferencia

const arrayFindLastIndex = ['Minecraft', 'Doom', 'Mario Bros', 'LoL','WoW', 'Raimbow six']

const BuscaloBoludo = word => word.length <4

console.log(arrayFindLastIndex.findLastIndex(BuscaloBoludo))

//Use el método flat para crear un nuevo array con todos los elemnetos de una array dentro de un array concatenado, además se puede modificar que tan profundo concatena los subarray

const arrayFlat = ['Ibai', 'Grefg', 'Auron',[['Spreen', 'Quaquicty']]]

console.log(arrayFlat.flat(2))

//Use el método flatMap para que todos los elementos de un array se les asigne una función y concatenen lo elementos de un array dentro de un array, básicamente el funcionamiento de map y flat 

const arrayFlatMap = [12, 15, [22], [45, 3], 34, []]

const flattenend = arrayFlatMap.flatMap(num => num)

console.log(flattenend)

//Use el método forEach para que ejecute la función por cada uno de los elementos 

const arrayForEach = ['Mordekaiser', 'Garen', 'Darius','Jax', 'Lux','Yasuo']

arrayForEach.forEach(word => console.log(word))

//Use el método includes para determinar si el array incluye un valor determinado, este devolverá un boolean( True o False)

const arrayBandidas = ['Gabriela', 'Valeria', 'Laura', 'Juliana']

console.log(arrayBandidas.includes('Gabriela'))

console.log(arrayBandidas.includes('Estefania'))

//Use el método indexOf para encontrar la PRIMERA posición de un elemento que cumpla una condición , si no existe un elemento con la concición retornará un -1

const arrayPanas = ['Juanse', 'Pablo', 'Santiago', 'Ernesto', 'Santiago']

console.log(arrayPanas.indexOf('Santiago'))

console.log(arrayPanas.indexOf('Santiago', 2))

console.log(arrayPanas.indexOf('Jhonny'))

//Use el método Join para devolver un string de todos los elementos en un array, estos pueden estar separados por comas o guinoes

const arrayComidas =['Perro', 'Hamburguesa', 'Salchipapa']

console.log(arrayComidas.join())

//Use el métdodo keys para para crear un iterator para cada una de las posiciones del array 

const arrayKey = ['a', 'b', 'c']
const Separador = arrayKey.keys()

for (const key of Separador) {
  console.log(key);
}

//Use el método indexOf para encontrar la La ÚLTIMA posición de un elemento que cumpla una condición , si no existe un elemento con la concición retornará un -1

console.log(arrayPanas.lastIndexOf('Santiago'))

// Use el método map para que todos los elementos de un array sean sometidos a una función
const dobleArray = arrayPrueba.map(arrayPrueba => arrayPrueba * 2); 

console.log(dobleArray)

//Use el método Pop para remover el último elemento de un array, esto modificará el tamaño del array 

const MeQuieroComer =['Helado', 'Perro','Gomitas','Brownie']

console.log(MeQuieroComer.pop())

console.log(MeQuieroComer)

//Use el método Push para agregar un elemento al final del array 

MeQuieroComer.push('Lechona', 'Tamal', 'Ramen')

console.log(MeQuieroComer)

//Use el método Reduce para Comprimir o sumar todos los elementos en un array lo cual devolvera un solor valor (también se pueden concatenar varias array, en ese caso nos dejará un array con los elementos de los array)

const arrayReduce =[1,3,5,6]

const Suma = arrayReduce.reduce((Sumatoria, ValorActual) => Sumatoria + ValorActual)

console.log(Suma)

//Use el método ReduceRight para comprimir o sumar todos los elementos de derecha a izquierda lo cual retornará un úncio valor (también se pueden concatenar varias array, en ese caso nos dejará un array con los elementos de los array)

const arrayReduceRight = [[0, 1], [2, 3], [4, 5]];

const resultado = arrayReduceRight.reduceRight((Sumatoria, ValorActual) => Sumatoria.concat(ValorActual));

console.log(resultado);

//Use el método reverse cambia el orden de los elementos en un array

const arrayReverse = ['Pollo', 'Carne','Arroz']

console.log(arrayReverse.reverse())

//Use el método shift para remover el primer elemento del array 

const ArrayShift = ['Madrid', 'Barcelona', 'Moscú', 'Lisboa']

console.log(ArrayShift)
console.log(ArrayShift.shift())
console.log(ArrayShift)

//Use el método Slice para crear una copia de parte de un array donde usará de parametros la posición donde empieza y donde termina la copia

const arraySlice = ['Hormiga','Cucarrón','Escarabajo','Libelula','Avispa']

console.log(arraySlice)
console.log(arraySlice.slice(1,3))

//Use el método some para probar si al menos uno de los elementos cumple una condición, en este caso soltará un boolean (True ó False)

const arraySome =[3,6,7,9]

const NoShe = (Element) => Element > 3

console.log(arraySome.some(NoShe))

//Use el método sort para que este te suelte una referencia del mismo array pero en orden ascendente

const arraySort =['Bob', 'Janet', 'Violeta','Flash','Jack']

console.log(arraySort.sort())

//Use el método Splice para remover, reemplazar o agregar nuevos elementos a un arreglo 

const arraySplice =['Tony','Clint','Steven','Natasha','Bruce']
arraySplice.splice(1,0,'Thor')
console.log(arraySplice)

// Use el método toLocaleString para convertir los elementos de un array en un texto y estos vienen separados por comas

const ArrayToLocateString = [1, 'a', new Date('03 Jun 2003 14:12:00 UTC')];
const ConvertirString = ArrayToLocateString.toLocaleString('en', { timeZone: 'UTC' });

console.log(ConvertirString);

//Use el método toString para convertir el array en un string 
const ArrayToString = [1, 2, 'Universidad', 35];

console.log(ArrayToString.toString());

//Use el método Unshift para agregar nuevos elemenetos al inicio del array

const arrayUnshift = [3, 7, 10];

console.log(arrayUnshift.unshift(31, 42,13));
console.log(arrayUnshift)

//Use el método Values para crear un iterador para cada elemento de un array

const ElUltimo = ['Casa', 'Apartamento', 'Finca'];
const Nose = ElUltimo.values();

for (const value of Nose) {
    console.log(value);
  }

  //Challenge
/*
const Numbers = [1,2,3,4,5,6,7,8,9,10]

const ParImpar = (Element) => Element % 2 == 0   

function parss { 
  if (Element % 2 == 0 (console.log("Par"))) }*/