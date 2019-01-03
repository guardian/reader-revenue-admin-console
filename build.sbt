name := "reader-revenue-admin-console"

version := "1.0-SNAPSHOT"

scalaVersion := "2.12.8"

libraryDependencies ++= Seq(
)

riffRaffPackageType := (packageBin in Debian).value
riffRaffManifestProjectName := "support:reader-revenue-admin-console"
riffRaffPackageName := "reader-revenue-admin-console"
riffRaffUploadArtifactBucket := Option("riffraff-artifact")
riffRaffUploadManifestBucket := Option("riffraff-builds")
riffRaffArtifactResources += (file("cloudformation.yaml"), "cfn/cfn.yaml")
