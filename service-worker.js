/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "54054552f505fb739e0f2ff5cbd0c67e"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.4062724a.css",
    "revision": "ff5fd507f9cf60f9a7506e7354091b01"
  },
  {
    "url": "assets/img/1.69ac487f.png",
    "revision": "69ac487fb9b92d5518a2fc3acf4ddcd4"
  },
  {
    "url": "assets/img/2.9c0934e0.png",
    "revision": "9c0934e055e09188edecb21dd977dfde"
  },
  {
    "url": "assets/img/3.8b06c20d.png",
    "revision": "8b06c20d592626051e1d260840624d79"
  },
  {
    "url": "assets/img/4.7a7eda59.png",
    "revision": "7a7eda59fc4c7ca366ec8533f6c68cc3"
  },
  {
    "url": "assets/img/42.0fdda2e0.png",
    "revision": "0fdda2e004453c0b33708e8b5c6f7424"
  },
  {
    "url": "assets/img/5.3f3cf983.png",
    "revision": "3f3cf983ece116341c0587ad3c249aee"
  },
  {
    "url": "assets/img/52.73502b64.png",
    "revision": "73502b6473772ebe855d46f2b2b3d800"
  },
  {
    "url": "assets/img/6.7da6e347.png",
    "revision": "7da6e34788d3b6be41bfa9e4d07d86a6"
  },
  {
    "url": "assets/img/delete1.8af14636.png",
    "revision": "8af146363ca1501543d76e3bd5509c6f"
  },
  {
    "url": "assets/img/delete2.97a4b581.png",
    "revision": "97a4b581a42b9aa032cfc6322dc008e6"
  },
  {
    "url": "assets/img/diagram.46a9e59a.png",
    "revision": "46a9e59a13feed862bdcbb267932cecb"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.3486928d.js",
    "revision": "e249ae60d5e28c11cb1c5dba7764ee7d"
  },
  {
    "url": "assets/js/11.09330980.js",
    "revision": "55549af1ed6d20ef0e1bef241c30de7b"
  },
  {
    "url": "assets/js/12.fe39fc48.js",
    "revision": "65bbc134c67a83aa434a5971b949b03f"
  },
  {
    "url": "assets/js/13.25958330.js",
    "revision": "43d437556bc417dd1f638dfa009be118"
  },
  {
    "url": "assets/js/14.c77a2fa0.js",
    "revision": "88449c133cb4257cbf7c5d6d1da89fe9"
  },
  {
    "url": "assets/js/15.cb8ff6d3.js",
    "revision": "1b8869ed39373fa183c8762c28350b19"
  },
  {
    "url": "assets/js/16.4e6ff3b7.js",
    "revision": "29314a5ddc9764af5ce69985b66703f1"
  },
  {
    "url": "assets/js/17.814c8d8c.js",
    "revision": "c58f77abbfa9b523cfcb236583114602"
  },
  {
    "url": "assets/js/18.ac3e8bca.js",
    "revision": "9218fae7e5bcc0677ea7643ca1aecc25"
  },
  {
    "url": "assets/js/19.906ba924.js",
    "revision": "46a40a568c552b3ce879c60f351457c8"
  },
  {
    "url": "assets/js/2.9866f534.js",
    "revision": "ea577ccaa82e2d517999a3bdf16f6d07"
  },
  {
    "url": "assets/js/20.1ea3a510.js",
    "revision": "cd3e4cb90711e8219ba18fcf84d56826"
  },
  {
    "url": "assets/js/21.50b1ea50.js",
    "revision": "1f0b7315b7d89f23696de944a59e0da2"
  },
  {
    "url": "assets/js/22.c12c3664.js",
    "revision": "dfa70b4231a4493de97078cffabec6c9"
  },
  {
    "url": "assets/js/23.38edc9d6.js",
    "revision": "d1b0578f9dbd0df1a31377f3f51b6563"
  },
  {
    "url": "assets/js/24.73d46373.js",
    "revision": "f2a95542d08c90d139489016d49e37b1"
  },
  {
    "url": "assets/js/26.ddb41728.js",
    "revision": "8c81b1cd43d727680472e430d9f82d0a"
  },
  {
    "url": "assets/js/3.004561f2.js",
    "revision": "27eb34ffe7371d0588863fa1f9a92ec2"
  },
  {
    "url": "assets/js/4.6b18a37c.js",
    "revision": "1dbcb47074cef327f87e9a3517dfafae"
  },
  {
    "url": "assets/js/5.2c0fb0a8.js",
    "revision": "8acc44ba200d114be212a860c99d6d85"
  },
  {
    "url": "assets/js/6.e83f51e9.js",
    "revision": "6dccd841a3d393ab7ce098aadfb56384"
  },
  {
    "url": "assets/js/7.e4f9e51f.js",
    "revision": "f7046f86fc675f03c8ebadd08682df97"
  },
  {
    "url": "assets/js/8.c4a6942d.js",
    "revision": "92814cad2a3fbdae30f759ea37c4c906"
  },
  {
    "url": "assets/js/9.b27284f8.js",
    "revision": "810bcf1f1fb3763be01117ea59c5699c"
  },
  {
    "url": "assets/js/app.ff16ed5e.js",
    "revision": "feb4814c8b3f5587796555ff6e52b538"
  },
  {
    "url": "conclusion/index.html",
    "revision": "28c54fea7d5b7719d3c409ce386d16ad"
  },
  {
    "url": "design/index.html",
    "revision": "52a5fac21fa95a87905d744dcf4e1900"
  },
  {
    "url": "index.html",
    "revision": "9358cafe4799d139a9358904d985e511"
  },
  {
    "url": "intro/index.html",
    "revision": "c0e90ed3f664095558dac671e34e2ba8"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "ce345d44dc315c9a9e35b9ba6eacd2f2"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "307530f1d67363cb4ac1dbc512f46753"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "0cc5ac0805cbf963a92c879f968657f0"
  },
  {
    "url": "software/index.html",
    "revision": "34d940c638bcf0cc1f2098a31b5d4e64"
  },
  {
    "url": "test/index.html",
    "revision": "ac16a80f6006c9bac10a6a5705ca0031"
  },
  {
    "url": "use cases/index.html",
    "revision": "648e37bc7a99bb4da67d045d85bf6bbc"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
