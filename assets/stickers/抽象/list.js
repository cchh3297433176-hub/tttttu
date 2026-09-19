/**
 * assets/stickers/抽象/list.js
 * 🎭 【抽象】表情包分组独立注册清单（共 42 张）
 */
(function() {
    'use strict';

    if (typeof window.registerStickerPack !== 'function') {
        window._MCYT_PENDING_STICKERS = window._MCYT_PENDING_STICKERS || {};
        window._MCYT_PENDING_STICKERS['抽象'] = [];
    }

    const list = [
        { desc: '这个就是我呀，会不会有点营养不良了', url: 'https://i.imgant.com/v2/tuDMWKL.jpeg' },
        { desc: '删掉，腰不想要了？', url: 'https://i.imgant.com/v2/K893NeG.jpeg' },
        { desc: '叹气', url: 'https://i.imgant.com/v2/ckPrEv8.jpeg' },
        { desc: '活着憋屈啊', url: 'https://i.imgant.com/v2/LjlZPbM.jpeg' },
        { desc: '好骚哦', url: 'https://i.imgant.com/v2/ynvlSu3.jpeg' },
        { desc: '我此刻表情无疑是悲伤的', url: 'https://i.imgant.com/v2/lLJls5V.jpeg' },
        { desc: '你是要气死妈妈么', url: 'https://i.imgant.com/v2/SIPjg3v.jpeg' },
        { desc: '去哪 和谁 回来还爱我不', url: 'https://i.imgant.com/v2/dgH4yEi.jpeg' },
        { desc: '真以为我是穷人啊', url: 'https://i.imgant.com/v2/Df5TllH.jpeg' },
        { desc: '我在你心里的重量（0kg）', url: 'https://i.imgant.com/v2/C6eN4c1.jpeg' },
        { desc: '我一定乖乖嘟', url: 'https://i.imgant.com/v2/mIGW4cS.jpeg' },
        { desc: '刚睡醒，很容易拿下', url: 'https://i.imgant.com/v2/kXItqup.jpeg' },
        { desc: '我操泥马你不要我了吗', url: 'https://i.imgant.com/v2/vXuR2E7.jpeg' },
        { desc: '又几把咋地了啊', url: 'https://i.imgant.com/v2/LRiBynf.jpeg' },
        { desc: '小狗皱眉', url: 'https://i.imgant.com/v2/CvEh0gi.jpeg' },
        { desc: '你们就欺负我这个弱智吧', url: 'https://i.imgant.com/v2/viKzqox.jpeg' },
        { desc: '老子说话没用是吧', url: 'https://i.imgant.com/v2/B2Qvzcb.jpeg' },
        { desc: '高调路过', url: 'https://i.imgant.com/v2/SXOIeXm.jpeg' },
        { desc: '哈士奇发呆', url: 'https://i.imgant.com/v2/LZVOmO8.jpeg' },
        { desc: '托腮卖萌', url: 'https://i.imgant.com/v2/hELc3LX.jpeg' },
        { desc: '开心', url: 'https://i.imgant.com/v2/sbEu9Ec.jpeg' },
        { desc: '抽烟', url: 'https://i.imgant.com/v2/M5hvApr.jpeg' },
        { desc: '我觉得我失宠了', url: 'https://i.imgant.com/v2/ZZluNGD.jpeg' },
        { desc: '老地方见', url: 'https://i.imgant.com/v2/QCIRS8O.jpeg' },
        { desc: '你要气死爸爸么', url: 'https://i.imgant.com/v2/vjtpp98.jpeg' },
        { desc: '生气', url: 'https://i.imgant.com/v2/nyTGtMB.jpeg' },
        { desc: '不知所措', url: 'https://i.imgant.com/v2/q1H7s5r.jpeg' },
        { desc: '我在哭哦，你们看见了吗，我正在流眼泪', url: 'https://i.imgant.com/v2/aY8H2kv.jpeg' },
        { desc: '这位朋友，请滚', url: 'https://i.imgant.com/v2/NqDH6c1.jpeg' },
        { desc: '我草泥马，再发这个我打死你，我下手很重的', url: 'https://i.imgant.com/v2/MmteCvC.jpeg' },
        { desc: '你们在做什么？！', url: 'https://i.imgant.com/v2/itpBKTZ.jpeg' },
        { desc: '这真是...太下流了，不过我喜欢', url: 'https://i.imgant.com/v2/5svgrbd.jpeg' },
        { desc: '哈士奇戴眼镜', url: 'https://i.imgant.com/v2/9aye7oO.jpeg' },
        { desc: '我。现在就和这个乐乐狗一样，很无语，然后，没力气，扶墙，很想哭', url: 'https://i.imgant.com/v2/aHcqUn6.jpeg' },
        { desc: '你看我想理你吗', url: 'https://i.imgant.com/v2/fGwUBR7.jpeg' },
        { desc: '躺在床上忍不住眼泪直流 麻痹 我的人生为何如此艰难', url: 'https://i.imgant.com/v2/GTf4vOh.jpeg' },
        { desc: '专业套狗（让你跑掉是我的错）', url: 'https://i.imgant.com/v2/f80XFXP.jpeg' },
        { desc: '我现在就是这个狗呀，然后呆呆傻傻地看着你，看着这个世界，因为我什么都不懂呀', url: 'https://i.imgant.com/v2/SOx3tKj.jpeg' },
        { desc: '翻白眼', url: 'https://i.imgant.com/v2/2DHRx2i.jpeg' },
        { desc: '我这么可爱叫两声咋了', url: 'https://i.imgant.com/v2/6sBbjgo.jpeg' },
        { desc: '见钱眼开', url: 'https://i.imgant.com/v2/eKP4Na8.jpeg' },
        { desc: '哈士奇害羞', url: 'https://i.imgant.com/v2/MeWtWNE.jpeg' }
    ];

    if (typeof window.registerStickerPack === 'function') {
        window.registerStickerPack('抽象', list);
    } else {
        window._MCYT_PENDING_STICKERS['抽象'] = list;
    }
})();
