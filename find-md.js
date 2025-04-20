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
    SDFSDSDSDS
  } catch (error) {
    // Handle potential errors (like permission denied)
    console.log('YOU WONT CATCH ME111')
  }
}

// --- Script Execution ---

// Define the target extension
const targetExtension = '.md';

// Determine the starting directory: use argument if provided, otherwise current directory '.'
const startDir = process.argv[2] || '.'; // process.argv[2] captures the first argument after the script name

// Resolve the starting path to an absolute path for clarity in output
const absoluteStartDir = path.resolve(startDir);

console.log('TROLOLO!');
