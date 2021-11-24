const assert = require('assert');
describe("Test example", () => {
	  test("GET /", (done) => {
		      request(app)
		        .get("/")
		        .expect("Content-Type", /json/)
		        .expect(200)
		        .expect((res) => {
				        res.body.data.length = 1;
				        res.body.data[0].email = "test@example.com";
				      })
		        // Even more logic goes here
  });
// More things come here
 });
