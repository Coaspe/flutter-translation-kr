import Link from "next/link";
import { useEffect, useRef } from "react";

const RightSidebar = () => {
  const divRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = divRef.current;
    if (element) {
      const top = document.documentElement.scrollTop;
      if (196 - top <= 66) {
        element.style.top = "66px";
        element.style.maxHeight = `${10315.8 - top}px`;
      } else {
        element.style.top = `${196 - top}px`;
      }
      window.onscroll = () => {
        const top = document.documentElement.scrollTop;
        if (196 - top <= 66) {
          element.style.top = "66px";
          element.style.maxHeight = `${10315.8 - top}px`;
        } else {
          element.style.top = `${196 - top}px`;
        }
      };
    }
  }, [divRef]);
  return (
    <div
      ref={divRef}
      className="fixed-col site-sidebar site-sidebar--fixed col-12 col-md-3 col-xl-2 d-none d-md-block"
      data-fixed-column=""
      style={{ position: "fixed", maxHeight: "10315.8px", top: "196px" }}
    >
      <ul className="nav flex-column">
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            data-toggle="collapse"
            href="#sidenav-1"
            role="button"
            aria-expanded="false"
            aria-controls="sidenav-1"
          >
            시작
          </a>

          <ul className="nav flex-column flex-nowrap collapse " id="sidenav-1">
            <li className="nav-item">
              <a className="nav-link" href="/get-started/install">
                1. 설치
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/get-started/editor">
                2. Set up an editor
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/get-started/test-drive">
                3. Test drive
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/get-started/codelab">
                4. Write your first app
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/get-started/learn-more">
                5. Learn more
              </a>
            </li>
            <div className="dropdown-divider"></div>
            <li className="nav-item">
              <a
                className="nav-link collapsable"
                data-toggle="collapse"
                data-target="#sidenav-1-7"
                href="#sidenav-1-7"
                role="button"
                aria-expanded="true"
                aria-controls="sidenav-1-7"
              >
                From another platform?
              </a>
              <ul
                className="nav flex-column flex-nowrap collapse show"
                id="sidenav-1-7"
              >
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/get-started/flutter-for/android-devs"
                  >
                    Flutter for Android devs
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/get-started/flutter-for/ios-devs"
                  >
                    Flutter for iOS devs
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/get-started/flutter-for/react-native-devs"
                  >
                    Flutter for React Native devs
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/get-started/flutter-for/web-devs"
                  >
                    Flutter for web devs
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/get-started/flutter-for/xamarin-forms-devs"
                  >
                    Flutter for Xamarin.Forms devs
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/get-started/flutter-for/declarative"
                  >
                    Introduction to declarative UI
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://dart.dev/overview"
                target="_blank"
                rel="noreferrer"
              >
                Dart language overview
                <span className="material-icons md-24">open_in_new</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/get-started/web">
                Building a web app
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            data-toggle="collapse"
            href="#sidenav-2"
            role="button"
            aria-expanded="false"
            aria-controls="sidenav-2"
          >
            Samples &amp; tutorials
          </a>

          <ul className="nav flex-column flex-nowrap collapse " id="sidenav-2">
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://gallery.flutter.dev"
                target="_blank"
                rel="noreferrer"
              >
                Flutter Gallery [running app]
                <span className="material-icons md-24">open_in_new</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://github.com/flutter/gallery"
                target="_blank"
                rel="noreferrer"
              >
                Flutter Gallery [repo]
                <span className="material-icons md-24">open_in_new</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://flutter.github.io/samples/"
                target="_blank"
                rel="noreferrer"
              >
                Sample apps on GitHub
                <span className="material-icons md-24">open_in_new</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/cookbook">
                Cookbook
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/codelabs">
                Codelabs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/reference/tutorials">
                Tutorials
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a
            className="nav-link active collapsed"
            data-toggle="collapse"
            href="#sidenav-3"
            role="button"
            aria-expanded="false"
            aria-controls="sidenav-3"
          >
            Development
          </a>

          <ul className="nav flex-column flex-nowrap collapse" id="sidenav-3">
            <li className="nav-item">
              <a
                className="nav-link active collapsable"
                data-toggle="collapse"
                data-target="#sidenav-3-1"
                href="/development/ui"
                role="button"
                aria-expanded="true"
                aria-controls="sidenav-3-1"
              >
                User interface
              </a>
              <ul
                className="nav flex-column flex-nowrap collapse show"
                id="sidenav-3-1"
              >
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    href="/development/ui/widgets-intro"
                  >
                    Introduction to widgets
                  </Link>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link collapsable collapsed"
                    data-toggle="collapse"
                    data-target="#sidenav-3-1-2"
                    href="/development/ui/layout"
                    role="button"
                    aria-expanded="false"
                    aria-controls="sidenav-3-1-2"
                  >
                    Building layouts
                  </a>
                  <ul
                    className="nav flex-column flex-nowrap collapse "
                    id="sidenav-3-1-2"
                  >
                    <li className="nav-item">
                      <a className="nav-link" href="/development/ui/layout">
                        Layouts in Flutter
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="/development/ui/layout/tutorial"
                      >
                        Tutorial
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="/development/ui/layout/adaptive-responsive"
                      >
                        Creating adaptive and responsive apps
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="/development/ui/layout/building-adaptive-apps"
                      >
                        Building adaptive apps
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="/development/ui/layout/constraints"
                      >
                        Understanding constraints
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="/development/ui/layout/box-constraints"
                      >
                        Box constraints
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/development/ui/interactive">
                    Adding interactivity
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/development/ui/assets-and-images"
                  >
                    Assets and images
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link collapsable collapsed"
                    data-toggle="collapse"
                    data-target="#sidenav-3-1-5"
                    href="/development/ui/navigation"
                    role="button"
                    aria-expanded="false"
                    aria-controls="sidenav-3-1-5"
                  >
                    Navigation &amp; routing
                  </a>
                  <ul
                    className="nav flex-column flex-nowrap collapse "
                    id="sidenav-3-1-5"
                  >
                    <li className="nav-item">
                      <a className="nav-link" href="/development/ui/navigation">
                        Navigation in Flutter
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="/development/ui/navigation/deep-linking"
                      >
                        Deep linking
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="/development/ui/navigation/url-strategies"
                      >
                        URL strategies
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link collapsable collapsed"
                    data-toggle="collapse"
                    data-target="#sidenav-3-1-6"
                    href="/development/ui/animations"
                    role="button"
                    aria-expanded="false"
                    aria-controls="sidenav-3-1-6"
                  >
                    Animations
                  </a>
                  <ul
                    className="nav flex-column flex-nowrap collapse "
                    id="sidenav-3-1-6"
                  >
                    <li className="nav-item">
                      <a className="nav-link" href="/development/ui/animations">
                        Introduction
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="/development/ui/animations/overview"
                      >
                        Overview
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="/development/ui/animations/tutorial"
                      >
                        Tutorial
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="/development/ui/animations/implicit-animations"
                      >
                        Implicit animations
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="/development/ui/animations/hero-animations"
                      >
                        Hero animations
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="/development/ui/animations/staggered-animations"
                      >
                        Staggered animations
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link collapsable collapsed"
                    data-toggle="collapse"
                    data-target="#sidenav-3-1-7"
                    href="/development/ui/advanced"
                    role="button"
                    aria-expanded="false"
                    aria-controls="sidenav-3-1-7"
                  >
                    Advanced UI
                  </a>
                  <ul
                    className="nav flex-column flex-nowrap collapse "
                    id="sidenav-3-1-7"
                  >
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="/development/ui/advanced/actions_and_shortcuts"
                      >
                        Actions &amp; shortcuts
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="/development/ui/advanced/focus"
                      >
                        Keyboard focus
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="/development/ui/advanced/gestures"
                      >
                        Gestures
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="/development/ui/advanced/slivers"
                      >
                        Slivers
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="/development/ui/advanced/splash-screen"
                      >
                        Splash screens
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/development/ui/widgets">
                    Widget catalog
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a
                className="nav-link collapsable collapsed"
                data-toggle="collapse"
                data-target="#sidenav-3-2"
                href="#sidenav-3-2"
                role="button"
                aria-expanded="false"
                aria-controls="sidenav-3-2"
              >
                Data &amp; backend
              </a>
              <ul
                className="nav flex-column flex-nowrap collapse "
                id="sidenav-3-2"
              >
                <li className="nav-item">
                  <a
                    className="nav-link collapsable collapsed"
                    data-toggle="collapse"
                    data-target="#sidenav-3-2-1"
                    href="#sidenav-3-2-1"
                    role="button"
                    aria-expanded="false"
                    aria-controls="sidenav-3-2-1"
                  >
                    State management
                  </a>
                  <ul
                    className="nav flex-column flex-nowrap collapse "
                    id="sidenav-3-2-1"
                  >
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="/development/data-and-backend/state-mgmt/intro"
                      >
                        Introduction
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="/development/data-and-backend/state-mgmt/declarative"
                      >
                        Think declaratively
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="/development/data-and-backend/state-mgmt/ephemeral-vs-app"
                      >
                        Ephemeral vs app state
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="/development/data-and-backend/state-mgmt/simple"
                      >
                        Simple app state management
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="/development/data-and-backend/state-mgmt/options"
                      >
                        Options
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/development/data-and-backend/networking"
                  >
                    Networking &amp; http
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/development/data-and-backend/json"
                  >
                    JSON and serialization
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/development/data-and-backend/firebase"
                  >
                    Firebase
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a
                className="nav-link collapsable collapsed"
                data-toggle="collapse"
                data-target="#sidenav-3-3"
                href="/development/accessibility-and-localization"
                role="button"
                aria-expanded="false"
                aria-controls="sidenav-3-3"
              >
                Accessibility &amp; internationalization
              </a>
              <ul
                className="nav flex-column flex-nowrap collapse "
                id="sidenav-3-3"
              >
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/development/accessibility-and-localization/accessibility"
                  >
                    Accessibility
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/development/accessibility-and-localization/internationalization"
                  >
                    Internationalization
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a
                className="nav-link collapsable collapsed"
                data-toggle="collapse"
                data-target="#sidenav-3-4"
                href="/development/platform-integration"
                role="button"
                aria-expanded="false"
                aria-controls="sidenav-3-4"
              >
                Platform integration
              </a>
              <ul
                className="nav flex-column flex-nowrap collapse "
                id="sidenav-3-4"
              >
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/development/tools/sdk/release-notes/supported-platforms"
                  >
                    Supported platforms
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/development/platform-integration/ios-app-clip"
                  >
                    Adding iOS App Clip support
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/development/platform-integration/apple-watch"
                  >
                    Apple Watch support
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/development/platform-integration/c-interop"
                  >
                    C interop
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/development/platform-integration/platform-views"
                  >
                    Hosting native Android and iOS views
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/development/platform-integration/platform-channels"
                  >
                    Writing platform-specific code
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link collapsable collapsed"
                    data-toggle="collapse"
                    data-target="#sidenav-3-4-7"
                    href="/development/platform-integration/web"
                    role="button"
                    aria-expanded="false"
                    aria-controls="sidenav-3-4-7"
                  >
                    Web
                  </a>
                  <ul
                    className="nav flex-column flex-nowrap collapse "
                    id="sidenav-3-4-7"
                  >
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="/development/platform-integration/web/faq"
                      >
                        Web FAQ
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="/development/platform-integration/web/renderers"
                      >
                        Web renderers
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="/development/platform-integration/web/initialization"
                      >
                        Custom app initialization NEW
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/desktop">
                    Desktop
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a
                className="nav-link collapsable collapsed"
                data-toggle="collapse"
                data-target="#sidenav-3-5"
                href="/development/packages-and-plugins"
                role="button"
                aria-expanded="false"
                aria-controls="sidenav-3-5"
              >
                Packages &amp; plugins
              </a>
              <ul
                className="nav flex-column flex-nowrap collapse "
                id="sidenav-3-5"
              >
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/development/packages-and-plugins/using-packages"
                  >
                    Using packages
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/development/packages-and-plugins/happy-paths"
                  >
                    Happy paths project NEW
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/development/packages-and-plugins/happy-paths/recommended"
                  >
                    Happy paths recommendations NEW
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/development/packages-and-plugins/developing-packages"
                  >
                    Developing packages &amp; plugins
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/development/packages-and-plugins/favorites"
                  >
                    Flutter Favorites program
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/development/packages-and-plugins/background-processes"
                  >
                    Background processes
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/development/packages-and-plugins/plugin-api-migration"
                  >
                    Android plugin upgrade
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://pub.dev/flutter"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Package site
                    <span className="material-icons md-24">open_in_new</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a
                className="nav-link collapsable collapsed"
                data-toggle="collapse"
                data-target="#sidenav-3-6"
                href="/development/add-to-app"
                role="button"
                aria-expanded="false"
                aria-controls="sidenav-3-6"
              >
                Add Flutter to existing app
              </a>
              <ul
                className="nav flex-column flex-nowrap collapse "
                id="sidenav-3-6"
              >
                <li className="nav-item">
                  <a className="nav-link" href="/development/add-to-app">
                    Introduction
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link collapsable collapsed"
                    data-toggle="collapse"
                    data-target="#sidenav-3-6-2"
                    href="/development/add-to-app/android"
                    role="button"
                    aria-expanded="false"
                    aria-controls="sidenav-3-6-2"
                  >
                    Adding to an Android app
                  </a>
                  <ul
                    className="nav flex-column flex-nowrap collapse "
                    id="sidenav-3-6-2"
                  >
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="/development/add-to-app/android/project-setup"
                      >
                        Project setup
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="/development/add-to-app/android/add-flutter-screen"
                      >
                        Add a single Flutter screen
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="/development/add-to-app/android/add-flutter-fragment"
                      >
                        Add a Flutter Fragment
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="/development/add-to-app/android/add-flutter-view"
                      >
                        Add a Flutter View
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="/development/add-to-app/android/plugin-setup"
                      >
                        Plugin setup
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link collapsable collapsed"
                    data-toggle="collapse"
                    data-target="#sidenav-3-6-3"
                    href="/development/add-to-app/ios"
                    role="button"
                    aria-expanded="false"
                    aria-controls="sidenav-3-6-3"
                  >
                    Adding to an iOS app
                  </a>
                  <ul
                    className="nav flex-column flex-nowrap collapse "
                    id="sidenav-3-6-3"
                  >
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="/development/add-to-app/ios/project-setup"
                      >
                        Project setup
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="/development/add-to-app/ios/add-flutter-screen"
                      >
                        Add a single Flutter screen
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/development/add-to-app/debugging"
                  >
                    Debugging &amp; hot reload
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/development/add-to-app/performance"
                  >
                    Loading sequence and performance
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/development/add-to-app/multiple-flutters"
                  >
                    Multiple Flutter instances
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a
                className="nav-link collapsable collapsed"
                data-toggle="collapse"
                data-target="#sidenav-3-7"
                href="/development/tools"
                role="button"
                aria-expanded="false"
                aria-controls="sidenav-3-7"
              >
                Tools &amp; features
              </a>
              <ul
                className="nav flex-column flex-nowrap collapse "
                id="sidenav-3-7"
              >
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/development/tools/android-studio"
                  >
                    Android Studio &amp; IntelliJ
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/development/tools/vs-code">
                    Visual Studio Code
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link collapsable collapsed"
                    data-toggle="collapse"
                    data-target="#sidenav-3-7-3"
                    href="/development/tools/devtools"
                    role="button"
                    aria-expanded="false"
                    aria-controls="sidenav-3-7-3"
                  >
                    DevTools
                  </a>
                  <ul
                    className="nav flex-column flex-nowrap collapse "
                    id="sidenav-3-7-3"
                  >
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="/development/tools/devtools/overview"
                      >
                        Overview
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="/development/tools/devtools/android-studio"
                      >
                        Install from Android Studio &amp; IntelliJ
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="/development/tools/devtools/vscode"
                      >
                        Install from VS Code
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="/development/tools/devtools/cli"
                      >
                        Install from command line
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="/development/tools/devtools/inspector"
                      >
                        Flutter inspector
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="/development/tools/devtools/performance"
                      >
                        Performance view
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="/development/tools/devtools/cpu-profiler"
                      >
                        CPU Profiler view
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="/development/tools/devtools/memory"
                      >
                        Memory view
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="/development/tools/devtools/network"
                      >
                        Network view
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="/development/tools/devtools/debugger"
                      >
                        Debugger
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="/development/tools/devtools/logging"
                      >
                        Logging view
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="/development/tools/devtools/app-size"
                      >
                        App size tool
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="/development/tools/devtools/release-notes"
                      >
                        Release notes
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link collapsable collapsed"
                    data-toggle="collapse"
                    data-target="#sidenav-3-7-4"
                    href="/development/tools/sdk"
                    role="button"
                    aria-expanded="false"
                    aria-controls="sidenav-3-7-4"
                  >
                    Flutter SDK
                  </a>
                  <ul
                    className="nav flex-column flex-nowrap collapse "
                    id="sidenav-3-7-4"
                  >
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="/development/tools/sdk/overview"
                      >
                        Overview
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="/development/tools/sdk/upgrading"
                      >
                        Upgrading
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="/development/tools/sdk/releases"
                      >
                        Releases
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/release/breaking-changes">
                        Breaking changes
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="/development/tools/sdk/release-notes"
                      >
                        Release notes
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/development/tools/pubspec">
                    Flutter and the pubspec file
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/development/tools/hot-reload">
                    Hot reload
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/development/tools/flutter-fix">
                    Flutter Fix
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/development/tools/formatting">
                    Code formatting
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a
                className="nav-link collapsable collapsed"
                data-toggle="collapse"
                data-target="#sidenav-3-8"
                href="/development/androidx-migration"
                role="button"
                aria-expanded="false"
                aria-controls="sidenav-3-8"
              >
                Migration notes
              </a>
              <ul
                className="nav flex-column flex-nowrap collapse "
                id="sidenav-3-8"
              >
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/development/androidx-migration"
                  >
                    AndroidX migration
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/development/packages-and-plugins/plugin-api-migration"
                  >
                    Android plugin upgrade
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/development/ios-14">
                    Developing for iOS 14
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/development/ios-project-migration"
                  >
                    Xcode migration
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            data-toggle="collapse"
            href="#sidenav-4"
            role="button"
            aria-expanded="false"
            aria-controls="sidenav-4"
          >
            Testing &amp; debugging
          </a>

          <ul className="nav flex-column flex-nowrap collapse " id="sidenav-4">
            <li className="nav-item">
              <a className="nav-link" href="/testing/debugging">
                Debugging tools
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/testing/code-debugging">
                Debugging apps programmatically
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/testing/oem-debuggers">
                Using an OEM debugger
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/testing/build-modes">
                Flutter&#39;s build modes
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/testing/common-errors">
                Common Flutter errors
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/testing/errors">
                Handling errors
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/testing">
                Testing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/testing/integration-tests">
                Integration testing
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/testing/integration-tests/migration"
              >
                Migrating from flutter_driver
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            data-toggle="collapse"
            href="#sidenav-5"
            role="button"
            aria-expanded="false"
            aria-controls="sidenav-5"
          >
            Performance &amp; optimization
          </a>

          <ul className="nav flex-column flex-nowrap collapse " id="sidenav-5">
            <li className="nav-item">
              <a className="nav-link" href="/perf">
                Overview
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/perf/best-practices">
                Performance best practices
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/perf/app-size">
                App size
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/perf/deferred-components">
                Deferred components
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/perf/rendering-performance">
                Rendering performance
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/perf/ui-performance">
                Performance profiling
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/perf/shader">
                Reduce shader compilation jank
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/perf/metrics">
                Performance metrics
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/perf/faq">
                Performance FAQ
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/perf/appendix">
                Appendix
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            data-toggle="collapse"
            href="#sidenav-6"
            role="button"
            aria-expanded="false"
            aria-controls="sidenav-6"
          >
            Deployment
          </a>

          <ul className="nav flex-column flex-nowrap collapse " id="sidenav-6">
            <li className="nav-item">
              <a className="nav-link" href="/deployment/obfuscate">
                Obfuscating Dart code
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/deployment/flavors">
                Creating flavors for Flutter
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/deployment/android">
                Build and release an Android app
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/deployment/ios">
                Build and release an iOS app
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/deployment/macos">
                Build and release a macOS app
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/deployment/linux">
                Build and release a Linux app
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/deployment/windows">
                Build and release a Windows app
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/deployment/web">
                Build and release a web app
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/deployment/cd">
                Continuous deployment
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            data-toggle="collapse"
            href="#sidenav-7"
            role="button"
            aria-expanded="false"
            aria-controls="sidenav-7"
          >
            Resources
          </a>

          <ul className="nav flex-column flex-nowrap collapse " id="sidenav-7">
            <li className="nav-item">
              <a className="nav-link" href="/resources/architectural-overview">
                Architectural overview
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/resources/books">
                Books
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/resources/compatibility">
                Compatibility policy
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://github.com/flutter/flutter/blob/master/CONTRIBUTING.md"
                target="_blank"
                rel="noreferrer"
              >
                Contributing to Flutter
                <span className="material-icons md-24">open_in_new</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/resources/bug-reports">
                Creating useful bug reports
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/resources/bootstrap-into-dart">
                Dart resources
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/resources/design-docs">
                Design Documents
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/resources/faq">
                FAQ
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/resources/games-toolkit">
                Casual Games Toolkit NEW
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://pub.dev/packages/google_fonts"
                target="_blank"
                rel="noreferrer"
              >
                Google Fonts package
                <span className="material-icons md-24">open_in_new</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/resources/inside-flutter">
                Inside Flutter
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://drive.google.com/drive/folders/1KXNtO9My2AMpDOF9A9Y_4aj4_BcgmDDT"
                target="_blank"
                rel="noreferrer"
              >
                Official brand assets
                <span className="material-icons md-24">open_in_new</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/resources/platform-adaptations">
                Platform adaptations
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/resources/videos">
                Videos and online courses
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a
            className="nav-link "
            data-toggle="collapse"
            href="#sidenav-8"
            role="button"
            aria-expanded="true"
            aria-controls="sidenav-8"
          >
            Reference
          </a>

          <ul
            className="nav flex-column flex-nowrap collapse show"
            id="sidenav-8"
          >
            <li className="nav-item">
              <a className="nav-link" href="/dash">
                Who is Dash?
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/reference/widgets">
                Widget index
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://api.flutter.dev"
                target="_blank"
                rel="noreferrer"
              >
                API reference
                <span className="material-icons md-24">open_in_new</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/reference/flutter-cli">
                flutter CLI reference
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://pub.dev/flutter"
                target="_blank"
                rel="noreferrer"
              >
                Package site
                <span className="material-icons md-24">open_in_new</span>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default RightSidebar;
