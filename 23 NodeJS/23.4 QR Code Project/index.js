/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
import { image } from 'qr-image';
import { createWriteStream, writeFile } from 'fs';

inquirer
    .prompt([{
        type: 'input',
        name: 'url',
        message: 'Type the URL:',
    }
    ])
    .then((answers) => {
        const url = answers.url;
        const qr = image(url);
        qr.pipe(createWriteStream('qr-code.png'));
        writeFile("url.txt", url, () => {
            if (err) throw err;
            console.log('The url has been saved in the file!');
        })
        console.log('QR code generated and saved as qr-code.png');

    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });