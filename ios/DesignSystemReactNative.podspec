#
#  Be sure to run `pod spec lint DesignSystemReactNative.podspec' to ensure this is a
#  valid spec and to remove all comments including this before submitting the spec.
#
#  To learn more about Podspec attributes see http://docs.cocoapods.org/specification.html
#  To see working Podspecs in the CocoaPods repo see https://github.com/CocoaPods/Specs/
#

Pod::Spec.new do |s|

      s.name         = "DesignSystemReactNative"
      s.version      = "0.0.1"
      s.summary      = "A short description of GoogleMapView."

      s.description  = <<-DESC
                       DESC

      s.homepage     = "http://EXAMPLE/GoogleMapView"
      s.license      = "MIT (example)"


      s.author             = { "David Young-Chan Kay" => "davidykay@gmail.com" }

      s.source       = { :git => "http://EXAMPLE/GoogleMapView.git", :tag => "0.0.1" }

      s.source_files  = "Classes", "Classes/**/*.{h,m}"
      s.exclude_files = "Classes/Exclude"

end
