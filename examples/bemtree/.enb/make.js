var ENB_BEMXJST = '../../../';

module.exports = function (config) {
    config.node('page', function (nodeConfig) {
        nodeConfig.addTechs([
            [ require('enb/techs/levels'), { levels: getLevels(config) } ],
            [ require('enb/techs/file-provider'), { target: '?.bemdecl.js' } ],
            require('enb/techs/files'),
            require('enb/techs/deps'),
            [ require(ENB_BEMXJST + 'techs/bemtree'), { devMode: true, target: '?.dev.bemtree.js' } ],
            [ require(ENB_BEMXJST + 'techs/bemtree'), { devMode: false, target: '?.prod.bemtree.js' } ]
        ]);
        nodeConfig.addTargets([
            '?.dev.bemtree.js', '?.prod.bemtree.js'
        ]);
    });

};

function getLevels (config) {
    return [
        { path: '../libs/bem-core/common.blocks', check: false },
        'blocks'
    ].map(function (level) {
        return config.resolvePath(level);
    });
}
