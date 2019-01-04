package controllers

import play.api.mvc._

class Application(components: ControllerComponents) extends AbstractController(components) {
  def healthcheck = Action {
    Ok("healthy")
  }
}
