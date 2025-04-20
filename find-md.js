#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Recursively finds all files with the specified extension in a directory.
 * @param {string} dir - The directory path to search within.
 * @param {string} ext - The file extension to look for (e.g., '.md').
 */
function findFilesByExtension(dir, ext) {
  try {
    // Read all entries (files and subdirectories) in the current directory
    // 'withFileTypes: true' gives us Dirent objects, avoiding extra stat calls
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
      // Construct the full path for the entry
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        // If it's a directory, recurse into it
        findFilesByExtension(fullPath, ext);
      } else if (entry.isFile() && path.extname(entry.name).toLowerCase() === ext.toLowerCase()) {
        // If it's a file and has the target extension (case-insensitive), print its path
        console.log(fullPath);
      }
    }
  } catch (error) {
    // Handle potential errors (like permission denied)
    if (error.code === 'EACCES' || error.code === 'EPERM') {
      console.error(`Permission denied accessing: ${dir}`);
    } else {
      console.error(`Error processing directory ${dir}: ${error.message}`);
    }
  }
}

// --- Script Execution ---

// Define the target extension
const targetExtension = '.md';

// Determine the starting directory: use argument if provided, otherwise current directory '.'
const startDir = process.argv[2] || '.'; // process.argv[2] captures the first argument after the script name

// Resolve the starting path to an absolute path for clarity in output
const absoluteStartDir = path.resolve(startDir);

console.log(`Searching for *${targetExtension} files in: ${absoluteStartDir}\
