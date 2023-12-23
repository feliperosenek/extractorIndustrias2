
function configBots(bot) {
    let ordemBusca;
    if (bot === 1) {
        ordemBusca = '&& id >= 1 && id <= 6';
    }
    if (bot === 2) {
        ordemBusca = '&& id >= 7  && id <= 18';
    }
    if (bot === 3) {
        ordemBusca = '&& id >= 19  && id <= 24';
    }
    if (bot === 4) {
        ordemBusca = '&& id >= 25  && id <= 33';
    }
    return ordemBusca;
}

module.exports = configBots;
