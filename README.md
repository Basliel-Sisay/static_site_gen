<h1>Static Site Generator (Day 2)</h1> 

<p>A Node.js utility that transforms Markdown into professionally styled HTML. Built as Day 2 of a 30-day coding challenge to master Regex and file manipulation.</p>

##  Features
- **Regex Pipeline:** Converts Headers, Bold, Italics, Lists, and Blockquotes.
- **Enhanced Syntax:** Support for Hyperlinks, Images, and Inline Code.
- **Decoupled Styling:** Uses an external CSS architecture for modularity.
- **Automated Generation:** Injects parsed content into a pre-defined HTML shell.

## Tech Stack
- **Runtime:** Node.js
- **Logic:** JavaScript (RegExp & fs module)
- **Styling:** CSS3 (External)

## Project Structure
```text
static_site_gen/
├── generator.js           # The conversion engine
├── .gitignore             # Keep the project light weight
├── README.md              # Markdown file for the project
├── input.md               # Source Markdown file
├── temp.css               # External stylesheet
├── template.html          # HTML design shell
├── index.html             # Generated output
├── LICENSE                # Project license
├── package-lock.json      # Locked dependecies
└── package.json           # Dependencies & scripts
```
## Usage

1. Install:

<pre>
npm install
</pre>

2. Generate:

   <pre>
     node generator.js
   </pre>

3. Preview:
   
Open index.html in your browser to view the styled output.

##  What I Learned (Day 2)

Building this Static Site Generator provided deep insights into the intersection of backend logic and frontend presentation:

- **Regular Expression Mastery:** I learned how to use capture groups and flags (like `gim`) to identify and replace complex string patterns without breaking the surrounding HTML.
- **File System (fs) Operations:** Gained hands-on experience using `fs.readFileSync` and `fs.writeFileSync` to manage a multi-file workflow.
- **Separation of Concerns:** By decoupling the content (`input.md`), the logic (`generator.js`), and the style (`temp.css`), I built a more maintainable and scalable application.
- **Template Injection:** Learned how to use string placeholders (like `{{content}}`) to dynamically build web pages.

---
