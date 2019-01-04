package wiring

import com.typesafe.scalalogging.StrictLogging
import play.api.ApplicationLoader.Context
import play.api._
import play.api.libs.logback.LogbackLoggerConfigurator

class AppLoader extends ApplicationLoader with StrictLogging {

  override def load(context: Context): Application = {
    new LogbackLoggerConfigurator().configure(context.environment)
    new AppComponents(context).application
  }
}
