const fs = require('fs');
const { execSync } = require('child_process');

function fixMissingButtonTypes() {
  const findCmd = "grep -rl '<button' src/ | grep -v 'type='";
  let files;
  try {
    files = execSync(findCmd).toString().trim().split('\n').filter(Boolean);
  } catch(e) {
    console.log("No files found or grep failed:", e.message);
    return;
  }

  files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');

    // We already handled most <button> elements, but let's do another pass for those that might have been missed
    // if they spanned multiple lines or had unusual spacing.
    const btnRegex = /<button(?![^>]*\btype=)([^>]*)>/g;

    if (btnRegex.test(content)) {
        console.log(`Fixing buttons in ${file}`);
        const newContent = content.replace(btnRegex, '<button type="button"$1>');
        fs.writeFileSync(file, newContent, 'utf8');
    }
  });
}

fixMissingButtonTypes();
