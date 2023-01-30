const { Client } = require("@notionhq/client")
const notion = new Client({ auth: "secret_fRo5dOuwVzYTNjcbMCBJ7jsiAVkUJztborNLyAhcqZR" })

exports.handler = async function(event, context) {
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

  return {
    statusCode: 200,
    body: JSON.stringify(data)
  };
}