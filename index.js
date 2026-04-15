const mario = { nome: "Mario", velocidade: 4, manobrabilidade: 3, poder: 3 };
const peach = { nome: "Peach", velocidade: 3, manobrabilidade: 4, poder: 2 };
const yoshi = { nome: "Yoshi", velocidade: 2, manobrabilidade: 4, poder: 3 };
const bowser = { nome: "Bowser", velocidade: 5, manobrabilidade: 2, poder: 5 };
const luigi = { nome: "Luigi", velocidade: 3, manobrabilidade: 4, poder: 4 };
const dk = { nome: "Donkey Kong", velocidade: 2, manobrabilidade: 2, poder: 5 };

function rolarDado() {
  return Math.floor(Math.random() * 6) + 1;
}

function tipoPista() {
  const pistas = ["RETA", "CURVA", "CONFRONTO"];
  return pistas[Math.floor(Math.random() * pistas.length)];
}

function corrida(player1, player2) {
  let pontos1 = 0;
  let pontos2 = 0;

  console.log(`🏎️ Corrida entre ${player1.nome} e ${player2.nome}\n`);

  for (let rodada = 1; rodada <= 5; rodada++) {
    console.log(`🔄 Rodada ${rodada}`);

    const pista = tipoPista();
    console.log(`Tipo de pista: ${pista}`);

    const dado1 = rolarDado();
    const dado2 = rolarDado();

    let total1, total2;

    if (pista === "RETA") {
      total1 = dado1 + player1.velocidade;
      total2 = dado2 + player2.velocidade;
    }

    if (pista === "CURVA") {
      total1 = dado1 + player1.manobrabilidade;
      total2 = dado2 + player2.manobrabilidade;
    }

    if (pista === "CONFRONTO") {
      total1 = dado1 + player1.poder;
      total2 = dado2 + player2.poder;
    }

    console.log(`${player1.nome}: ${total1}`);
    console.log(`${player2.nome}: ${total2}`);

    if (total1 > total2) {
      if (pista === "CONFRONTO") {
        pontos2 = Math.max(0, pontos2 - 1);
      } else {
        pontos1++;
      }
      console.log(`${player1.nome} venceu a rodada!`);
    } else if (total2 > total1) {
      if (pista === "CONFRONTO") {
        pontos1 = Math.max(0, pontos1 - 1);
      } else {
        pontos2++;
      }
      console.log(`${player2.nome} venceu a rodada!`);
    } else {
      console.log("Empate!");
    }

    console.log(`Placar: ${player1.nome} ${pontos1} x ${pontos2} ${player2.nome}\n`);
  }

  console.log("🏁 RESULTADO FINAL");

  if (pontos1 > pontos2) {
    console.log(`🏆 ${player1.nome} venceu a corrida!`);
  } else if (pontos2 > pontos1) {
    console.log(`🏆 ${player2.nome} venceu a corrida!`);
  } else {
    console.log("🤝 Empate!");
  }
}

corrida(mario, bowser);