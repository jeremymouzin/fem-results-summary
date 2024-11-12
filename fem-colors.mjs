import fs from 'node:fs'

fs.readFile('./style-guide.md', 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  data.split('\n').forEach((line) => {
    if (line.includes('hsl') && line.startsWith('- ')) {
      const [rawName, rawValue] = line.split(':')
      const name = "--color" + rawName.toLowerCase().replace(/[-()]/g, '').replace(/ /g, '-')
      const cssVariable = name + ':' + rawValue + ";"
      console.log(cssVariable)
    }
  })
})
