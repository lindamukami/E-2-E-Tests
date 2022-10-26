package com.gatling.tests.api

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class apiDeleteProductTest extends Simulation{

  val httpProtocol = http.
    baseUrl("https://fakestoreapi.com")
  val DeleteProductScn = scenario("DeleteProduct")
    .exec(http("DeleteProduct")
      .delete("/products/6")
      .check(status.is(200))).pause(1)

  setUp(DeleteProductScn.inject(atOnceUsers(150))).protocols(httpProtocol)

}
