/**
 * @license Copyright © HatioLab Inc. All rights reserved.
 */

import { default as originalI18next } from 'i18next'
import LngDetector from 'i18next-browser-languagedetector'
// import Backend from 'i18next-xhr-backend/dist/es/index.js'

import en_US from '../locales/en-US.json'
import ko_KR from '../locales/ko-KR.json'
import zh_CN from '../locales/zh-CN.json'

export const i18next = originalI18next.use(LngDetector)

i18next.init({
  fallbackLng: 'en-US',
  debug: true,
  ns: ['translations'],
  defaultNS: 'translations',
  keySeparator: false,
  interpolation: {
    prefix: '{',
    suffix: '}'
  }
  // backend: {
  //   loadPath: 'locales/{{ns}}/{{lng}}.json'
  // }
})

i18next.addResourceBundle('en-US', 'translations', en_US['en-US'], true, true)
i18next.addResourceBundle('ko-KR', 'translations', ko_KR['ko-KR'], true, true)
i18next.addResourceBundle('zh-CN', 'translations', zh_CN['zh-CN'], true, true)
