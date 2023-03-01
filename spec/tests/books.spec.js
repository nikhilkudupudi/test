const supertest=require("supertest");
const app=require("../../app");
const {startserver} = require("../utils");

describe("all the tests for books api",async ()=>{
    beforeAll(async function(){
        await startserver();
    })
    afterAll(function(){
        //await stopserver();
    })
    const req=supertest(app);
it("test for /books post method", async ()=>{
    const data={
        id:123
    }
    const {status,body}= await req.post("/books").send(data);
    expect(status).toBe(201);
    expect(body.id).toBeDefined();
    expect(body.title).toBe("a book");
})
it('test for get',async ()=>{
    // const data={
    //     id:124
    // }
    // const {status,body}= await req.post("/books");
    // expect(status).toBe(201);
    // expect(body.id).toBeDefined();
    // expect(body.title).toBe("a book");
    const {status,body}=await req.get("/books");
    expect(status).toBe(200);
    expect(body.title).toBe("a book");
    expect(body.length).toBeGreaterThan(0);

})
})