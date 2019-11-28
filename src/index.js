import unique from 'unique-random-array'
import json from './star-wars-names-steve.json'

const all = json

const random = num => {
  let names
  if (num) {
    names = []
    for (let i = 0; i < num; i++) {
      names.push(unique(all)())
    }
  } else {
    names = unique(all)()
  }
  return names
}

const names = {
  all,
  random,
}

export default names
