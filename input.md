# Level 1: Static Site Engine
This is a test for the **Bold** and *Italic* regex rules.

## Level 2: Project Overview
Here we check the horizontal rule and the blockquote.

---

> "This is a blockquote test to see if the blue border and italicized text appear correctly in the final template."

### Level 3: Technical Implementation
Now we test the list items and the code block logic.

- Feature 1: File Reading with fs
- Feature 2: Pattern Matching with Regex
- Feature 3: Template Injection

#### Level 4: Code Block Test
Below is the code that powers this transformation. If this is in a dark box, the `pre` and `code` tags are working.

```javascript
const fs = require('fs');
let changer = fs.readFileSync('input.md', 'utf-8');
// This block tests multiline capture
console.log("Success!");