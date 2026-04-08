const fs = require('fs');
let changer = fs.readFileSync('input.md', 'utf-8');

    changer = changer.replace(/^# (.*$)/gim, '<h1>$1</h1>');

    changer = changer.replace(/^## (.*$)/gim, '<h2>$1</h2>');;

    changer = changer.replace(/^### (.*$)/gim, '<h3>$1</h3>');

    changer = changer.replace(/^#### (.*$)/gim, '<h4>$1</h4>');

    changer = changer.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>');

    changer = changer.replace(/\*(.*?)\*/gim, '<em>$1</em>');

    changer = changer.replace(/^-\s(.*$)/gim, '<li>$1</li>');

    changer = changer.replace(/^> (.*$)/gim, '<blockquote>$1</blockquote>');

    changer = changer.replace(/^```([\s\S]*?)```/gim, '<pre><code>$1</code></pre>');

    changer = changer.replace(/^---$/gim, '<hr>');

const template = fs.readFileSync('template.html', 'utf-8');
const finalTemplate = template.replace('{{content}}', changer);
fs.writeFileSync('index.html', finalTemplate);