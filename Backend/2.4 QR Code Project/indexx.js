/*
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import fs from 'fs';
import {input} from '@inquirer/prompts';
import QRCode from 'qrcode';

const page = await input({message: 'What is the link?'});
QRCode.toFile('qrGenerated.png', page);
fs.writeFile('userUrl.txt', page, (err) => {
    if (err) throw err;
    console.log('Qrcode saved successfully!');
});
console.log("Qr code generated successfully!");
