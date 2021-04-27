
exports.seed = async function(knex) {
  // create a seed file
  await knex.raw('TRUNCATE TABLE "accounts" CASCADE');
  await knex.raw('TRUNCATE TABLE "channels" CASCADE');
  await knex.raw('TRUNCATE TABLE "videos" CASCADE');

  await knex('accounts').insert([{
    id: 1,
    user: "ev0matic",
    email: "evomatic@twitch.com"

  },
  {
    id: 2,
    user: "Asmongold",
    email: "asmon@twitch.com"

  },
  {
    id: 3,
    user: "RetroGaijin",
    email: "retroG@twitch.com"

  },
  {
    id: 4,
    user: "sodapoppin",
    email: "sodaP@twitch.com"

  },
  {
    id: 5,
    user: "Preachlfw",
    email: "preach@twitch.com"

  },
]);

await knex('channels').insert([{
  
    id: 1,
    name: "ev0matic",
    accountId: 1

  },
  {
    id: 2,
    name: "Asmongold",
   accountId: 2

  },
  {
    id: 3,
    name: "RetroGaijin",
  accountId: 3

  },
  {
    id: 4,
    name: "sodapoppin",
  accountId: 4

  },
  {
    id: 5,
    name: "Preachlfw",
    accountId: 5

  },
]);


return await knex('videos').insert([{
  
  id: 1,
  title: "evosVideos",
  accountId: 1 

},
{
  
  id: 2,
  title: "AsmonsVideos",
  accountId: 2 

},
{
  
  id: 3,
  title: "RetrosVideos",
  accountId: 3

},
{
  
  id: 4,
  title: "sodasVideos",
  accountId: 4 

},
{
  
  id: 5,
  title: "preachVideos",
  accountId: 5 

},
]);
};
