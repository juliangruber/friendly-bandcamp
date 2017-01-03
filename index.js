const bandcamp = require('node-bandcamp')

module.exports = link => Promise
  .all([
    bandcamp.getDetails(link),
    bandcamp.getTrack(link)
  ])
  .then(ret => {
    const info = ret[0]
    const stream = ret[1]
    return {
      name: `${info.artist} - ${info.album} - ${info.title}.mp3`,
      stream
    }
  })
