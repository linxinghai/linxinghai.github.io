const express = require("express")
const server = express()
const { Client } = require("@notionhq/client")
const notion = new Client({ auth: "secret_fRo5dOuwVzYTNjcbMCBJ7jsiAVkUJztborNLyAhcqZR" })
server.use(express.static("public"))
server.get("/database", async function (request, response) {
  let data = await notion.databases.query({ database_id: "06dc5ca8e18e4bc2bd4dd59aa570b522" })
  data = data.results.map(i => i.properties)
  data = data.map(i => {
    return {
      id: i.ID.number,
      nam: i.Name.title[0].plain_text,
      ta: i.Tags.multi_select[0].name,
      tex: i.text.rich_text[0].plain_text,
      url: i.URL.url,
      t: i.ct.created_time,
      jso: i.JSON.rich_text[0].plain_text,
    }
  })
  response.json(data)
})

server.listen(8080)