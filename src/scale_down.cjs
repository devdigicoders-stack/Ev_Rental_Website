const fs = require('fs');
const path = require('path');

function replaceInDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceInDir(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let originalContent = content;
      
      // Make headings smaller
      content = content.replace(/text-4xl md:text-5xl lg:text-6xl/g, 'text-3xl md:text-4xl lg:text-5xl');
      content = content.replace(/text-3xl md:text-4xl lg:text-5xl/g, 'text-2xl md:text-3xl lg:text-4xl');
      content = content.replace(/text-4xl md:text-5xl/g, 'text-3xl md:text-4xl');
      content = content.replace(/text-3xl md:text-5xl/g, 'text-2xl md:text-4xl');
      content = content.replace(/text-3xl md:text-4xl/g, 'text-2xl md:text-3xl');
      
      // Make cards smaller (padding)
      content = content.replace(/p-10/g, 'p-6');
      content = content.replace(/p-12/g, 'p-8');
      
      // Smaller text for descriptions
      content = content.replace(/text-xl md:text-2xl/g, 'text-lg md:text-xl');
      content = content.replace(/text-lg text-trisGray-text/g, 'text-base text-trisGray-text');
      
      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

replaceInDir('d:/DigiCoders Projects/Trish_EV/Ev_Rental_Website/src');
console.log("Done");
