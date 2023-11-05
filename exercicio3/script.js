/* 3. Utilizar os métodos push, pop, unshift e shift para manipular um
array
a. Crie um array com o nome "frutas" e adicione 3 tipos de frutas
de sua escolha
b. Utilize o método push para adicionar uma fruta no final do
array
c. Utilize o método pop para remover a última fruta do array
d. Utilize o método unshift para adicionar uma fruta no início do
array
e. Utilize o método shift para remover a primeira fruta do array
f. Exiba o array resultante na tela */
let frutas = ['maca', 'banana', 'uva']

document.write(`a: Adicionado frutas no array: `)
document.write(frutas)

document.write('<br>')

frutas.push('ameixa')
document.write(`b: Adicionado ameixa ultima fruta: `)
document.write(frutas)

document.write('<br>')

frutas.pop()
document.write(`c: Removido ultima fruta: `)
document.write(frutas)

document.write('<br>')

frutas.unshift('morango')
document.write(`d: adicionado uma primeira fruta: `)
document.write(frutas)

document.write('<br>')

frutas.shift()
document.write(`e: Removido a primeira fruta: `)
document.write(frutas)


document.write('<br>')

document.write(`f: resultado final: `)
document.write(frutas)

