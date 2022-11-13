let baseName = '';

if (process.env.GITHUB_PAGES) {
  baseName = `/${process.env.GITHUB_PAGES}`;
}

export default baseName;