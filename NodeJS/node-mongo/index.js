const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const url = "mongodb://localhost:27017/";

const database = "confusion";

MongoClient.connect(url, function (err, client) {
  //checks whether the error is null or not.
  assert.equal(err, null);

  //if no error then proceeds to next line.
  console.log("Connected !");
  const db = client.db(database);
  const collection = db.collection("dishes");
  collection.insertOne(
    { name: "Uthapizza", description: "test" },
    function (err, result) {
      assert.equal(err, null);

      console.log("After Insert ---->>>\n");
      //console.log(result.ops);
      collection.find({}).toArray((err, docs) => {
        assert.equal(err, null);

        console.log("Found:\n");
        console.log(docs);

        db.dropCollection("dishes", (err, result) => {
          assert.equal(err, null);

          client.close();
        });
      });
    }
  );
});
