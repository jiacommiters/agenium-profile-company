
import { translations } from './src/i18n/translations';

const enKeys = Object.keys(translations.en);
const idKeys = Object.keys(translations.id);

console.log('EN Keys count:', enKeys.length);
console.log('ID Keys count:', idKeys.length);

const missingInId = enKeys.filter(k => !idKeys.includes(k));
const missingInEn = idKeys.filter(k => !enKeys.includes(k));

console.log('Missing in ID:', missingInId);
console.log('Missing in EN:', missingInEn);
