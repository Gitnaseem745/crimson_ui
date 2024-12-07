// #!/usr/bin/env node

// import { Command } from 'commander';
// import fs from 'fs';
// import path from 'path';
// import fetch from 'node-fetch';

// const program = new Command();

// program
//   .name('crimson-ui-cli')
//   .description('CLI to selectively install components from Crimson UI')
//   .version('1.0.0');

// // Define the install command
// program
//   .command('install <component>')
//   .description('Install a specific component into your project')
//   .action(async (component) => {
//     // Construct the base URL for the components
//     const repoURL = `https://raw.githubusercontent.com/Gitnaseem745/crimson_ui/main/components/ui/`;
//     const componentPath = `${component.toLowerCase()}/${component}.tsx`;
//     const fileURL = `${repoURL}${componentPath}`;

//     // Create the folder for components if it doesn't exist
//     const componentDir = path.join(process.cwd(), 'components');
//     if (!fs.existsSync(componentDir)) {
//       fs.mkdirSync(componentDir);
//     }

//     const filePath = path.join(componentDir, `${component}.tsx`);

//     try {
//       console.log(`Fetching ${filePath} from ${fileURL}...`);
//       const response = await fetch(fileURL);
//       if (!response.ok) throw new Error(`Failed to fetch ${component}.tsx`);

//       const content = await response.text();
//       fs.writeFileSync(filePath, content, 'utf8');
//       console.log(`Installed ${component}.tsx in ${componentDir}`);
//     } catch (error) {
//       console.error(`Error installing ${component}.tsx: ${error.message}`);
//     }
//   });

// program.parse(process.argv);



const fetch = require('node-fetch');
const unzipper = require('unzipper');
const path = require('path');
const fs = require('fs');

program
  .command('install <component>')
  .description('Install a specific component folder as a ZIP archive and extract it')
  .action(async (component) => {
    const repoURL = `https://github.com/Gitnaseem745/crimson_ui/archive/refs/heads/main.zip`;
    const zipPath = path.join(process.cwd(), 'component.zip');
    const extractDir = path.join(process.cwd(), 'components');

    // Ensure the extract directory exists
    if (!fs.existsSync(extractDir)) {
      fs.mkdirSync(extractDir);
    }

    try {
      console.log('Downloading ZIP archive...');
      const response = await fetch(repoURL);
      if (!response.ok) throw new Error('Failed to download ZIP archive');

      const fileStream = fs.createWriteStream(zipPath);
      response.body.pipe(fileStream);
      await new Promise((resolve, reject) => {
        fileStream.on('finish', resolve);
        fileStream.on('error', reject);
      });

      console.log('Extracting ZIP archive...');
      await fs.createReadStream(zipPath)
        .pipe(unzipper.Extract({ path: extractDir }))
        .promise();

      // Move the extracted folder to the correct location
      const extractedComponentPath = path.join(extractDir, `crimson_ui-main/components/UI/${component}`);
      if (fs.existsSync(extractedComponentPath)) {
        fs.renameSync(extractedComponentPath, path.join(extractDir, component));
      }

      console.log(`Successfully installed ${component} in ${extractDir}`);
    } catch (error) {
      console.error(`Error installing ${component}: ${error.message}`);
    } finally {
      // Clean up ZIP file
      if (fs.existsSync(zipPath)) {
        fs.unlinkSync(zipPath);
      }
    }
  });
