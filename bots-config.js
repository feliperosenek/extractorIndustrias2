
function configBots(bot) {
    let ordemBusca;
   if (bot == 1) {
    ordemBusca = '&& id >= 1 && id <= 2'
}
if (bot == 2) {
    ordemBusca = '&& id >= 3 && id <= 4'
}
if (bot == 3) {
    ordemBusca = '&& id >= 5 && id <= 6'
}
if (bot == 4) {
    ordemBusca = '&& id >= 7 && id <= 8'
}
if (bot == 5) {
    ordemBusca = '&& id >= 9 && id <= 10'
}
if (bot == 6) {
    ordemBusca = '&& id >= 11 && id <= 12'
}
if (bot == 7) {
    ordemBusca = '&& id >= 13 && id <= 14'
}
if (bot == 8) {
    ordemBusca = '&& id >= 15 && id <= 16'
}
if (bot == 9) {
    ordemBusca = '&& id >= 17 && id <= 18'
}
if (bot == 10) {
    ordemBusca = '&& id >= 19 && id <= 20'
}
if (bot == 11) {
    ordemBusca = '&& id >= 21 && id <= 22'
}
if (bot == 12) {
    ordemBusca = '&& id >= 23 && id <= 24'
}
if (bot == 13) {
    ordemBusca = '&& id >= 25 && id <= 26'
}
if (bot == 14) {
    ordemBusca = '&& id >= 27 && id <= 28'
}
if (bot == 15) {
    ordemBusca = '&& id >= 29 && id <= 33'
}
    return ordemBusca;
}

module.exports = configBots;
