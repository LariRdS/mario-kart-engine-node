const players = [
    {
        NAME: 'Mario',
        SPEED: 4,
        MANEUVERABILITY: 3,
        POWER: 3,
        SCORE: 0,
    },
    {
        NAME: 'Luigi',
        SPEED: 3,
        MANEUVERABILITY: 4,
        POWER: 4,
        SCORE: 0,
    },
    {
        NAME: 'Peach',
        SPEED: 3,
        MANEUVERABILITY: 4,
        POWER: 2,
        SCORE: 0,
    },
    {
        NAME: 'Bowser',
        SPEED: 5,
        MANEUVERABILITY: 2,
        POWER: 5,
        SCORE: 0,
    },
    {
        NAME: 'Yoshi',
        SPEED: 2,
        MANEUVERABILITY: 4,
        POWER: 3,
        SCORE: 0,
    },
    {
        NAME: 'Donkey Kong',
        SPEED: 2,
        MANEUVERABILITY: 2,
        POWER: 5,
        SCORE: 0,
    }
];

const player1 = players[Math.floor(Math.random() * players.length)];
const restPlayers = players.filter(player => player.NAME !== player1.NAME);
const player2 = restPlayers[Math.floor(Math.random() * restPlayers.length)];

async function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() {
    const blockTypes = ['RETA', 'CURVA', 'CONFRONTO'];
    const block = Math.floor(Math.random() * blockTypes.length);
    return blockTypes[block];
}

async function logRollResult(characterName, block, diceResult, attribute) {
    console.log(
        `${characterName} rolou um dado de ${block} ${diceResult} + ${attribute} = ${
            diceResult + attribute
        }`
    );
}

async function playRaceEngine(character1, character2) {
    for(let round = 1; round <= 5; round++) {
        console.log(`Rodada ${round}`);

        let block = await getRandomBlock();
        console.log(`Bloco: ${block}`);

        const roll1 = await rollDice();
        const roll2 = await rollDice();

        let totalTestSkill1 = 0;
        let totalTestSkill2 = 0;

        if (block === 'RETA') {
            totalTestSkill1 = roll1 + character1.SPEED;
            totalTestSkill2 = roll2 + character2.SPEED;

            await logRollResult(
                character1.NAME,
                "velocidade",
                roll1,
                character1.SPEED
            );
            await logRollResult(
                character2.NAME,
                "velocidade",
                roll2,
                character2.SPEED
            );

        }

        if (block === 'CURVA') {
            totalTestSkill1 = roll1 + character1.MANEUVERABILITY;
            totalTestSkill2 = roll2 + character2.MANEUVERABILITY;

            await logRollResult(
                character1.NAME,
                "manobrabilidade",
                roll1,
                character1.MANEUVERABILITY
            );
            await logRollResult(
                character2.NAME,
                "manobrabilidade",
                roll2,
                character2.MANEUVERABILITY
            );

        }

        if (block === 'CONFRONTO') {
            let powerResult1 = roll1 + character1.POWER;
            let powerResult2 = roll2 + character2.POWER;

            console.log(
                `Confronto entre ${character1.NAME} e ${character2.NAME}`
            );

            await logRollResult(
                character1.NAME,
                "poder",
                roll1,
                character1.POWER
            );
            await logRollResult(
                character2.NAME,
                "poder",
                roll2,
                character2.POWER
            );

            async function confrontResult(player1, player2) {
                console.log(
                    `${player1} venceu o confronto! ${player2} perde 1 ponto!`
                );
                player1.SCORE--;
            };

            if(powerResult2 > powerResult1 && character1.SCORE > 0) {
                await confrontResult(character2, character1);
            };
            if (powerResult1 > powerResult2 && character2.SCORE > 0) {
                await confrontResult(character1, character2);
            };
            
            console.log(
                powerResult1 === powerResult2
                    ? "Empate no confronto!"
                    : ""
            );
    
        }

        if (totalTestSkill1 > totalTestSkill2) {
            console.log(
                `${character1.NAME} marcou 1 ponto!`
            );
            character1.SCORE++;
        } else if (totalTestSkill2 > totalTestSkill1) {
            console.log(
                `${character2.NAME} marcou 1 ponto!`
            );
            character2.SCORE++;
        } 
        
        console.log("_________________________");
    }
}

async function declareWinner(character1, character2) {
    console.log("Placar final:");
    console.log(`${character1.NAME}: ${character1.SCORE} ponto(s)`);
    console.log(`${character2.NAME}: ${character2.SCORE} ponto(s)`);
    
    if (character1.SCORE > character2.SCORE) {
        console.log(`${character1.NAME} é o grande vencedor! Parabéns ${character1.NAME}!`);
    } else if (character2.SCORE > character1.SCORE) {
        console.log(`${character2.NAME} é o grande vencedor! Parabéns ${character2.NAME}!`);
    } else {
        console.log("A corrida terminou em empate!");
    }    
}

(async function main() {
    console.log(
        `Começando corrida entre ${player1.NAME} e ${player2.NAME}...`
    );

    await playRaceEngine(player1, player2);
    await declareWinner(player1, player2);
})()

