const fs = require('fs');
const path = require('path');
const dbLocation = path.resolve('data', 'db.json');

exports.readFile = async () => {
    const data = await fs.readFile(dbLocation);
    return JSON.parse(data);
}

exports.writeFile = async (data) => {
    await fs.writeFile(dbLocation, JSON.stringify(data));
}