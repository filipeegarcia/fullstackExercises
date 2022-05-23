module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert(
      "accounts",
      [
        {
          id: "ae689902-da34-11ec-9d64-0242ac120002",
          active: true,
          name: "foo",
          created_at: new Date(),
        },
        {
          id: "4ca82886-5b91-46d1-9fb8-1f70d6cff35d",
          active: false,
          name: "bar",
          created_at: new Date(),
        },
      ],
      "campaigns",
      [
        {
          id: "a7b97211-a441-4093-b832-a7505055d425",
          account_id: "4ca82886-5b91-46d1-9fb8-1f70d6cff35d",
          name: "campaign",
          start_date: new Date(),
          end_date: new Date(),
          created_at: new Date(),
        },
      ],
      "clicks",
      [
        {
          campaign_id: "a7b97211-a441-4093-b832-a7505055d425",
          created_at: new Date(),
        },
      ]
    );
  },
  down: (queryInterface) => {
    return queryInterface.bulkDelete("accounts", null, {});
  },
};
