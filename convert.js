const markdownpdf = require("markdown-pdf"),
	fs = require("fs")

const docs = [
  'assert',
  'async_hooks',
  'buffer',
  'addons',
  'n-api',
  'child_process',
  'cluster',
  'cli',
  'console',
  'crypto',
  'debugger',
  'deprecations',
  'dns',
  'domain',
  'esm',
  'errors',
  'events',
  'fs',
  'globals',
  'http',
  'http2',
  'https',
  'inspector',
  'intl',
  'modules',
  'net',
  'os',
  'path',
  'perf_hooks',
  'process',
  'punycode',
  'querystring',
  'readline',
  'repl',
  'stream',
  'string_decoder',
  'timers',
  'tls',
  'tracing',
  'tty',
  'dgram',
  'url',
  'util',
  'v8',
  'vm',
  'worker_threads',
  'zlib'];

for(let name of docs) {
  markdownpdf({
	  cssPath: './pdf.css',
	  paperFormat: 'A4'
  })
	.from(`./docs/${name}.md`)
	.to(`./pdf/${name}.pdf`, function () {
    	console.log(`${name}...`);
  	});
}
