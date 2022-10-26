package com.gatling.tests.api

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class apiUpdateProductTest extends Simulation {
  val httpProtocol = http.
    baseUrl("https://fakestoreapi.com")
  val UpdateProductScn = scenario("UpdateProduct")
    .exec(http("UpdateProduct")
      .put("/products/7")
      .header("content-type", "application/json")
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
        jsonPath("$.id").is("7"))).pause(1)

  setUp(UpdateProductScn.inject(rampUsers(100).during(55))).protocols(httpProtocol)
}


