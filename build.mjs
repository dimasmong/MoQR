import { cpSync, existsSync, mkdirSync, rmSync, statSync, readdirSync } from 'node:fs';
const root = process.cwd();
for (const file of ['index.html','styles.css','app.js','vendor/qr-engine.js','assets/favicon.svg']) {
  if (!existsSync(file) || !statSync(file).isFile()) throw new Error(`Missing required file: ${file}`);
}
rmSync('dist',{recursive:true,force:true});
mkdirSync('dist',{recursive:true});
for (const f of ['index.html','styles.css','app.js']) cpSync(f,`dist/${f}`);
cpSync('assets','dist/assets',{recursive:true});
cpSync('vendor','dist/vendor',{recursive:true});
console.log('MoQR build successful → dist/');
console.log('Files:',readdirSync('dist').join(', '));
