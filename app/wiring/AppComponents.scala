package wiring

import play.api.routing.Router
import controllers.Application
import play.api.ApplicationLoader.Context
import play.api.{BuiltInComponentsFromContext, NoHttpFiltersComponents}
import router.Routes

class AppComponents(context: Context) extends BuiltInComponentsFromContext(context) with NoHttpFiltersComponents {
  override lazy val router: Router = new Routes(
    httpErrorHandler,
    new Application(controllerComponents)
  )
}
