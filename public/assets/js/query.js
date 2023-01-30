const { Client } = require('@notionhq/client');

const notion = new Client({ auth: "secret_fRo5dOuwVzYTNjcbMCBJ7jsiAVkUJztborNLyAhcqZR" });

(async () => {
    const databaseId = '06dc5ca8e18e4bc2bd4dd59aa570b522';
    const response = await notion.databases.query({
        database_id: databaseId,
        // filter: {
        //   or: [
        //     {
        //       property: 'In stock',
        //       checkbox: {
        //         equals: true,
        //       },
        //     },
        //     {
        //       property: 'Cost of next trip',
        //       number: {
        //         greater_than_or_equal_to: 2,
        //       },
        //     },
        //   ],
        // },
        // sorts: [
        //   {
        //     property: 'Last ordered',
        //     direction: 'ascending',
        //   },
        // ],
    });
    console.log(response);
})();