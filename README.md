🏎️ Projeto Mario Kart em JavaScript
Simulação simples de corrida estilo Mario Kart em JavaScript.
Cada personagem possui atributos de velocidade, manobrabilidade e poder.
O jogo usa rolagem de dados e pistas aleatórias para definir o vencedor.

🎯 Objetivo
Criar a lógica de um jogo de vídeo game para simular corridas de Mario Kart, levando em consideração regras e mecânicas de sorteio e atributos dos personagens.

🏎️ Players
Mario

Velocidade: 4
Manobrabilidade: 3
Poder: 3
Peach

Velocidade: 3
Manobrabilidade: 4
Poder: 2
Yoshi

Velocidade: 2
Manobrabilidade: 4
Poder: 3
Bowser

Velocidade: 5
Manobrabilidade: 2
Poder: 5
Luigi

Velocidade: 3
Manobrabilidade: 4
Poder: 4
Donkey Kong

Velocidade: 2
Manobrabilidade: 2
Poder: 5
⚙️ Regras & Mecânicas
Dois personagens disputam a corrida em uma pista aleatória de 5 rodadas.
A cada rodada, é sorteado um bloco da pista:
Reta → rolar dado de 6 lados + atributo Velocidade. Quem vencer ganha 1 ponto.
Curva → rolar dado de 6 lados + atributo Manobrabilidade. Quem vencer ganha 1 ponto.
Confronto → rolar dado de 6 lados + atributo Poder. Quem perder, perde 1 ponto.
Nenhum jogador pode ter pontuação negativa.
🏆 Condição de Vitória
Ao final das 5 rodadas, vence quem acumulou mais pontos.

🚀 Tecnologias
JavaScript
Node.js (opcional)
