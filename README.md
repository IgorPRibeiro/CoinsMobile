# Config
- npm i
- npm install -g json-server
- To open the expo: ```npm run start```

## Mudar base url caso rode no emulador
de `http://localhost:3000` para `http://10.0.2.2:3000`.Vice e versa, o local host eh
o endereco do json-server, para utilizar no emulador precisamos dessa url http://10.0.2.2:3000

# Alguns pontos sobre o projeto

## Navigation
Foi usado a nova arquitura de navigation do Expo. Ocasionando mudancas na arquitetura de pastas
do projeto

## Login
Foi realizado apenas um GET no Login, portando nao e necessario informar os 2 campos corretamente, 
apenas um deles e suficiente para logar

## Scroll Infinito
Por nao ter paginacao no json-server, criei uma rota para o scroll infinito.

## Notification
So funciona em dispositivos fisicos. Nao e possivel rodar no expoGo

### Nao deu tempo de realizar os testes :( 

## *Igor Pinheiro Ribeiro - Espirito Santo - 07/06/2024 04:46*