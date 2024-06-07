# Configuração

- `npm i`
- `npm install -g json-server`
- Para abrir o Expo: ```npm run start```

## Mudar a base URL caso rode no emulador
De `http://localhost:3000` para `http://10.0.2.2:3000`. Vice-versa, o localhost é
o endereço do json-server. Para utilizar no emulador, precisamos dessa URL: `http://10.0.2.2:3000`.

# Alguns pontos sobre o projeto

## Navegação
Foi utilizada a nova arquitetura de navegação do Expo, ocasionando mudanças na arquitetura de pastas do projeto.

## Login
Foi realizado apenas um GET no login, portanto, não é necessário informar os dois campos corretamente; apenas um deles é suficiente para logar.

## Scroll Infinito
Por não haver paginação no json-server, criei uma rota para o scroll infinito.

## Notificação
Só funciona em dispositivos físicos. Não é possível rodar no Expo Go.

### Não deu tempo de realizar os testes :(

## *Igor Pinheiro Ribeiro - Espírito Santo - 07/06/2024 04:46*
