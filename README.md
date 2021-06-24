# NotionAPI JavaScript SDK Example

This project showcases one of the many possibilities of NotionAPI.
Here I created an `express` server and connected to a database on `Notion` that has several users with different fields.

The end result is a web page that displays all the information that we just fetch.

## Running the app
If you would like to run this project, you'll need to create a `.env` file in the root directory and inside you should had your `NotionAPI key` and your `Database ID` like so
```
NOTION_API_KEY = [Here you should insert your key]
NOTION_API_DATABASE = [Here you should insert your key]
```

If you don't know how to get your key, go to [developers.notion.com](https://developers.notion.com/), press **My Integrations**, choose _New Integration_ and once you fill all the info, you should get a `Internal Integration Token`.

If you don't know how to get your Database id, check the **Where can I find my database's ID?** of this [NotionAPI doc](https://developers.notion.com/docs/working-with-databases)

## Here's a screenshot of the result
![Notion API Screenshot](https://raw.githubusercontent.com/ItzaMi/notion-api/main/notion-api-screenshot.png)

