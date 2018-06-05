# Introdução

Este é o terceiro projeto deste repositório, que tem como intuito controlar o LED através do potenciometro.

## Executando o projeto

Configure seu arduíno dessa maneira:

![Potentiometer](https://i.imgur.com/mPgzrpc.png)

Instale as dependências do projeto com o comando `npm install`.

Execute o arquivo potentiometer.js com o comando `node potentiometer.js`

## Dificuldades deste projeto

Este projeto é bem simples de ser feito, e o ponto chave é entender como receber os dados do potenciometro, através do código `potentiometer.on('data', callback);

Gostaria de dizer que o potênciometro aceita valores entre 0 e 1024, mas o LED aceita apenas valores entre 0 e 255. Então, quando o valor do potênciometro excede o valor do LED, ele reseta. Ou seja, quando o potênciometro atingir o valor de 255 o LED estará com a luz máxima, mas ao atingir o valor de 256, o LED irá apagar e começará a acender novamente conforme o valor aumentar.

## Código

Os códigos já vistos anteriormente não possuirão comentários

```JS
var five = require('johnny-five');
var board = new five.Board();

board.on('ready', () => {
    //instancia o objeto potentiometer, na porta A1; 
    let potentiometer = new five.Sensor({
        pin: 'A1',
        freq: 0 //esse valor define, em millisegundos, de quanto em quanto tempo será disparado o evento "data"
    });

    let led = new five.Led(3);

    //recebe o evento "data" e executa uma função de callback. O valor de "this" neste caso é potentiometer
    potentiometer.on('data', () => {
        //adiciona um valor de brilho ao LED, sendo ele de no máximo 255.
        led.brightness(this.value);
    });
});
```
