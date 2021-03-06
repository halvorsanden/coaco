import { addMessages, init, getLocaleFromNavigator } from 'svelte-i18n'
import nb from './nb.json'
import en from './en.json'

addMessages('nb', nb)
addMessages('en', en)

init({
  fallbackLocale: 'en',
  initialLocale: getLocaleFromNavigator()
})
