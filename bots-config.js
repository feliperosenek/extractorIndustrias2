
function configBots(bot) {
    let ordemBusca;
   if (params.bot == 1) {
    ordemBusca = '&& id >= 1 && id <= 2'
}
if (params.bot == 2) {
    ordemBusca = '&& id >= 3 && id <= 4'
}
if (params.bot == 3) {
    ordemBusca = '&& id >= 5 && id <= 6'
}
if (params.bot == 4) {
    ordemBusca = '&& id >= 7 && id <= 8'
}
if (params.bot == 5) {
    ordemBusca = '&& id >= 9 && id <= 10'
}
if (params.bot == 6) {
    ordemBusca = '&& id >= 11 && id <= 12'
}
if (params.bot == 7) {
    ordemBusca = '&& id >= 13 && id <= 14'
}
if (params.bot == 8) {
    ordemBusca = '&& id >= 15 && id <= 16'
}
if (params.bot == 9) {
    ordemBusca = '&& id >= 17 && id <= 18'
}
if (params.bot == 10) {
    ordemBusca = '&& id >= 19 && id <= 20'
}
if (params.bot == 11) {
    ordemBusca = '&& id >= 21 && id <= 22'
}
if (params.bot == 12) {
    ordemBusca = '&& id >= 23 && id <= 24'
}
if (params.bot == 13) {
    ordemBusca = '&& id >= 25 && id <= 26'
}
if (params.bot == 14) {
    ordemBusca = '&& id >= 27 && id <= 28'
}
if (params.bot == 15) {
    ordemBusca = '&& id >= 29 && id <= 33'
}
    return ordemBusca;
}

module.exports = configBots;
