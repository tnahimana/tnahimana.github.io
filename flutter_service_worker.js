'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "0c825793a86eb71746cf2908238648ae",
"index.html": "d1ff2343cd67365224b42082b1b55c7c",
"/": "d1ff2343cd67365224b42082b1b55c7c",
"main.dart.js": "766af51606594346c4dcf0ac9676b06f",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "ca0a9fdaabd2f96b57053e26d4d4e328",
"assets/images/deposit.png": "185b3adad1254bca3ac38ea2f471ad53",
"assets/images/electrix_wasac-removebg-preview.png": "6e97d3a86ff1f4a0d8b906c3521614a1",
"assets/images/password-reset.png": "be664d2a5e860025242a523d9d55e2aa",
"assets/images/passwords.png": "068a9a5973d3b01325c14ec0bacad5c9",
"assets/images/other-screens.jpeg": "271a95d8b29bb5ec32383a6e9af35129",
"assets/images/New_Project__1_-removebg-preview.png": "5a32ff5ed21846f60d0610a151761b6f",
"assets/images/cart.avif": "1cdd30cfc50480d2fee62cad1b77f0a2",
"assets/images/cart.png": "d6907476d89103275de282265bbf8346",
"assets/images/settings.png": "25c311e1d190a0097fe3e4fbeafcc7f8",
"assets/images/electri_wasac.png": "e7e17dab1c99927d06a1ab459c189e10",
"assets/images/paytv.png": "d005bfcbb21ca93d9ad1a74003ac8147",
"assets/images/airtime.gif": "5a21f9392b23fd8b63622e12270998d6",
"assets/images/electrix_wasac.jpg": "d853e379e1e0c5b2e7c69f886ead278e",
"assets/images/momo.png": "306de77a27c7306c4a98b64b026354ca",
"assets/images/electricity-transparent.png": "83a0fdbd0887e32c5641580b27d9e180",
"assets/images/airtel-money.png": "b83df921b9c47d702380ea7e6e2ae1d0",
"assets/images/airtel.png": "780b0edc262ad9e9ae648856a7254ace",
"assets/images/tamper.png": "eeea7cdfd2e32c02a6954138509cbb87",
"assets/images/user.png": "1a817a95a42d8c43031378d122a05ffe",
"assets/images/wasac.png": "e98495cb8081d2eca2c959123277686b",
"assets/images/momo-from-mtn.png": "460d2d98a49ed1239b220d5d05a1662e",
"assets/images/momo-by-mtn.png": "5d7807364f6ba57d8fc0a02dec78ce63",
"assets/images/payment.png": "9ffc3b8965fe1e4ee8683cd5f55a192d",
"assets/images/electrix_wasac__1_-removebg-preview%2520(1).png": "61153475fd0382bc387402bbcdbee2ef",
"assets/images/mtn.png": "3a98e4883dcb042f6d7373dd996aa9c4",
"assets/images/light.png": "f1b89e3b355226b01e4e1b4718c96d06",
"assets/images/startimes-logo.png": "4afcadbc1cab32c70ad6c49f39c49087",
"assets/images/logo.png": "0a310294472fcc49903e4ef212c1bcf1",
"assets/images/electrix.png": "8c469512d7d8697814213c0abdf9860f",
"assets/images/water.png": "68fb977ceecb496ddf72ba9d87ccc336",
"assets/images/shop-cart.jpeg": "3127498fa78b0521f57305e69a723c84",
"assets/images/profile.jpg": "4696ed1b106f934c463146b905d12e25",
"assets/images/eucl.png": "32b8c9303e080c9f07457d68b8ddb0b4",
"assets/images/electricity.png": "6e67db5fe40e3063dfc5a6c5a835ca33",
"assets/images/credit.png": "5024d0ce243e63d76379993b9a4355ef",
"assets/images/simcard.png": "06ea551d3f279769b4892279cb37314f",
"assets/images/electrix-transparent.png": "8c469512d7d8697814213c0abdf9860f",
"assets/images/startime.png": "8e5a3afd752f8f85567ac429cf9d4f8f",
"assets/images/digital-wallet.png": "650196cd94f713d7a4f292c810876427",
"assets/images/internetarchivebooks_itemimage.png": "e54a08f930ecd9bda8d1f0e21d645227",
"assets/images/airtel-momo.jpg": "69c6222c3b21739f094735166499a9b2",
"assets/images/New-mtn-logo.jpg": "2e8c3706ad66b4bf8df1dd67f5f70456",
"assets/images/New-Airtel-logo.jpeg": "a8dbb4d53d178f6944ab94aa22b23a93",
"assets/images/airtime-logo.png": "eeda9de4692d89a7d584219eb00c5575",
"assets/images/reg.png": "225fa042cf374dc388f4706e0199175e",
"assets/images/wrong-payment.png": "f190548a7901a161ca3c7ab0303046e0",
"assets/images/electrix_reg.png": "7903852d679c28b2eaac1ebc58b27fb5",
"assets/images/simcard.jpeg": "ba162f73f1f40de5bb2c70dff7c38338",
"assets/images/electri_reg.png": "fd1723ff9aeaacc95e0b717a8ec7fd98",
"assets/images/e-wallet.png": "29a59e7d4dcf492a131d03be3d61328d",
"assets/AssetManifest.json": "1660b526530646e65294b841ec96bf85",
"assets/NOTICES": "ad8c403b43c9f8a1d74f3db857463e33",
"assets/FontManifest.json": "0ad22b8a42c11f001f903002707f5b1d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "26b9fd71b670b049ed69baf4af1ec518",
"assets/packages/awesome_dialog/assets/rive/info_reverse.riv": "c6e814d66c0e469f1574a2f171a13a76",
"assets/packages/awesome_dialog/assets/rive/question.riv": "00f02da4d08c2960079d4cd8211c930c",
"assets/packages/awesome_dialog/assets/rive/warning.riv": "0becf971559a68f9a74c8f0c6e0f8335",
"assets/packages/awesome_dialog/assets/rive/info.riv": "2a425920b11404228f613bc51b30b2fb",
"assets/packages/awesome_dialog/assets/rive/success.riv": "73618ab4166b406e130c2042dc595f42",
"assets/packages/awesome_dialog/assets/rive/error.riv": "e74e21f8b53de4b541dd037c667027c1",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/error.flr": "e3b124665e57682dab45f4ee8a16b3c9",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/packages/cool_alert/assets/flare/warning_check.flr": "ff4a110b8d905dedb4d4639a17399703",
"assets/packages/cool_alert/assets/flare/loading.flr": "b6987a8e6de74062b8c002539d2d043e",
"assets/packages/cool_alert/assets/flare/info_check.flr": "f6b81c2aa3ae36418c13bfd36d11ac04",
"assets/packages/cool_alert/assets/flare/success_check.flr": "9d163bcc6f6b58566e0abde7761a67a0",
"assets/packages/cool_alert/assets/flare/error_check.flr": "d9f54791d0d79935d22206966707e4b3",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "189a20efbb766defa36172e062db2e3e",
"assets/fonts/MaterialIcons-Regular.otf": "6cb509de52e279f1efe44cfe8c993e8b",
"assets/assets/images/electrix-login.png": "c95838e5e48faf1aae84be3812d2bc70",
"assets/assets/images/electrix_icons_adaptive_fore.png": "5d664ccdd0ed809071a866ed25935c28",
"assets/assets/images/electrix_icons.png": "858aca2b5480921e0f1a328a8490ba90",
"assets/assets/images/electrix_icons_adaptive_back.png": "5ff1745c0dfb78988f6b84666f6e98cb",
"assets/assets/images/electrix-home.png": "134e000f11193744e5d14ba7d1fec8d3",
"assets/assets/fonts/Lato-Black.ttf": "d83ab24f5cf2be8b7a9873dd64f6060a",
"assets/assets/fonts/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/mo_re.ttf": "9c46095118380d38f12e67c916b427f9",
"assets/assets/fonts/Lato-Light.ttf": "2bcc211c05fc425a57b2767a4cdcf174",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/mo_me.ttf": "a98626e1aef6ceba5dfc1ee7112e235a",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
