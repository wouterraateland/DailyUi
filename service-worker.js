"use strict";function setOfCachedUrls(a){return a.keys().then(function(a){return a.map(function(a){return a.url})}).then(function(a){return new Set(a)})}var precacheConfig=[["/dailyui/index.html","c28a4f7c13691a11e3f1acf772a792f9"],["/dailyui/static/css/main.3bacec37.css","4fe9c0fcc5a2a95d6c4bf8b812207242"],["/dailyui/static/js/0.38201f42.chunk.js","0ed7e91abe0d5b74f34572e59663ec06"],["/dailyui/static/js/1.d1e5ccfb.chunk.js","4d9c4c3a83defd23b1bf83d73779f178"],["/dailyui/static/js/10.b2cb5020.chunk.js","f9d8d828df83bd9435bb2905d9a19c82"],["/dailyui/static/js/11.6d5247fe.chunk.js","151c666e279b85de05589dca08d20040"],["/dailyui/static/js/12.5ad3177a.chunk.js","e7a2275a23a1f3aaadb26361c7d3719b"],["/dailyui/static/js/13.4db6f41b.chunk.js","4083162653df20fb5f9897d4dd8e75fc"],["/dailyui/static/js/14.a56eab8d.chunk.js","ca16553ea4b2bd4a4b5c8ee51c6e6477"],["/dailyui/static/js/15.1da2d7f1.chunk.js","26c3edcc93c319950462641c139248a8"],["/dailyui/static/js/16.fe83233f.chunk.js","475a0a0ee2916e5a38283089194a5de3"],["/dailyui/static/js/17.47bec9ae.chunk.js","1126209b0282c0165d08584b6bddf75f"],["/dailyui/static/js/18.44dd1671.chunk.js","62df864c0884ab77847b7d858da5d556"],["/dailyui/static/js/19.576576d1.chunk.js","e7e4193e5cbb2f6fec75f0edf176a1ce"],["/dailyui/static/js/2.df9a3c26.chunk.js","c2b80e54a36f43b3d885c4be4f1a39c3"],["/dailyui/static/js/20.cebd07db.chunk.js","2388751f608ed2ebce2efb66df789305"],["/dailyui/static/js/21.68b0297b.chunk.js","6b535db9f2a47c1917a9f5ec3777b9d6"],["/dailyui/static/js/22.657fc938.chunk.js","e9ecae3cf6ae1eb4840fb2686dfab8c8"],["/dailyui/static/js/23.ad717114.chunk.js","00acebf84eb312208c49751db62d2117"],["/dailyui/static/js/24.86a9bb98.chunk.js","b2f5815381ce3936999d68fe1c4cfbbd"],["/dailyui/static/js/25.822bc03a.chunk.js","86f30aef66ff61baf7210250643a45f2"],["/dailyui/static/js/26.9acdd552.chunk.js","ea080359d262e3617f98f27b521f8d71"],["/dailyui/static/js/27.47339832.chunk.js","1f85a97bb31ac7aa27817212d0c0d0dd"],["/dailyui/static/js/28.53dcdc2b.chunk.js","bc7dc41d445add5e92dd41f3a40fbdea"],["/dailyui/static/js/29.c113b0c6.chunk.js","9149aacc9f01ece1d5784ac17b19ad2a"],["/dailyui/static/js/3.b2e9dc52.chunk.js","917b5d84b6875889b27a3a2b4cb064d4"],["/dailyui/static/js/30.1996eb7a.chunk.js","5a656bf6564ba5ce56d4ffacaa8f6d0f"],["/dailyui/static/js/31.a21601f4.chunk.js","34bf0e9daa0d9a2385c490bcff1c097b"],["/dailyui/static/js/32.8c682e8d.chunk.js","26a4dcd579d58199ce77978b8480a578"],["/dailyui/static/js/4.9607892d.chunk.js","78e1e23fbd52fe1b30dcebd9a785cae4"],["/dailyui/static/js/5.350afccc.chunk.js","c2ce34478fc1ebbd0b7369392364d567"],["/dailyui/static/js/6.6357c2b7.chunk.js","603c31f11e9e9ea935dde90a0ed79899"],["/dailyui/static/js/7.bf1d144d.chunk.js","ed956bed08a2d704f6d54878dabb1569"],["/dailyui/static/js/8.c97da7b3.chunk.js","743be3823cd88c10bbb058d32143f50d"],["/dailyui/static/js/9.18e30b3f.chunk.js","610bb78990a1e9963e70742bceb8c202"],["/dailyui/static/js/main.d93ca75b.js","0af1b1da9679b0b6f3a83ccd213f3a0d"],["/dailyui/static/media/DailyUi-001.99da61b1.jpg","99da61b19741c02b7c528106c1a586c8"],["/dailyui/static/media/DailyUi-002.0cec6c72.jpg","0cec6c723e8a0bc33b4b4fc172e2fcf2"],["/dailyui/static/media/DailyUi-003.ce30af7c.jpg","ce30af7cea525706657a2f2caaa1b31e"],["/dailyui/static/media/DailyUi-004.223b103e.jpg","223b103e0486fb9adbd4b8e053a7491f"],["/dailyui/static/media/DailyUi-005.dc7350c7.jpg","dc7350c7498cf5d3558ce63ac68c30a5"],["/dailyui/static/media/DailyUi-006.ac367c6b.jpg","ac367c6b84bfdafc74ce37be1bf7389b"],["/dailyui/static/media/DailyUi-007.5855c355.jpg","5855c355def364530bbb21c005403a39"],["/dailyui/static/media/DailyUi-008.53b4beed.jpg","53b4beedd086f673486518807a051dfd"],["/dailyui/static/media/DailyUi-009.d5a6548f.jpg","d5a6548f48ab4b4d147bd7165f5b1f94"],["/dailyui/static/media/DailyUi-010.84e94cff.jpg","84e94cffb609ae461e3e9b481bb15735"],["/dailyui/static/media/DailyUi-011.d66ea90f.jpg","d66ea90ff8f57b55ec7bd984de5bcd94"],["/dailyui/static/media/DailyUi-012.eba605ad.jpg","eba605ade39759a098dc58f90eaa3ad6"],["/dailyui/static/media/DailyUi-013.61300fde.jpg","61300fde86cd9cb7d9f363c71e77c71f"],["/dailyui/static/media/DailyUi-014.fdb7d143.jpg","fdb7d143b4931adf3c2e62d1f41142f8"],["/dailyui/static/media/DailyUi-015.9eebcc93.jpg","9eebcc930156e023852035c1838de42a"],["/dailyui/static/media/DailyUi-016.bf76806f.jpg","bf76806fccd008db79b9f1c622c14bb0"],["/dailyui/static/media/MasterCard.8aae094c.png","8aae094cfc0dcbc453bd853fd5d20292"],["/dailyui/static/media/beer_background.bd9426fe.jpg","bd9426fe8039f4dc571ef31fbb35a7ab"],["/dailyui/static/media/boat.9c749358.png","9c749358494244b253761c3b1fda9cd9"],["/dailyui/static/media/bolt.45f6f9dd.svg","45f6f9ddda00d2677089e00f339b251a"],["/dailyui/static/media/brightness.7fb6d242.svg","7fb6d242dbc9bcc388941a0967571b8e"],["/dailyui/static/media/camera.6ed54f0d.svg","6ed54f0d1ba75fa233f4c72dc848ebdc"],["/dailyui/static/media/car_on_beach.67bad4d2.jpg","67bad4d2e9d523b3c6f8b8be257ba0b8"],["/dailyui/static/media/chat_background.c99c482f.jpg","c99c482f34d9e25657dcc909f42324ab"],["/dailyui/static/media/chef_masked.76cefc26.png","76cefc2677f9fc04dc60744a631a9daf"],["/dailyui/static/media/cog.74c77045.svg","74c77045f3bda6d0693ef5f1133763b1"],["/dailyui/static/media/cog_small.fa546050.svg","fa5460506137c9ba69c10e1ebcb9dd15"],["/dailyui/static/media/contrast.10e28c41.svg","10e28c4185b527d47f9357f744f1a8c6"],["/dailyui/static/media/cursor.74287006.svg","742870069fccec406f187b97a25502d1"],["/dailyui/static/media/email.2121cc21.svg","2121cc218cde9136b2426f45b54372b9"],["/dailyui/static/media/email_dark.4f8ce5bd.svg","4f8ce5bd4c4a608e7ecdb73d27e453d4"],["/dailyui/static/media/emoji.db207f90.svg","db207f908c08da6ec6ff2cfaa0d502ac"],["/dailyui/static/media/fhc.7d0218bb.gif","7d0218bb9613d8cfd2f4b6782042424c"],["/dailyui/static/media/flag.2b1704da.svg","2b1704daa78054e3d1a949e13655da5d"],["/dailyui/static/media/heineken.de1151b2.png","de1151b26e75784e13e2db916a440a05"],["/dailyui/static/media/heineken_alcohol_free.8d7bd403.png","8d7bd403f6049e56ca05eafac20748bd"],["/dailyui/static/media/jack.5045bd29.jpg","5045bd298c1f4e6186c2a27961d15d23"],["/dailyui/static/media/keyboard.69cbb02d.png","69cbb02d830516b2828733814a10b45a"],["/dailyui/static/media/mountain_background.30ccbd30.jpg","30ccbd30c7d8345532c798103a93eae3"],["/dailyui/static/media/napapijri_logo.033458a2.png","033458a2c943e2a7cad7de5f19c6ea2f"],["/dailyui/static/media/napapijri_skidoo.737f8626.png","737f8626c6f8b89e8484f1967184536f"],["/dailyui/static/media/napapijri_skidoo_side.e3c409df.png","e3c409df0bf3749604b5bbb41dca2f25"],["/dailyui/static/media/password.89bce29d.svg","89bce29d0b98b521379ee8ebca49a93c"],["/dailyui/static/media/phone.7b61ee0d.svg","7b61ee0df65532769d13d552fc7cf3f6"],["/dailyui/static/media/pizza.4137d83a.svg","4137d83a80c86790f48b160158cbb889"],["/dailyui/static/media/pizza.e5df0ab2.png","e5df0ab2ada73baeda5ad9d9be20dffc"],["/dailyui/static/media/pizza_background.c12f9eb4.jpg","c12f9eb4d54baf080dee12f310565fb5"],["/dailyui/static/media/plane.b8d5697a.svg","b8d5697aa4b8592b8bb1019c3175ed6f"],["/dailyui/static/media/plane_background.ef52d8ff.svg","ef52d8ffc277d2b7c545be544ff52547"],["/dailyui/static/media/present_knit.b647dec7.svg","b647dec76c0ae2648119a11a50533269"],["/dailyui/static/media/sepia.9c791a20.svg","9c791a209735d694a2a41a6e16f40835"],["/dailyui/static/media/ski.f07be4d5.jpg","f07be4d57327beb3831fdd8d199f24e9"],["/dailyui/static/media/swapfiets.1f501bad.png","1f501bad91817f29f19bb04d68f4a4ee"],["/dailyui/static/media/teddy.455736be.svg","455736be7e24e6e121f17a5b1f3547d5"],["/dailyui/static/media/time2shred.c61ba31c.svg","c61ba31c8ae62d6a75b069974e069b05"],["/dailyui/static/media/walt.91797af6.jpg","91797af6a30b4907993fa2a6fd56e69f"],["/dailyui/static/media/wheel.db881b6e.svg","db881b6e4e31ce919197c1187732d53d"],["/dailyui/static/media/woods.95831a0c.jpg","95831a0cc38bed14ad3f55d2bc7b3cc0"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(a,e){var i=new URL(a);return"/"===i.pathname.slice(-1)&&(i.pathname+=e),i.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(a,e,i,c){var d=new URL(a);return c&&d.pathname.match(c)||(d.search+=(d.search?"&":"")+encodeURIComponent(e)+"="+encodeURIComponent(i)),d.toString()},isPathWhitelisted=function(a,e){if(0===a.length)return!0;var i=new URL(e).pathname;return a.some(function(a){return i.match(a)})},stripIgnoredUrlParameters=function(a,e){var i=new URL(a);return i.hash="",i.search=i.search.slice(1).split("&").map(function(a){return a.split("=")}).filter(function(a){return e.every(function(e){return!e.test(a[0])})}).map(function(a){return a.join("=")}).join("&"),i.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(a){var e=a[0],i=a[1],c=new URL(e,self.location),d=createCacheKey(c,hashParamName,i,/\.\w{8}\./);return[c.toString(),d]}));self.addEventListener("install",function(a){a.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(e){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(i){if(!e.has(i)){var c=new Request(i,{credentials:"same-origin"});return fetch(c).then(function(e){if(!e.ok)throw new Error("Request for "+i+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(i,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(a){var e=new Set(urlsToCacheKeys.values());a.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(i){return Promise.all(i.map(function(i){if(!e.has(i.url))return a.delete(i)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,i=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching);(e=urlsToCacheKeys.has(i))||(i=addDirectoryIndex(i,"index.html"),e=urlsToCacheKeys.has(i));!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(i=new URL("/dailyui/index.html",self.location).toString(),e=urlsToCacheKeys.has(i)),e&&a.respondWith(caches.open(cacheName).then(function(a){return a.match(urlsToCacheKeys.get(i)).then(function(a){if(a)return a;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});