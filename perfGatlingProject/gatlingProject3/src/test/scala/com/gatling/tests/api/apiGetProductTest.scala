package com.gatling.tests.api

import scala.concurrent.duration._
import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class apiGetProductTest extends Simulation{
  //protocol
  val httpProtocol = http.
    baseUrl("https://fakestoreapi.com")


  val getSingleUserScn = scenario("GetSingleProduct")
    .exec(http("GetSingleProduct")
      .get("/products/1")
      .check(status.is(200),
        jsonPath("$.id").is("1"))).pause(1)

  setUp(getSingleUserScn.inject(atOnceUsers(65))).protocols(httpProtocol)


}
