/**
 * assets/stickers/猪猪/list.js
 * 🐷 【猪猪】表情包分组独立注册清单（27 张静态猪猪表情包）
 */
(function() {
    'use strict';

    if (typeof window.registerStickerPack !== 'function') {
        window._MCYT_PENDING_STICKERS = window._MCYT_PENDING_STICKERS || {};
        window._MCYT_PENDING_STICKERS['猪猪'] = [];
    }

    const list = [
        { desc: '这只可爱的小猪就是我呀', url: 'https://imgbed.heliar.top/i/QZNPVIKLzB8DiDL-.jpg' },
        { desc: '你给我老实点', url: 'https://imgbed.heliar.top/i/KpiF2iLAUzHVDvjD.jpg' },
        { desc: '骂我的人看到我这样还忍心骂吗', url: 'https://imgbed.heliar.top/i/TnIT9ii2FOss4Fke.jpg' },
        { desc: '这两只小猪就是我们呀', url: 'https://imgbed.heliar.top/i/K0UZOCq2MYES8vga.jpg' },
        { desc: '悲愤离开', url: 'https://imgbed.heliar.top/i/O7E9kWjlYBDg59W-.jpg' },
        { desc: '猪是必须要爱惜的', url: 'https://imgbed.heliar.top/i/tiUgP49B0Tez99eI.jpg' },
        { desc: '而我只是一个QQ肠', url: 'https://imgbed.heliar.top/i/G4YYaUbHaS62Acf-.jpg' },
        { desc: '小猪魔法', url: 'https://imgbed.heliar.top/i/nEe02eA-RY7p7Ehl.jpg' },
        { desc: 'wink一下', url: 'https://imgbed.heliar.top/i/PSfpaNyQU1Pe2Qvm.jpg' },
        { desc: '再睡拱死你', url: 'https://imgbed.heliar.top/i/2IqW2TDCBMsl81T9.jpg' },
        { desc: '忙着玩手机', url: 'https://imgbed.heliar.top/i/AKsZ0ADV1nbpN6Xh.jpg' },
        { desc: '饶了这一次呗', url: 'https://imgbed.heliar.top/i/cAIQytv_7rGo92is.jpg' },
        { desc: '气疯了你满意了吗！', url: 'https://imgbed.heliar.top/i/ST0SkhSSAT0tNcJ7.jpg' },
        { desc: '熟睡中', url: 'https://imgbed.heliar.top/i/pa6PWuk1W2T9sM_i.jpg' },
        { desc: '突然出现', url: 'https://imgbed.heliar.top/i/rH-ZeZBzySvEydf1.jpg' },
        { desc: '你这样对我我会哭的呀', url: 'https://imgbed.heliar.top/i/JVjz3snh4bQPeJPB.jpg' }
    ];

    if (typeof window.registerStickerPack === 'function') {
        window.registerStickerPack('猪猪', list);
    } else {
        window._MCYT_PENDING_STICKERS['猪猪'] = list;
    }
})();
