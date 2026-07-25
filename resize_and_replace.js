const fs = require('fs');
const path = require('path');

const sizeMapping = {
  'text-[130px]': 'text-[90px]',
  'text-[110px]': 'text-[80px]',
  'text-[8rem]': 'text-[6rem]',
  'text-[7rem]': 'text-[5rem]',
  'text-[6rem]': 'text-[4.5rem]',
  'text-[5rem]': 'text-[4rem]',
  'text-[4.5rem]': 'text-[3.5rem]',
  'text-[4rem]': 'text-[3rem]',
  'text-[3.5rem]': 'text-[2.75rem]',
  'text-[2.75rem]': 'text-[2.25rem]',
  'text-[2.5rem]': 'text-[2rem]',
  'text-[22vw]': 'text-[16vw]',
  'text-[20vw]': 'text-[14vw]',
  'text-[10vw]': 'text-[7vw]',
  'text-[9vw]': 'text-[6.5vw]',
  'text-[8vw]': 'text-[6vw]',
  'text-[7vw]': 'text-[5vw]',
  'text-[76px]': 'text-[56px]',
  'text-[68px]': 'text-[50px]',
  'text-[50px]': 'text-[38px]',
  'text-8xl': 'text-7xl',
  'text-7xl': 'text-6xl',
  'text-6xl': 'text-5xl',
  'text-5xl': 'text-4xl',
  'text-4xl': 'text-3xl',
  'text-3xl': 'text-2xl',
};

// Also downscale responsive prefixes
const exactMappings = {};
for (const [key, value] of Object.entries(sizeMapping)) {
  exactMappings[key] = value;
  exactMappings[`sm:${key}`] = `sm:${value}`;
  exactMappings[`md:${key}`] = `md:${value}`;
  exactMappings[`lg:${key}`] = `lg:${value}`;
  exactMappings[`xl:${key}`] = `xl:${value}`;
  exactMappings[`2xl:${key}`] = `2xl:${value}`;
}

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.match(/\.(tsx|ts|css|json)$/)) results.push(file);
    }
  });
  return results;
}

const files = walk('./src');
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  // 1. Safe size replacement (only apply if font-national2 is in the className)
  content = content.replace(/className=(['"])(.*?)\1|className=\{([\s\S]*?)\}/g, (match, p1, p2, p3) => {
    let cls = p2 || p3;
    if (cls && (cls.includes('font-national2') || cls.includes('font-helvetica'))) {
      // Split into tokens handling both space and newlines (in backticks)
      const tokens = cls.split(/(\s+)/);
      for (let i = 0; i < tokens.length; i++) {
        if (exactMappings[tokens[i]]) {
          tokens[i] = exactMappings[tokens[i]];
        }
      }
      cls = tokens.join('');
      return p2 ? `className=${p1}${cls}${p1}` : `className={${cls}}`;
    }
    return match;
  });

  // 2. Global replacements for the font change
  content = content.replace(/font-national2/g, 'font-helvetica')
                   .replace(/--font-national2/g, '--font-helvetica')
                   .replace(/'National 2 Condensed'/g, "'Helvetica'")
                   .replace(/National 2 Condensed/g, 'Helvetica');
  
  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated ' + file);
  }
});
