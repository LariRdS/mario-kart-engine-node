# 🏎️ Mario Kart Race Engine

<table>
    <tr>
        <td>
            <img src="./docs/header.gif" alt="Mario Kart" width="200">
        </td>
        <td>
            <b>Objetivo:</b>
            <p>
                Este projeto simula corridas do Mario Kart, criando uma engine de corrida por turnos para praticar lógica de programação, aleatoriedade e manipulação de atributos dos personagens.
            </p>
        </td>
    </tr>
</table>

---

## Personagens

O jogo possui os seguintes personagens, cada um com atributos de **Velocidade**, **Manobrabilidade** e **Poder**, que influenciam nos resultados durante a corrida:

<table style="border-collapse: collapse; width: 800px; margin: 0 auto;">
        <tr>
            <td style="border: 1px solid black; text-align: center;">
                <p>Mario</p>
                <img src="./docs/mario.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 4</p>
                <p>Manobrabilidade: 3</p>
                <p>Poder: 3</p>
            </td>
             <td style="border: 1px solid black; text-align: center;">
                <p>Peach</p>
                <img src="./docs/peach.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 3</p>
                <p>Manobrabilidade: 4</p>
                <p>Poder: 2</p>
            </td>
              <td style="border: 1px solid black; text-align: center;">
                <p>Yoshi</p>
                <img src="./docs/yoshi.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 2</p>
                <p>Manobrabilidade: 4</p>
                <p>Poder: 3</p>
            </td>
        </tr>
        <tr>
            <td style="border: 1px solid black; text-align: center;">
                <p>Bowser</p>
                <img src="./docs/bowser.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 5</p>
                <p>Manobrabilidade: 2</p>
                <p>Poder: 5</p>
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Luigi</p>
                <img src="./docs/luigi.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 3</p>
                <p>Manobrabilidade: 4</p>
                <p>Poder: 4</p>
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Donkey Kong</p>
                <img src="./docs/dk.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 2</p>
                <p>Manobrabilidade: 2</p>
                <p>Poder: 5</p>
            </td>
        </tr>
    </table>


## 🕹️ Regras e Mecânicas

- Dois personagens são selecionados aleatoriamente (nunca repetidos) para disputar a corrida.
- A corrida ocorre em uma **pista aleatória de 5 rodadas**.
- A cada rodada é sorteado um bloco de pista:
    - **RETA**: Rola um dado de 6 lados + Velocidade → quem tiver maior valor ganha 1 ponto.
    - **CURVA**: Rola um dado de 6 lados + Manobrabilidade → quem tiver maior valor ganha 1 ponto.
    - **CONFRONTO**: Rola um dado de 6 lados + Poder → quem tiver menor valor perde 1 ponto (sem pontuação negativa).
- Nenhum personagem pode ter pontuação negativa.
- Ao final das 5 rodadas, o personagem com mais pontos é declarado vencedor.
- Em caso de mesma pontuação, é declarado o empate.

---

## 🚀 Tecnologias utilizadas

- **JavaScript (ES6+)**
- Node.js (execução no terminal)
- Programação assíncrona (`async/await`)

---

## 📂 Como rodar o projeto

1️⃣ Clone este repositório:
\`\`git clone https://github.com/seuusuario/mario-kart-race-engine.git
\`\`

2️⃣ Acesse a pasta:
\`\`
cd mario-kart-race-engine
\`\`

3️⃣ Execute o arquivo:
\`\`
node index.js
\`\`

A corrida será simulada no terminal exibindo cada rodada, valores dos dados e o placar final.

---

## 🎯 Objetivos

✅ Prática de lógica de programação utilizando JavaScript  
✅ Uso de funções assíncronas (`async/await`)  
✅ Aleatoriedade controlada para simular mecânicas de jogo  
✅ Manipulação de arrays e objetos para lógica de jogo  
✅ Organização de funções para engine de jogo

---

## ✨ Melhorias possíveis

- Interface gráfica.
- Modo campeonato com várias corridas.
- Adição de obstáculos e itens especiais.

---
