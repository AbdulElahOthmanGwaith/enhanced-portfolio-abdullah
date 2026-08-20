const fs = require('fs');
const path = require('path');

const root = __dirname;
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');
const assert = (condition, message) => {
  if (!condition) {
    throw new Error(message);
  }
};

const index = read('index.html');
const script = read('script.js');
const validator = read('form-validation.js');
const scrollToTop = read('scroll-to-top.js');
const serviceWorker = read('service-worker.js');
const manifest = JSON.parse(read('manifest.json'));

assert(index.startsWith('<!doctype html>'), 'index.html must start with a doctype');
assert((index.match(/id="scroll-to-top-btn"/g) || []).length === 1, 'scroll-to-top button id must be unique');
assert(index.includes('id="contact-form"'), 'contact form id must be present');
assert(index.includes('<label for="name">'), 'name field must have a label');
assert(index.includes('<label for="email">'), 'email field must have a label');
assert(index.includes('<label for="message">'), 'message field must have a label');
assert(!/<a\s+href="#"/i.test(index), 'placeholder links must not remain');
assert(script.includes("Utils.$('#contact-form')"), 'runtime form selector must match HTML');
assert(!script.includes('    ContactForm.init();'), 'legacy duplicate contact handler must not be initialized');
assert(!script.includes('document.body.appendChild(panel);'), 'settings panel must not be duplicated');
assert(validator.includes('const fieldName = field.name || field.id;'), 'validation must use stable field names');
assert(scrollToTop.includes('document.getElementById(this.config.buttonId)'), 'scroll-to-top must reuse existing button');
assert(manifest.start_url === './', 'manifest start_url must be relative for project pages');
assert(manifest.scope === './', 'manifest scope must be relative for project pages');
assert(serviceWorker.includes("const CACHE_NAME = 'portfolio-v2';"), 'service worker cache must be versioned');
assert(serviceWorker.includes("new URL(asset, self.registration.scope)"), 'service worker assets must use deployment scope');
assert(fs.existsSync(path.join(root, 'assets/profile-image.svg')), 'manifest icon must exist');

console.log('All enhanced portfolio static checks passed.');
