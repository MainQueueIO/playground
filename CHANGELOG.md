# Changelog

## [0.6.1](https://github.com/MainQueueIO/playground/compare/0.6.0...0.6.1) (2026-02-22)

### 🐛 Bug Fixes

* **ci:** add fallback to gh variable get in canary build step ([#38](https://github.com/MainQueueIO/playground/issues/38)) ([2c2eb13](https://github.com/MainQueueIO/playground/commit/2c2eb1336604ca09a2e47c67a88760ffd67953fe))
* **ci:** remove registry-url and upgrade npm to unblock OIDC trusted publishing ([#36](https://github.com/MainQueueIO/playground/issues/36)) ([460dcc3](https://github.com/MainQueueIO/playground/commit/460dcc3ddef5ee13baafd0eebf82933bf02bb0ad))

### 📦 Miscellaneous tasks

* **deps:** bump dependencies and acrivate OIDC for releases ([#35](https://github.com/MainQueueIO/playground/issues/35)) ([0a25fbe](https://github.com/MainQueueIO/playground/commit/0a25fbe503cadace48a837c7868e13323ddfa67d))

### ♻️ Refactors

* **ci:** collapse Slack notify jobs and fix canary version in notification ([#40](https://github.com/MainQueueIO/playground/issues/40)) ([bda2fb6](https://github.com/MainQueueIO/playground/commit/bda2fb6315acffc69d936f0d9210ed6d35dc2ce4))
* **ci:** replace github.run_number with persistent CANARY_BUILD_NUMBER variable ([#37](https://github.com/MainQueueIO/playground/issues/37)) ([14a91dd](https://github.com/MainQueueIO/playground/commit/14a91dd6cf5a12c635f3bc68cbd90038b5d4fc23))

### ⏪ Rollbacks

* **ci:** revert CANARY_BUILD_NUMBER variable, restore run_number ([#39](https://github.com/MainQueueIO/playground/issues/39)) ([5652d47](https://github.com/MainQueueIO/playground/commit/5652d47422a10a6f8b124b0d585b409ab75fade4))

## 0.6.0 (2025-11-19)

### Features

* **ci:** add separate commands and separate ([#34](undefined/undefined/undefined/issues/34)) 146e651

## 0.5.1 (2025-11-19)

### Reverts

* **ci:** bump to latest release it deps ([#31](undefined/undefined/undefined/issues/31)) 5bc8c09

## 0.5.0 (2025-11-19)

### Features

* **deps:** add mainqueue.io linter package ([#27](undefined/undefined/undefined/issues/27)) e2d55f6

## 0.4.3 (2025-07-28)

### 🧪 Tests

* **ci:** remove gitmoji in releaseName ([#25](https://github.com/MainQueueIO/playground/issues/25)) ([305cab3](https://github.com/MainQueueIO/playground/commit/305cab3cf6adc5251247269de4d494271d51fdb4))

## 0.4.2 (2025-07-28)

### 🧪 Tests

* **ci:** check if emoji goes in releaseName ([#23](https://github.com/MainQueueIO/playground/issues/23)) ([dc7d266](https://github.com/MainQueueIO/playground/commit/dc7d266ac3effd218e9ffb7d76eeebb744bcbbbb))

## 0.4.1 (2025-07-28)

### ⏪ Rollbacks

* **deps:** rollback all libs to previous to check changelog ([#21](https://github.com/MainQueueIO/playground/issues/21)) ([381312d](https://github.com/MainQueueIO/playground/commit/381312d36f52136e9276b5027a4aab0c9eda0a38))

## 0.4.0 (2025-07-28)

### 🚀 New Features

* **ci:** add bookmark emoji in commit ([#20](https://github.com/MainQueueIO/playground/issues/20)) ([2856b21](https://github.com/MainQueueIO/playground/commit/2856b2193b13cdb921287dc45a721868f77cdad8))

## 0.3.3 (2025-07-28)

### 📦 Miscellaneous tasks

* **deps:** bump release-it and commitlint dependencies to latest ([#9](https://github.com/MainQueueIO/playground/issues/9)) ([583702c](https://github.com/MainQueueIO/playground/commit/583702c69881ab2b5bd8e8836667b11235ae7e78))

## 0.3.2 (2025-04-09)

### 🐛 Bug Fixes

* **ci:** add release it config for skipping ([f4c82d3](https://github.com/MainQueueIO/playground/commit/f4c82d377c446e64b82ea544bd95511e36fafa30))

## 0.3.1 (2025-04-08)

### 📦 Miscellaneous tasks

* add github packages canary and release ([131b907](https://github.com/MainQueueIO/playground/commit/131b907490253bd4ad0b5141c7518122ffe35656))

## 0.3.0 (2025-04-08)

### 🚀 New Features

* add logic for canary and default values ([019f828](https://github.com/MainQueueIO/playground/commit/019f828cb645e537208d5da3460484246285b9a5))

## 0.2.9 (2025-04-08)

### 💄 Code improvements

* fix lint errors ([14669a3](https://github.com/MainQueueIO/playground/commit/14669a3f63bc6817809567fdea44341fda5d2fbc))

## 0.2.8 (2025-04-08)

### 🧪 Tests

* add prints to check release ([063ef1e](https://github.com/MainQueueIO/playground/commit/063ef1e226b50e9727cc7ff6429050eff595e304))

## 0.2.7 (2025-04-08)

### 📝 Documentation

* add package.json new keyword ([353dd23](https://github.com/MainQueueIO/playground/commit/353dd2324d5c564489c458fbdcc4fd1b4005b108))

## 0.2.6 (2025-04-08)

### 🐛 Bug Fixes

* **ci:** change logic for hooks in release-it ([#5](https://github.com/MainQueueIO/playground/issues/5)) ([7ffc101](https://github.com/MainQueueIO/playground/commit/7ffc1012fdb97190ff93cac563f5a575eb415222))

## 0.2.5 (2025-04-07)

### 📦 Miscellaneous tasks

* add console log for testing ([4c6768b](https://github.com/MainQueueIO/playground/commit/4c6768b658114d9fdf0148b66469d485a802c5bf))

## 0.2.4 (2025-04-07)

### 🐛 Bug Fixes

* **jsr:** add release dirty flag ([78ea823](https://github.com/MainQueueIO/playground/commit/78ea823faeeb6bb254cbdc05ae87ab3293b17147))

## 0.2.3 (2025-04-07)

### 🐛 Bug Fixes

* **jsr:** workflow fix for jsr publish ([ef76f79](https://github.com/MainQueueIO/playground/commit/ef76f79867ddb9ffab0bac2999dbee5a5b4dd008))

## 0.2.2 (2025-04-07)

### 📦 Miscellaneous tasks

* **jsr:** add version bump ([4f04773](https://github.com/MainQueueIO/playground/commit/4f047739492b5da0ddc5d69d39d9508b99755fc6))

## 0.2.1 (2025-04-07)

### 🐛 Bug Fixes

* **jsr:** add return type ([3f21e1e](https://github.com/MainQueueIO/playground/commit/3f21e1efe2f2b8910040859d48397b281cda3998))

## 0.2.0 (2025-04-07)

### 🚀 New Features

* **ci:** add jsr support ([#3](https://github.com/MainQueueIO/playground/issues/3)) ([4a0ac1a](https://github.com/MainQueueIO/playground/commit/4a0ac1afa0ad0a5fd2e045ab0e49e292519d3bc6))

## 0.1.3 (2025-04-07)

### ♻️ Refactors

* **ci:** move build to scripts file ([29c4736](https://github.com/MainQueueIO/playground/commit/29c47366518fcba77835cad2e5dd04a6bba08bb8))

## 0.1.2 (2025-04-07)

### 🐛 Bug Fixes

* **config:** add license and extra config ([a20702d](https://github.com/MainQueueIO/playground/commit/a20702d45fdcf3743381ceaf739b7b94203e4f6e))

## 0.1.1 (2025-04-07)

### 🐛 Bug Fixes

* **ci:** activate NPM publish ([4fe09a2](https://github.com/MainQueueIO/playground/commit/4fe09a2fe547e6aa7f0b907b8daddb0e438ea7ce))

## 0.1.0 (2025-04-07)

### 🚀 New Features

* initial commit ([e84b3c2](https://github.com/MainQueueIO/playground/commit/e84b3c22f67d12f77a76089c74aef8e72e73145a))
