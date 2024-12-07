#!/usr/bin/env node

const { Command } = require('commander');
const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch'); // For downloading files from GitHub

const program = new Command();

program
  .name('your-lib-cli')
  .description('CLI to selectively install components from Your Library')
  .version('1.0.0');

// Define the install command
program
  .command('install <component>')
  .description('Install a specific component into your project')
  .action(async (component) => {
    const repoURL = 'https://raw.githubusercontent.com/Gitnaseem745/crimson_ui/main/components/';
    const files = [`${component}.tsx`, `${component}.animations.js`];

    // Create the folder for components if it doesn't exist
    const componentDir = path.join(process.cwd(), 'components');
    if (!fs.existsSync(componentDir)) {
      fs.mkdirSync(componentDir);
    }

    for (const file of files) {
      const fileURL = `${repoURL}${file}`;
      const filePath = path.join(componentDir, file);

      try {
        console.log(`Fetching ${file}...`);
        const response = await fetch(fileURL);
        if (!response.ok) throw new Error(`Failed to fetch ${file}`);

        const content = await response.text();
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Installed ${file} in ${componentDir}`);
      } catch (error) {
        console.error(`Error installing ${file}: ${error.message}`);
      }
    }
  });

program.parse(process.argv);
