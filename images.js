// ── SHOP-STORE | GAME_IMAGES ──
const GAME_IMAGES = {

  // ── JEUX ──
  freefire:      'https://cdn.cloudflare.steamstatic.com/steam/apps/2042040/header.jpg',
  pubg:          'https://cdn.cloudflare.steamstatic.com/steam/apps/578080/header.jpg',
  ml:            'https://play-lh.googleusercontent.com/GSwm5F0XWRuoLpVHVRCkAGQZWFLKJrmrUCq_9-3YsPBt3nL2tgHxq0pWJ-sIPrKD9Q=w480-h960',
  fortnite:      'https://cdn2.unrealengine.com/en-fortnite-chapter-5-season-4-absolute-doom-1920x1080-80dfd6df3db8.jpg',
  roblox:        'https://play-lh.googleusercontent.com/WNWZaK8VYOU68-IkBEMkyQE6PaEDy5lxfByUfmb8dv5Ft0hJUFf7sF-YQxjk0YOIAQ=w480-h960',
  fc:            'https://play-lh.googleusercontent.com/haQmvfU-ZU5t3r6RKPF1N3dBMcLfj3yfSq9aN0hTc3iBXxb8PJfgAcCHk0g2Q6dOFO4=w480-h960',
  efootball:     'https://play-lh.googleusercontent.com/6rAWFPFpF5kfqVxOrYgLQmibQA3eM1G9m8DuMJR3eMhsH6qMj5WG7wHaFnHa1nVi2Q=w480-h960',
  bloodstrike:   'https://play-lh.googleusercontent.com/GSwm5F0XWRuoLpVHVRCkAGQZWFLKJrmrUCq_9-3YsPBt3nL2tgHxq0pWJ-sIPrKD9Q=w480-h960',
  cod:           'https://play-lh.googleusercontent.com/MIt-9Ic03xTbMrWRwBNPrw3qf7QJFCfoxQy7DMKBXPZ4BYRKZFIpLyN-3xRHX0D5lA=w480-h960',
  coc:           'https://play-lh.googleusercontent.com/LBVMhN6yY_hGbEPJh3QT0B5e7WNTaYmq1iqD4pOmL9V9dMrXXFRqbG8QiSqO28iFJQ=w480-h960',
  brawlstars:    'https://play-lh.googleusercontent.com/iRcTKbovDrYGIILhDHxiGXB3PUMQqO1TBf-ADPdqnf1RBc4WmSmGGT3ZjXlajCiQ9dQ=w480-h960',
  hok:           'https://play-lh.googleusercontent.com/R2yYxGjaFXB5bMw8WmMiLb_Q8ZBqKZWUXu0RnFDzSNSVzEAFJQoiWcGW4BtZf8Z68lk=w480-h960',
  deltaforce:    'https://play-lh.googleusercontent.com/JC1V2lntGnFuW9b-uEPbLORtJPAJ5y_3gEm-Io1dpRsJtmJlLyYWGUfQ8T9gOBjzKXA=w480-h960',
  arenabreakout: 'https://play-lh.googleusercontent.com/6g6r_pUZG0QFMlDiU5sGJBLnFAYU-o3zXlSXkmDiJfOxQ0f_w8vKBRsAOy12JFu4DP8=w480-h960',
  stumbleguys:   'https://play-lh.googleusercontent.com/4M5aSQ0d5p4xJsqNE9BFHXiVxkLj1H5y7W8FqA3s_X5yY-mYoaYW0hVGAC0yX8r2rQ=w480-h960',
  genshin:       'https://play-lh.googleusercontent.com/So_rl6q8vLVBnVLQR6kHg0SKoqIFCPiRUiRz-FE9xBs8WZ7YkRfN5BbFH_OuVaJy1Q=w480-h960',
  wutheringwaves:'https://play-lh.googleusercontent.com/Kq1R2n55VUBM28Hxas_cMVEnAUefDHxzMxJLPKoADCbHiNXP7oKi3nFV3kBjN3gxE78=w480-h960',
  valorant:      'https://cdn.cloudflare.steamstatic.com/steam/apps/1085660/header.jpg',
  lol:           'https://cdn.cloudflare.steamstatic.com/steam/apps/2299590/header.jpg',
  minecraft:     'https://cdn.cloudflare.steamstatic.com/steam/apps/2566040/header.jpg',

  // ── ABONNEMENTS ──
  netflix:       'https://images.ctfassets.net/y2ske730sjqp/1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg',
  snapchat:      'https://play-lh.googleusercontent.com/KxeSAjPTKsXHkRoH1hVSWzEiX1gLydOp9dMbjAW42l3VqJvA2oxirAcx1BBSS2SQ0Q=w480-h960',
  crunchyroll:   'https://play-lh.googleusercontent.com/Tt3V0m-RN0KRKJP-M0vCpCRBjHpFSe0Xh5k5X5zqPxSGqG4gYQ4lXqk4QK4GQKQ4Q=w480-h960',
  spotify:       'https://play-lh.googleusercontent.com/UrY7BAZ-XfXGpfkeWg0zCCeo-7ras4DCoRalC_WXXWTK9q5b0Iw7B0YQMsVxZaNB7DM=w480-h960',
  youtube:       'https://play-lh.googleusercontent.com/lMoItBgdPPVDJsNOVtP26EKHePkwBg-PkuY9NOrc-fumRtTFP4XhpUNk_22syN4Datc=w480-h960',
  disney:        'https://play-lh.googleusercontent.com/xoGGYH2LgLibLDBoxMg-ZE17b4Br9SjkLLFiCRYP9tGJMhOCBEDe0F0s4FPZ3BSSGQ=w480-h960',
  primevideo:    'https://play-lh.googleusercontent.com/u6HLBCFAMp-eOnEXqpVOVQoqhazC3yB-7A8LvdSjI1VHWL4otrXJyNqTBbIPJ9lxHA=w480-h960',
  chatgpt:       'https://play-lh.googleusercontent.com/itbFbIFNJx4FJkf9mBz5K0T_aEbZMdRjsgqp0kGpvHpVZ1-6WZXWG9_cGWlSuuVkTQ=w480-h960',
  capcut:        'https://play-lh.googleusercontent.com/Oiup06RpMnFBb7Ht_QMhVAmP7lMk2WCpTWKm6pzlWvfaHtI7KIlwbhFnRLQJTMBSSg=w480-h960',

};
