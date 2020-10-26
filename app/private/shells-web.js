/*
 * @Author: your name
 * @Date: 2020-10-20 13:57:34
 * @LastEditTime: 2020-10-20 14:01:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /egg-simple/app/private/shells-web.js
 */
const http          = require('http')
const net           = require('net')
const url           = require('url')
const { Transform } = require('stream')
const streams = {}

const HTTP_PORT = 8080
const NET_PORT  = 1337

const httpServer = http.createServer((req, res) => {
  const id = url.parse(req.url).pathname.substr(1)
  console.log(url.parse(req.url).pathname)
  if (!streams[id]) {
    res.writeHead(404)
    res.end('Stream not found.')
    return
  }

  res.writeHead(200, {
    'Connection': 'keep-alive',
    'Content-Type': 'text/plain',
    'Access-Control-Allow-Origin': '*'
  })
  res.flushHeaders()
  streams[id]
    .on('')
    .pipe(res)
})

const ncServer = net.createServer(connection => {
  const id = Math.random().toString(32).substr(2)

  const stream = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, chunk)
    }
  })

  connection.pipe(stream)
  connection.once('end', () => {
    stream.destroy()
    delete streams[id]
  })

  streams[id] = stream

  connection.write(`Pipeline is served on http://localhost:${HTTP_PORT}/${id}\n`)
  connection.write(`Example: curl -v http://localhost:${HTTP_PORT}/${id}`)
})

ncServer.listen(NET_PORT, () => {
  console.log(`Net Server is binding on localhost:${NET_PORT}`)
})
httpServer.listen(HTTP_PORT, () => {
  console.log(`HTTP Server is binding on localhost:${HTTP_PORT}`)
})