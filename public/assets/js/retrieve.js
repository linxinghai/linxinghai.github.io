const { Client } = require('@notionhq/client');

const notion = new Client({ auth: process.env.NOTION_API_KEY });

(async () => {
  const databaseId = '668d797c-76fa-4934-9b05-ad288df2d136';
  const response = await notion.databases.retrieve({ database_id: databaseId });
  console.log(response);
})();