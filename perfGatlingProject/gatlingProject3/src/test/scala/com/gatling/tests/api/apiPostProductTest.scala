package com.gatling.tests.api

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class apiPostProductTest extends Simulation{

  val httpProtocol = http.
    baseUrl("https://fakestoreapi.com")
  val CreateProductScn = scenario("CreateProduct")
    .exec(http("CreateProduct")
      .post("/products")
      .header("content-type","application/json")
      .asJson
      .body(StringBody(
        """
          |{
          |    "title": "test product",
          |    "price": 13.5,
          |    "description": "lorem ipsum set",
          |    "image": "https://i.pravatar.cc",
          |    "category": "electronic"
          |}
          |""".stripMargin)).asJson
      .check(
        status.is(200),
        jsonPath("$.title").is("test product"))).pause(1)

  setUp(CreateProductScn.inject(atOnceUsers(60))).protocols(httpProtocol)
}
