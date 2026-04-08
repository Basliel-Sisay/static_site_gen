const fs = require('fs');

function generate(){
    try{
    if (!fs.existsSync('input.md')) {
            throw new Error("Source file 'input.md' not found!");
        }

        let changer = fs.readFileSync('input.md', 'utf-8');

            changer = changer.replace(/^# (.*$)/gim, '<h1>$1</h1>');//for header 1

    changer = changer.replace(/^## (.*$)/gim, '<h2>$1</h2>');//for header 2

    changer = changer.replace(/^### (.*$)/gim, '<h3>$1</h3>');//for header 3

    changer = changer.replace(/^#### (.*$)/gim, '<h4>$1</h4>');//for header 4

    changer = changer.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>');//for bold text

    changer = changer.replace(/\*(.*?)\*/gim, '<em>$1</em>');//for italic text

    changer = changer.replace(/^-\s(.*$)/gim, '<li>$1</li>');//for unordered list items

    changer = changer.replace(/^> (.*$)/gim, '<blockquote>$1</blockquote>');//for blockquotes

    changer = changer.replace(/^```([\s\S]*?)```/gim, '<pre><code>$1</code></pre>');// for code blocks

    changer = changer.replace(/^---$/gim, '<hr>');//for horizontal rules

    changer = changer.replace(/\[(.*?)]\((.*?)\)/gim, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');//for links

    changer = changer.replace(/!\[(.*?)]\((.*?)\)/gim, '<img src="$2" alt="$1" style="max-width:100%; height:auto;">');//for images

    changer = changer.replace(/`([^`]+)`/gim, '<code>$1</code>');//for inline code
    
    changer = changer.replace(/^\s*(\d+)\.\s+(.*$)/gim, '<li>$2</li>');//for ordered list items

    changer = changer.replace(/^\s*>\s*(.*$)/gim, '<blockquote>$1</blockquote>');//for blockquotes with leading spaces

    changer = changer.replace(/^\s*-\s*(.*$)/gim, '<li>$1</li>');//for unordered list items with leading spaces 

    changer = changer.replace(/^\s*#\s*(.*$)/gim, '<h1>$1</h1>');//for header 1 with leading spaces

    changer = changer.replace(/^\s*##\s*(.*$)/gim, '<h2>$1</h2>');//for header 2 with leading spaces

    changer = changer.replace(/^\s*###\s*(.*$)/gim, '<h3>$1</h3>');//for header 3 with leading spaces   

    changer = changer.replace(/^\s*####\s*(.*$)/gim, '<h4>$1</h4>');//for header 4 with leading spaces

const template = fs.readFileSync('template.html', 'utf-8');

const finalTemplate = template.replace('{{content}}', changer);

fs.writeFileSync('index.html', finalTemplate);
}
catch(error){
    console.error("Error generating site:", error.message); 
}
}

generate();