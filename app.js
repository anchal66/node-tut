const fs = require('fs');

fs.writeFileSync('notes.txt','This file created by note y');

fs.appendFileSync('notes.txt', ' Hello')