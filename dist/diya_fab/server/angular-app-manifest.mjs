
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/home",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/home"
  },
  {
    "renderMode": 2,
    "route": "/aboutus"
  },
  {
    "renderMode": 2,
    "route": "/projects"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6103, hash: '39cfa819124d38d143d8c8330b7b163160d216e7575ce017d5cf540f3f6e56a8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1056, hash: '07566997c5801590915a47adcf3a5e893b76df79b25986e1122b7f0a277c3fa9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'aboutus/index.html': {size: 14466, hash: '6c51ec2e8cfdb9aa2902af038c9dd9376e96deff1e64f5f3dd06a7a6ac410f9e', text: () => import('./assets-chunks/aboutus_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 25729, hash: '9e955a81e2a1e0cbc9cc1a5f07ffb5a39972a662b10aa9cf318978517af31b6b', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 20839, hash: '83d6e673f036f0c1f7f24eaf55702cc0bc1ad198111be349b0046662c679dbef', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 15995, hash: '7c1d4fda0449f7ae89c39fa65c4506974d7cfddb636adcdc6a980ec0a7f17c6a', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-PYBY444H.css': {size: 309695, hash: 'PpOV3BQybnM', text: () => import('./assets-chunks/styles-PYBY444H_css.mjs').then(m => m.default)}
  },
};
