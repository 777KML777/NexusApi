
export function readRepoFile(path : String) { 
    const fs = require('fs')
    const data = fs.readFileSync(path)
    return JSON.parse(data)
}