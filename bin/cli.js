#!/usr/bin/env node

import { Command } from 'commander';
import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';

const program = new Command();

program
  .name('crimson-ui-cli')
  .description('CLI to selectively install components from Crimson UI')
  .version('1.0.0');

// Define the install command
program
  .command('install <component>')
  .description('Install a specific component into your project')
  .action(async (component) => {
    // Construct the base URL for the components
    const repoURL = `https://raw.githubusercontent.com/Gitnaseem745/crimson_ui/main/components/ui/`;
    const componentPath = `${component.toLowerCase()}/${component}.tsx`;
    const fileURL = `${repoURL}${componentPath}`;

    // Create the folder for components if it doesn't exist
    const componentDir = path.join(process.cwd(), 'components');
    if (!fs.existsSync(componentDir)) {
      fs.mkdirSync(componentDir);
    }

    const filePath = path.join(componentDir, `${component}.tsx`);

    try {
      console.log(`Fetching ${filePath} from ${fileURL}...`);
      const response = await fetch(fileURL);
      if (!response.ok) throw new Error(`Failed to fetch ${component}.tsx`);

      const content = await response.text();
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Installed ${component}.tsx in ${componentDir}`);
    } catch (error) {
      console.error(`Error installing ${component}.tsx: ${error.message}`);
    }
  });

program.parse(process.argv);
