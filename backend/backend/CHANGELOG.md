# Changelog

## [0.1.3](https://github.com/bricetoffolon/toffolon-peinture-deco.fr/compare/toffolon-backend-v0.1.2...toffolon-backend-v0.1.3) (2025-04-17)


### Features

* **backend:** add upload image compression and dynamic copyright with watermark pattern ([39d594e](https://github.com/bricetoffolon/toffolon-peinture-deco.fr/commit/39d594ee11f235b529511abb135f3117d0b7e632))


### Bug Fixes

* **backend:** wrong .ext used to upload compressed img ([6e30d9c](https://github.com/bricetoffolon/toffolon-peinture-deco.fr/commit/6e30d9c64cbb9d6d4d05f6212c2f8427a58965d3))

## [0.1.2](https://github.com/bricetoffolon/toffolon-peinture-deco.fr/compare/toffolon-backend-v0.1.1...toffolon-backend-v0.1.2) (2025-04-10)


### Bug Fixes

* **back:** remove not existing shutdown method ([da0e7b9](https://github.com/bricetoffolon/toffolon-peinture-deco.fr/commit/da0e7b91ff6160e35c43a7314bd555bf6c2e4ac5))
* **back:** remove not existing shutdown method ([fe0c35d](https://github.com/bricetoffolon/toffolon-peinture-deco.fr/commit/fe0c35dbacc5b10c73134e198a98350d9d3f01e5))

## [0.1.1](https://github.com/bricetoffolon/toffolon-peinture-deco.fr/compare/toffolon-backend-v0.1.0...toffolon-backend-v0.1.1) (2025-04-10)


### Features

* Add API access and begin of post management ([3361215](https://github.com/bricetoffolon/toffolon-peinture-deco.fr/commit/336121535c2a979f99ce72f8948f2d0ddf261938))
* add backend JWT Token Auth ([a93489f](https://github.com/bricetoffolon/toffolon-peinture-deco.fr/commit/a93489ff1604e0c6495e34a53e2401adc901a8c6))
* add backend rate limit ([09ab042](https://github.com/bricetoffolon/toffolon-peinture-deco.fr/commit/09ab042ec1de021e1338fef3b84d72ed79f60f62))
* Add delete post + contact route ([ce45b32](https://github.com/bricetoffolon/toffolon-peinture-deco.fr/commit/ce45b32253ad7ad7fbf1930886ca1cc9d1d47464))
* add deploy dockerfiles ([64b3a6c](https://github.com/bricetoffolon/toffolon-peinture-deco.fr/commit/64b3a6cc1ffab7b37ef1d852b65b79243f81b7a6))
* add email template for contact ([fd4e914](https://github.com/bricetoffolon/toffolon-peinture-deco.fr/commit/fd4e914cee30711657d78425e0b0ba0bf4a1425c))
* add email template for contact ([7ae6641](https://github.com/bricetoffolon/toffolon-peinture-deco.fr/commit/7ae6641292c9873f7256f67c7f79acb79a796891))
* add global prefix ([83c2cde](https://github.com/bricetoffolon/toffolon-peinture-deco.fr/commit/83c2cde54479c7cbf1c7e353079e624b37c919f3))
* add hashing password system ([1edf80d](https://github.com/bricetoffolon/toffolon-peinture-deco.fr/commit/1edf80d97e8969b563f04014b80081d0e4076806))
* add mail verification ([c6a8d9a](https://github.com/bricetoffolon/toffolon-peinture-deco.fr/commit/c6a8d9a4b006e7178f00e2a150fb0acf2fa152a9))
* add output from backend and delete useless element ([b7e1684](https://github.com/bricetoffolon/toffolon-peinture-deco.fr/commit/b7e16842d5200491e9e284bf2e3bdf68024510ec))
* add prisma integration to project ([67fd78e](https://github.com/bricetoffolon/toffolon-peinture-deco.fr/commit/67fd78e23f60165c46b29da83ba594ce74d3ed11))
* add session based auth user ([fe1ef3d](https://github.com/bricetoffolon/toffolon-peinture-deco.fr/commit/fe1ef3d7b151cd41584c4d5b06be62f552419b17))
* new display settings for post ([cd612b5](https://github.com/bricetoffolon/toffolon-peinture-deco.fr/commit/cd612b521c43aff84b75900ad76650ca4f5d11ae))


### Bug Fixes

* **back:** image syntax & increase timeouts for uploading files ([957e59b](https://github.com/bricetoffolon/toffolon-peinture-deco.fr/commit/957e59b7693c350ec5bc98d5e822e6df8b9b1ae5))
* **back:** improve update password validation and null body handling ([1340e2d](https://github.com/bricetoffolon/toffolon-peinture-deco.fr/commit/1340e2d8aff767836eae80787ccbda8b384b044a))
* **back:** typo in deleteImage ([b45079e](https://github.com/bricetoffolon/toffolon-peinture-deco.fr/commit/b45079e24bb45a52eca6f24ae428a1a43fe22b36))
* DTO for users ([7620abc](https://github.com/bricetoffolon/toffolon-peinture-deco.fr/commit/7620abc915359146edf99fb3f2005012537ca2f8))
* dynamic origin ([d685c3d](https://github.com/bricetoffolon/toffolon-peinture-deco.fr/commit/d685c3d83e340f142e3267e43ac81b6b5571f4bf))
* enhance docker ([5ce404b](https://github.com/bricetoffolon/toffolon-peinture-deco.fr/commit/5ce404bf3300b4382597933099792af4f748750d))
* incorrect copy dockerfile ([305fb5c](https://github.com/bricetoffolon/toffolon-peinture-deco.fr/commit/305fb5c89852f08d6f3b9c7cbafc949d84a0ae17))
* prisma schema && DTO for images & posts ([1659034](https://github.com/bricetoffolon/toffolon-peinture-deco.fr/commit/16590345e552af2bf0a19c749bfb691bd0b545bc))
* small back JwtToken expiration ([9a2d838](https://github.com/bricetoffolon/toffolon-peinture-deco.fr/commit/9a2d838e08d8d2cf7fcaa36348180e1ccce782de))
* syntax error avoiding build ([be39bec](https://github.com/bricetoffolon/toffolon-peinture-deco.fr/commit/be39beccd81be17fe52df6748093f16e2084f282))
* update post system with AWS SDK V3 & copyright ([60889dd](https://github.com/bricetoffolon/toffolon-peinture-deco.fr/commit/60889ddfa31fa00459f04a050416e2cfe26739e2))
