import { console_log } from './lib/console/console_log.js'
let dev_data = {
    today : '| 07 feb 2024 | 22 : 05 |',
    previous_day : '| 06 feb 2024 | 19 : 15 |',
    developer : 'wisetiger',
};
console_log('-- scrip.js --', '#fff', 'blue');
console_log('dev_data');
console.dir(dev_data);
console.log(dev_data.today + ' today');
console.log(dev_data.previous_day  + ' previous day');

import './app/nav/nav.js';
import './app/settings/main.js';
import './app/bookmark/main.js';