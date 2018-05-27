# Introdução

Este é o primeiro projeto deste repositório, que faz apenas a luz do arduíno piscar.

## Executando o projeto

Configure seu arduíno dessa maneira:

![Blink img](https://raw.githubusercontent.com/rwaldron/johnny-five/master/assets/led-blink.gif)

Instale as dependências do projeto com o comando `npm install`.

Execute o arquivo blink.js com o comando `node blink.js`

## Código

```JS
// Importa a biblioteca johnny-five
var five = require("johnny-five");
// Carrega sua placa de arduíno
var board = new five.Board();

board.on("ready", function() {
  // Instancia um objeto LED, conectado na porta 13.
  var led = new five.Led(13);
  // Faz o LED piscar a cada 500ms
  led.blink(500);
});

```


