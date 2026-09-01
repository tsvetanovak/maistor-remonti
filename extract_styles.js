const cssFile = await fetch('https://craftsman-bulgaria.preview.emergentagent.com/pod-backups/craftsman-bulgaria/build/static/css/main.2aa71093.css').then(r => r.text());

const matchRegex = (regex) => {
  const match = cssFile.match(regex);
  return match ? match[1] : 'not found';
};

console.log('bg-background:', matchRegex(/\.bg-background\{background-color:([^}]+)\}/));
console.log('bg-card:', matchRegex(/\.bg-card\{background-color:([^}]+)\}/));
console.log('bg-primary:', matchRegex(/\.bg-primary\{background-color:([^}]+)\}/));
console.log('text-primary:', matchRegex(/\.text-primary\{color:([^}]+)\}/));
console.log('text-muted-foreground:', matchRegex(/\.text-muted-foreground\{color:([^}]+)\}/));
console.log('text-foreground:', matchRegex(/\.text-foreground\{color:([^}]+)\}/));
console.log('border-white/10:', matchRegex(/\.border-white\\\/10\{border-color:([^}]+)\}/));
