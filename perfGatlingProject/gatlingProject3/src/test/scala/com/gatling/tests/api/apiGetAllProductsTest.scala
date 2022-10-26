package com.gatling.tests.api

import scala.concurrent.duration._
import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class apiGetAllProductsTest extends Simulation{

  //protocol
  val httpProtocol = http.
    baseUrl("https://fakestoreapi.com")


  val getAllProductsScn = scenario("GetAllProducts")
    .exec(http("GetAllProducts")
      .get("/products")
      .check(status.is(200))).pause(1)

  setUp(getAllProductsScn.inject(atOnceUsers(110))).protocols(httpProtocol)


}