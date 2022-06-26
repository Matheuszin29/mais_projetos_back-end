const { resolveObjectURL } = require('buffer');
const { read } = require('fs');
const puppeteer = require('puppeteer');
const readlinesync = require('readline-sync');

console.log('bem vindo ao bot');

async function robo() {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    const moedabase = readlinesync.question('informe uma moeda base: ') || 'dolar';
    const moedafinal = readlinesync.question('infomer a moeda desejada: ') || 'real';
    const qualquerURL = `https://www.google.com/search?q=${moedabase}+para+${moedafinal}&oq=${moedabase}+para+${moedafinal}&aqs=chrome..69i57j0i512l9.3615j1j7&sourceid=chrome&ie=UTF-8`;
    await page.goto(qualquerURL);
    await page.screenshot({ path: 'example.png' });

    const resultado = await page.evaluate(() => {
        return document.querySelector('.a61j6.vk_gy.vk_sh.Hg3mWc').value;
    });

    console.log(`o valor de 1 ${moedabase} em ${moedafinal} é ${resultado} `);

    await browser.close();
};
robo();