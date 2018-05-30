# Introdução

Este é o segundo projeto deste repositório, que tem como intuito simular o comportamento de um semáforo.

## Executando o projeto

Configure seu arduíno dessa maneira:

![Traffic-light](https://i.imgur.com/V8wUxkc.png)

Instale as dependências do projeto com o comando `npm install`.

Execute o arquivo traffig-light.js com o comando `node traffic-light.js`

## Dificuldades deste projeto

A maior dificuldade com esse projeto foi criar a lógica de passar para a próxima etapa do semáforo. Em outras linguagens de programação, como `python` você simplesmente consegue fazer algo parecido com:

```Python
openTrafficLight(lights)
time_sleep(2)
payAttention(lights)
time_sleep(0.5)
closeTrafficLight(lights)
time_sleep(2)
```

Mas no JavaScript não existe a função sleep, então a melhor forma que encontrei para simular isso foi utilizando a função `setTimeout(callback, ms)`. O parâmetro `callback` representa a função que será executada após a quantidade de `ms` específicada.
Com isso consegui simular perfeitamente o comportamento do `time_sleep`.

## Código

Os códigos já vistos anteriormente não possuirão comentários

```JS
const five = require('johnny-five');
const board = new five.Board();

board.on("ready", () => {
    //instancia os LEDS, nas portas 13, 8 e 12.
    const lights = {
        greenLight: new five.Led(13),
        redLight: new five.Led(8),
        yellowLight: new five.Led(12)
    }

    //Executa o loop à cada 4500ms
    board.loop(4500, async () => {
        //Executa as funções de abrir e fechar o semáforo
        try {
            await next(openTrafficLight(lights), 2000);
            await next(payAttention(lights), 500);
            await next(closeTrafficLight(lights), 2000);
        } catch (err) {
            console.log(err);
        }
    })
})

//Responsável por deixar o semáforo verde
var openTrafficLight = (lights) => {
        lights.greenLight.on();
        lights.redLight.off();
        lights.yellowLight.off();
}


//Responsável por deixar o semáforo amarelo
var payAttention = (lights) => {
        lights.greenLight.off();
        lights.yellowLight.on();
        lights.redLight.off();
}

//Responsável por deixar o semáforo vermelho
var closeTrafficLight = (lights) => {    
        lights.yellowLight.off();
        lights.redLight.on();
        lights.greenLight.off();
}

//Responsável por passar para o próximo estado do semáforo
var next = (callback, ms) => {
    return new Promise((resolve, reject) => {setTimeout(() => {
        resolve(callback);
    }, ms)});
}
```


