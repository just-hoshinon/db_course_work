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
    "revision": "43be4ca2b292d8b508d8dc4a649dc951"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.6d2245f8.css",
    "revision": "4b5ffddd0ca5bd4effb0c5c71f396945"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.38551af2.js",
    "revision": "bdbe87be0392974ea413a9848c8d47f2"
  },
  {
    "url": "assets/js/11.7d903cd2.js",
    "revision": "c0a2af32e4c6630e099fca38d7ee0a76"
  },
  {
    "url": "assets/js/12.cff61b1e.js",
    "revision": "90fc85d0631307f483b608a04626fe29"
  },
  {
    "url": "assets/js/13.450783e2.js",
    "revision": "3f3e2341ad64ffa6c7ed2d715480de6e"
  },
  {
    "url": "assets/js/14.77c6c7f9.js",
    "revision": "15c0ab3388cccfc8c9ae646852aa62d3"
  },
  {
    "url": "assets/js/15.41a5d517.js",
    "revision": "9db87338180673df919053f507bfd44f"
  },
  {
    "url": "assets/js/16.4a60114d.js",
    "revision": "8abb55480262f4672bab17608e881b38"
  },
  {
    "url": "assets/js/17.39a4cf46.js",
    "revision": "13ccdd6008867a5224fee348af48d1d6"
  },
  {
    "url": "assets/js/18.eb3cbbf8.js",
    "revision": "c343ca2f2e91cda99027601427fc83a3"
  },
  {
    "url": "assets/js/19.93c434f8.js",
    "revision": "dd6041702603b4c0a4725d98e2feff32"
  },
  {
    "url": "assets/js/2.87276920.js",
    "revision": "f1fbaf26930c8e3df5229468da645732"
  },
  {
    "url": "assets/js/20.ced0e9c4.js",
    "revision": "f64a0c7ba1e0d3e652479cd31fcccf60"
  },
  {
    "url": "assets/js/21.c138b38a.js",
    "revision": "b84e3afcaccbff50cbba512d9f9234fc"
  },
  {
    "url": "assets/js/22.54849276.js",
    "revision": "17e3b411a749a1e4c5d3f7523838ee44"
  },
  {
    "url": "assets/js/23.4d060f12.js",
    "revision": "89c9dafc2d7ebf3efdc622be2cc31458"
  },
  {
    "url": "assets/js/24.f8563f36.js",
    "revision": "0f6689f75528ad2ca72c69570703618d"
  },
  {
    "url": "assets/js/26.6a6a3cbe.js",
    "revision": "ebdc7172390b026dbb6207613865d827"
  },
  {
    "url": "assets/js/3.c7bbf90b.js",
    "revision": "df2b2f1a4237e12fbb83154d670636dd"
  },
  {
    "url": "assets/js/4.94efc75b.js",
    "revision": "5cb77dedb293c42f14f48bcbfbe30f91"
  },
  {
    "url": "assets/js/5.01e2bf8a.js",
    "revision": "904af7ce6b7529d511e8a1c54ff06f25"
  },
  {
    "url": "assets/js/6.e32b7ccb.js",
    "revision": "6dba9b729873b12c5e59d030c636ba0f"
  },
  {
    "url": "assets/js/7.551916a6.js",
    "revision": "2cc8e8dd04ef7f270f4bf0509d46be80"
  },
  {
    "url": "assets/js/8.e5a36723.js",
    "revision": "8a9c1d44e37d89f9f5ac8a77b3402bfa"
  },
  {
    "url": "assets/js/9.82d705a7.js",
    "revision": "80caeb61a4a1a6761696fa75783ff18e"
  },
  {
    "url": "assets/js/app.a8ce8484.js",
    "revision": "37a59227dc09bad6b1301a8015c25e63"
  },
  {
    "url": "conclusion/index.html",
    "revision": "5acdf37fdef2b8e51d06ca750fc0f223"
  },
  {
    "url": "design/index.html",
    "revision": "f88c5001f03b34006cf30742763b14c0"
  },
  {
    "url": "index.html",
    "revision": "f15497c0fad9fde4ea3f64133c4cb64d"
  },
  {
    "url": "intro/index.html",
    "revision": "dc5553631793175e131b4d5a693ed09b"
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
    "revision": "61c113abbcacf75718b3d23afbb92457"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "98d44cd80fca357f93134e1778fba1db"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "d6333071a4084ecc0bfb4bb5c32aafe5"
  },
  {
    "url": "software/index.html",
    "revision": "5b48e63a753fc826f1b14b70e4b87b2f"
  },
  {
    "url": "test/index.html",
    "revision": "ae987f9f30417f4beb95c327c91890d9"
  },
  {
    "url": "use cases/index.html",
    "revision": "45c6527c5c71d90f63584029cc7bc98b"
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
