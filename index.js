require("dotenv").config();
const { Client } = require("@notionhq/client");

const notion = new Client({ auth: process.env.NOTION_API_KEY });

module.exports = async function getDatabase() {
  const databaseId = "601f5547fa004969b151c26806af80c2";
  const response = await notion.databases.query({ database_id: databaseId });

  const responseResults = response.results.map((page) => {
    return {
      id: page.id,
      name: page.properties.Name.title[0].plain_text,
      role: page.properties.Role.rich_text[0].plain_text,
    };
  });

  return responseResults;
};
