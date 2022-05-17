import Link from "next/link";
import { useEffect, useRef } from "react";
import Banner from "../../../component/Banner";
import Header from "../../../component/Header";
import RightSidebar from "../../../component/RightSidebar";

const Widgets_intro = () => {
  //   const iframeRef = useRef<HTMLIFrameElement>(null);
  //   useEffect(() => {
  //     if (iframeRef.current) {
  //       iframeRef.current.contentWindow?.document
  //         .getElementsByName(".CodeMirror-code")[0]
  //         .append(
  //           "<div style=&#34;position: relative;&#34;><div class=&#34;CodeMirror-gutter-wrapper&#34; aria-hidden=&#34;true&#34; style=&#34;left: -39px;&#34;><div class=&#34;CodeMirror-linenumber CodeMirror-gutter-elt&#34; style=&#34;left: 0px; width: 21px;&#34;>1</div></div><pre class=&#34; CodeMirror-line &#34; role=&#34;presentation&#34;><span role=&#34;presentation&#34; style=&#34;padding-right: 0.1px;&#34;><span cm-text=&#34;&#34;>​</span></span></pre></div>"
  //         );
  //     }
  //   }, [iframeRef]);
  return (
    <>
      <Header />
      <Banner />
      <div className="container-fluid position-relative">
        <div className="row flex-xl-nowrap">
          <RightSidebar />
          <main
            className="site-content col-12 col-md-9 offset-md-3 col-xl-10 offset-xl-2 col-xxl-8 offset-xxl-2"
            role="main"
          >
            <div className="container">
              <header className="site-content__title">
                <div
                  id="page-github-links"
                  className="btn-group"
                  aria-label="Page GitHub links"
                  role="group"
                >
                  <a
                    href="https://github.com/flutter/website/tree/main/src/development/ui/widgets-intro.md"
                    className="btn no-automatic-external"
                    title="View page source"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="" data-fa-i2svg="">
                      <svg
                        className="svg-inline--fa fa-file-alt fa-w-12 fa-sm"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="file-alt"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                        data-fa-i2svg=""
                      >
                        <path
                          fill="currentColor"
                          d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-72v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm96-114.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"
                        ></path>
                      </svg>
                    </i>
                  </a>
                  <a
                    href="https://github.com/flutter/website/issues/new?template=1_page_issue.yml&amp;title=[PAGE ISSUE]: 'Introduction to widgets'&amp;page-url=https://docs.flutter.dev/development/ui/widgets-intro/&amp;page-source=https://github.com/flutter/website/tree/main/src/development/ui/widgets-intro.md"
                    className="btn no-automatic-external"
                    title="Report an issue with this page"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="" data-fa-i2svg="">
                      <svg
                        className="svg-inline--fa fa-bug fa-w-16 fa-sm"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="bug"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        data-fa-i2svg=""
                      >
                        <path
                          fill="currentColor"
                          d="M511.988 288.9c-.478 17.43-15.217 31.1-32.653 31.1H424v16c0 21.864-4.882 42.584-13.6 61.145l60.228 60.228c12.496 12.497 12.496 32.758 0 45.255-12.498 12.497-32.759 12.496-45.256 0l-54.736-54.736C345.886 467.965 314.351 480 280 480V236c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v244c-34.351 0-65.886-12.035-90.636-32.108l-54.736 54.736c-12.498 12.497-32.759 12.496-45.256 0-12.496-12.497-12.496-32.758 0-45.255l60.228-60.228C92.882 378.584 88 357.864 88 336v-16H32.666C15.23 320 .491 306.33.013 288.9-.484 270.816 14.028 256 32 256h56v-58.745l-46.628-46.628c-12.496-12.497-12.496-32.758 0-45.255 12.498-12.497 32.758-12.497 45.256 0L141.255 160h229.489l54.627-54.627c12.498-12.497 32.758-12.497 45.256 0 12.496 12.497 12.496 32.758 0 45.255L424 197.255V256h56c17.972 0 32.484 14.816 31.988 32.9zM257 0c-61.856 0-112 50.144-112 112h224C369 50.144 318.856 0 257 0z"
                        ></path>
                      </svg>
                    </i>
                  </a>
                </div>

                <h1>위젯 소개</h1>

                <nav aria-label="breadcrumb">
                  <ol
                    className="breadcrumb"
                    vocab="http://schema.org/"
                    typeof="BreadcrumbList"
                  >
                    <li
                      className="breadcrumb-item"
                      property="itemListElement"
                      typeof="ListItem"
                    >
                      <a
                        href="/development/ui"
                        property="item"
                        typeof="WebPage"
                      >
                        <span property="name">UI</span>
                      </a>
                      <meta property="position" content="1" />
                    </li>
                    <li
                      className="breadcrumb-item active"
                      property="itemListElement"
                      typeof="ListItem"
                      aria-current="page"
                    >
                      <Link
                        href="/development/ui/widgets-intro"
                        property="item"
                        typeof="WebPage"
                      >
                        <span property="name">위젯 소개</span>
                      </Link>
                      <meta property="position" content="2" />
                    </li>
                  </ol>
                </nav>
              </header>

              <p>
                Flutter의 위젯은 <a href="https://reactjs.org">React</a>로 부터
                영감을 받은 모던 프레임워크로 부터 빌드 됩니다. 플러터의 중심이
                되는 아이디어는 UI를 위젯 밖에서 빌드한다는 것 입니다. 위젯들은
                현재 주어진 설정과 state에 따라 view가 어떻게 보여져야하는 지를
                나타냅니다. 위젯의 state가 변할 때 위젯들은 이것의 description을
                rebuilds합니다. 그리고 그 변화는 기본 렌더 트리에서 한 상태에서
                다른 상태로 전환하기 위해 필요한 최소한의 변경 사항을 결정하기
                위한 프레임워크 diffs 입니다.
              </p>

              <aside className="alert alert-info" role="alert">
                <p>
                  <i className="" data-fa-i2svg="">
                    <svg
                      className="svg-inline--fa fa-info-circle fa-w-16"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="info-circle"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"
                      ></path>
                    </svg>
                  </i>{" "}
                  <strong>Note:</strong> 직접 코드를 체험하며 Flutter와 더
                  가까워지고 싶다면,{" "}
                  <a href="https://docs.flutter.dev/codelabs/layout-basics">
                    기본 레이아웃 코랩
                  </a>
                  ,{" "}
                  <a href="https://docs.flutter.dev/development/ui/layout">
                    레이아웃 빌드하기
                  </a>
                  ,{" "}
                  <a href="https://docs.flutter.dev/development/ui/interactive">
                    Flutter 앱에 상호작용성 더하기
                  </a>
                  를 참고해보세요.
                </p>
              </aside>

              <h2 id="hello-world">Hello world</h2>

              <p>
                기본적인 Flutter app은{" "}
                <a href="https://api.flutter.dev/flutter/widgets/runApp.html">
                  <code className="language-plaintext highlighter-rouge">
                    runApp()
                  </code>
                </a>{" "}
                함수를 widget과 함께 호출합니다.
              </p>
              <div>
                <iframe
                  //   ref={iframeRef}
                  src="https://dartpad.dev/embed-flutter.html?theme=light&amp;run=false&amp;split=60&amp;id=713d65633033e7b451b1a8d335cdd07c&amp;null_safety=false"
                  style={{ width: "100%", height: "310px" }}
                ></iframe>
              </div>

              <p>
                <code className="language-plaintext highlighter-rouge">
                  runApp()
                </code>{" "}
                함수는 주어진{" "}
                <a href="https://api.flutter.dev/flutter/widgets/Widget-class.html">
                  <code className="language-plaintext highlighter-rouge">
                    Widget
                  </code>
                </a>{" "}
                을 위젯 tree의 root로 설정합니다. 위의 예로 설명하자면, 위젯
                tree는{" "}
                <a href="https://api.flutter.dev/flutter/widgets/Center-class.html">
                  <code className="language-plaintext highlighter-rouge">
                    Center
                  </code>
                </a>{" "}
                위젯과 그것의 child 위젯인{" "}
                <a href="https://api.flutter.dev/flutter/widgets/Text-class.html">
                  <code className="language-plaintext highlighter-rouge">
                    Text
                  </code>
                </a>{" "}
                위젯 총 2개의 위젯으로 이루어져 있습니다. Flutter는 루트 위젯이
                스크린을 커버하게끔 강제하고, 위의 예에서는 Hello world가 화면의
                중앙에 위치함을 의미합니다. 이 예제에서는 text의 방향이 정해질
                필요가 있습니다. 하지만{" "}
                <code className="language-plaintext highlighter-rouge">
                  MaterialApp
                </code>{" "}
                위젯을 사용한다면 알아서 처리가 될 것 입니다.
              </p>

              <p>
                App을 작성할 때 위젯이 state를 갖는지의 여부에 따라{" "}
                <a href="https://api.flutter.dev/flutter/widgets/StatelessWidget-class.html">
                  <code className="language-plaintext highlighter-rouge">
                    StatelessWidget
                  </code>
                </a>{" "}
                ,{" "}
                <a href="https://api.flutter.dev/flutter/widgets/StatefulWidget-class.html">
                  <code className="language-plaintext highlighter-rouge">
                    StatefulWidget
                  </code>
                </a>
                의 subclasses를 흔히 사용하게 될 것입니다. 위젯의 주된 역할은{" "}
                <a href="https://api.flutter.dev/flutter/widgets/StatelessWidget/build.html">
                  <code className="language-plaintext highlighter-rouge">
                    build()
                  </code>
                </a>{" "}
                함수를 구현하는 것 이고 그것은 다른 하위 수준(lower-level)의
                위젯들로 위젯을 구현하는 것 입니다. framework는 프로세스가 끝날
                때 까지 widget의 기하학적 정보를 갖고 있는{" "}
                <a href="https://api.flutter.dev/flutter/rendering/RenderObject-class.html">
                  <code className="language-plaintext highlighter-rouge">
                    RenderObject
                  </code>
                </a>
                를 구성하는 위젯들을 빌드 합니다.
              </p>

              <h2 id="basic-widgets">기본 위젯</h2>

              <p>Flutter는 다음과 같은 강력한 기본 위젯을 지원합니다.:</p>

              <dl>
                <dt>
                  <strong>
                    <a href="https://api.flutter.dev/flutter/widgets/Text-class.html">
                      <code className="language-plaintext highlighter-rouge">
                        Text
                      </code>
                    </a>
                  </strong>
                </dt>
                <dd>
                  The{" "}
                  <code className="language-plaintext highlighter-rouge">
                    Text
                  </code>{" "}
                  위젯은 어플리케이션에 styled text를 생성합니다.
                </dd>
                <dt>
                  <strong>
                    <a href="https://api.flutter.dev/flutter/widgets/Row-class.html">
                      <code className="language-plaintext highlighter-rouge">
                        Row
                      </code>
                    </a>
                    ,{" "}
                    <a href="https://api.flutter.dev/flutter/widgets/Column-class.html">
                      <code className="language-plaintext highlighter-rouge">
                        Column
                      </code>
                    </a>
                  </strong>
                </dt>
                <dd>
                  <code className="language-plaintext highlighter-rouge">
                    수평
                  </code>
                  ,{" "}
                  <code className="language-plaintext highlighter-rouge">
                    수직
                  </code>{" "}
                  방향으로 유동적인 레이아웃을 생성합니다. 이러한 객체들의
                  디자인은 웹의 flexbox 레이아웃 모델의 기본이 됩니다.
                </dd>
                <dt>
                  <strong>
                    <a href="https://api.flutter.dev/flutter/widgets/Stack-class.html">
                      <code className="language-plaintext highlighter-rouge">
                        Stack
                      </code>
                    </a>
                  </strong>
                </dt>
                <dd>
                  수직 수평 처럼 선형적인 방향이 아닌,{" "}
                  <code className="language-plaintext highlighter-rouge">
                    Stack
                  </code>{" "}
                  위젯은 위젯들을 paint 순서로 서로 위에 배치할 수 있도록
                  합니다. 그 다음에{" "}
                  <a href="https://api.flutter.dev/flutter/widgets/Positioned-class.html">
                    <code className="language-plaintext highlighter-rouge">
                      Positioned
                    </code>
                  </a>{" "}
                  위젯을{" "}
                  <code className="language-plaintext highlighter-rouge">
                    Stack
                  </code>{" "}
                  의 children으로 사용하면 Stack 안에서 상대적으로 위, 오른쪽,
                  아래, 옆으로 위치하게 할 수 있습니다.
                </dd>
                <dt>
                  <strong>
                    <a href="https://api.flutter.dev/flutter/widgets/Container-class.html">
                      <code className="language-plaintext highlighter-rouge">
                        Container
                      </code>
                    </a>
                  </strong>
                </dt>
                <dd>
                  <code className="language-plaintext highlighter-rouge">
                    Container
                  </code>{" "}
                  위젯은 사각형 요소를 생성합니다.(div같은 것) container는
                  <a href="https://api.flutter.dev/flutter/painting/BoxDecoration-class.html">
                    <code className="language-plaintext highlighter-rouge">
                      BoxDecoration
                    </code>
                  </a>
                  으로 꾸밀 수 있습니다.{" "}
                  <code className="language-plaintext highlighter-rouge">
                    Container
                  </code>
                  는 background, border, shadow, padding, margin, size 제한 등
                  다 가능합니다. 그리고 matrix로 3D 방향으로 변형이 가능합니다.
                </dd>
              </dl>

              <p>
                밑의 예제는 앞서 말한 위젯들과 또 다른 위젯들을 합친 간단한
                위젯입니다.
              </p>
              <div>
                <iframe
                  src="https://dartpad.dev/embed-flutter.html?theme=light&amp;run=false&amp;split=60&amp;id=bad2a71b962553f082e74bb14f6e3d7d&amp;null_safety=false"
                  style={{ width: "100%", height: "600px" }}
                ></iframe>
              </div>

              <p>
                <code className="language-plaintext highlighter-rouge">
                  Flutter
                </code>{" "}
                프로젝트 폴더 안의{" "}
                <code className="language-plaintext highlighter-rouge">
                  pubspec.yaml
                </code>{" "}
                파일의{" "}
                <code className="language-plaintext highlighter-rouge">
                  uses-material-design: true
                </code>{" "}
                를 해놓는 걸 잊지 마세요. 이건 미리 정의되어 있는{" "}
                <a href="https://design.google.com/icons/">Material icons</a>를
                사용할 수 있게 해줍니다.
              </p>

              <div className="language-yaml highlighter-rouge">
                <div className="highlight">
                  <div className="code-excerpt__code">
                    <button
                      className="code-excerpt__copy-btn"
                      type="button"
                      data-toggle="tooltip"
                      title=""
                      data-clipboard-target="#code-excerpt-0"
                      data-original-title="Copy code"
                    >
                      {" "}
                      <i className="material-icons">content_copy</i>
                    </button>
                    <div id="code-excerpt-0">
                      <pre className="highlight">
                        <code>
                          <span className="na">name</span>
                          <span className="pi">:</span>{" "}
                          <span className="s">my_app</span>
                          <div />
                          <span className="na">flutter</span>
                          <span className="pi">:</span>
                          <div />
                          <span className="na">{"  "}uses-material-design</span>
                          <span className="pi">:</span>{" "}
                          <span className="no">true</span>
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>

              <p>
                많은 Material 디자인 위젯은 정상적으로 동작하기 위해서(theme
                data를 상속받기 위해서){" "}
                <a href="https://api.flutter.dev/flutter/material/MaterialApp-class.html">
                  <code className="language-plaintext highlighter-rouge">
                    MaterialApp
                  </code>
                </a>
                안에 있어야 합니다. 그러므로 어플리케이션을{" "}
                <code className="language-plaintext highlighter-rouge">
                  MaterialApp
                </code>
                으로 run 합니다.
              </p>
              <p>
                <code className="language-plaintext highlighter-rouge">
                  MyAppBar
                </code>{" "}
                위젯은 왼쪽, 오른쪽에 padding 8 pixels, device-independent한
                height 56 pixels를 갖는{" "}
                <a href="https://api.flutter.dev/flutter/widgets/Container-class.html">
                  <code className="language-plaintext highlighter-rouge">
                    Container
                  </code>
                </a>{" "}
                를 생성합니다. container 안에서{" "}
                <code className="language-plaintext highlighter-rouge">
                  MyAppBar
                </code>{" "}
                는 children을 구성하기 위해서{" "}
                <a href="https://api.flutter.dev/flutter/widgets/Row-class.html">
                  <code className="language-plaintext highlighter-rouge">
                    Row
                  </code>
                </a>{" "}
                layout을 사용합니다. 중간의 child인{" "}
                <code className="language-plaintext highlighter-rouge">
                  title
                </code>{" "}
                위젯은{" "}
                <a href="https://api.flutter.dev/flutter/widgets/Expanded-class.html">
                  <code className="language-plaintext highlighter-rouge">
                    Expanded
                  </code>
                </a>
                로 표시되어 있고, 그건 다른 children으로 차지되지 않는 여백을 이
                위젯으로 채우겠다는 것을 의미합니다. 다수의{" "}
                <code className="language-plaintext highlighter-rouge">
                  Expanded
                </code>{" "}
                children을 사용할 수 있고, 각각 차지하는 비율을{" "}
                <a href="https://api.flutter.dev/flutter/widgets/Expanded-class.html#flex">
                  <code className="language-plaintext highlighter-rouge">
                    flex
                  </code>
                </a>{" "}
                인자로{" "}
                <code className="language-plaintext highlighter-rouge">
                  Expanded
                </code>
                에게 넘겨주어 정할 수 있습니다.
              </p>

              <p>
                <code className="language-plaintext highlighter-rouge">
                  MyScaffold
                </code>{" "}
                위젯은 children을 수직 열로 구성하였습니다. 열의 가장 위에{" "}
                <code className="language-plaintext highlighter-rouge">
                  MyAppBar
                </code>{" "}
                인스턴스를 배치하였고, app bar에게 제목으로 사용하게끔{" "}
                <a href="https://api.flutter.dev/flutter/widgets/Text-class.html">
                  <code className="language-plaintext highlighter-rouge">
                    Text
                  </code>
                </a>{" "}
                위젯을 전달합니다. 다른 위젯에게 위젯을 인자들로 넘겨주는 것은
                많은 방법으로 재사용 될 수 있는 제네릭 위젯을 만들 수 있게 하는
                강력한 스킬입니다. 마침내{" "}
                <code className="language-plaintext highlighter-rouge">
                  MyScaffold
                </code>{" "}
                는{" "}
                <a href="https://api.flutter.dev/flutter/widgets/Expanded-class.html">
                  <code className="language-plaintext highlighter-rouge">
                    Expanded
                  </code>
                </a>{" "}
                를 사용하여 중앙에 메세지가 있는 body의 남는 부분을 채웁니다.
              </p>

              <p>
                더 자세히 알고 싶다면, 다음을 참고하세요.{" "}
                <a href="https://docs.flutter.dev/development/ui/widgets/layout">
                  Layouts
                </a>
                .
              </p>

              <h2 id="using-material-components">Material 컴포넌트 사용하기</h2>

              <p>
                Flutter는 Material Design을 따르는 app을 빌드 할 수 있게 해주는
                다양한 위젯들을 제공합니다.{" "}
                <a href="https://api.flutter.dev/flutter/material/MaterialApp-class.html">
                  <code className="language-plaintext highlighter-rouge">
                    MaterialApp
                  </code>
                </a>{" "}
                은 routes로도 불리며, string으로 구분되는 위젯들의 스택을
                관리하는,{" "}
                <a href="https://api.flutter.dev/flutter/widgets/Navigator-class.html">
                  <code className="language-plaintext highlighter-rouge">
                    Navigator
                  </code>
                </a>
                를 포함하며, app의 root에 유용한 위젯들을 빌드하는, MaterialApp
                위젯으로 부터 시작합니다.{" "}
                <code className="language-plaintext highlighter-rouge">
                  Navigator
                </code>{" "}
                는 당신의 앱의 스크린에서 스크린으로 자연스럽게 트랜지션 합니다.{" "}
                <a href="https://api.flutter.dev/flutter/material/MaterialApp-class.html">
                  <code className="language-plaintext highlighter-rouge">
                    MaterialApp
                  </code>
                </a>{" "}
                위젯을 사용하는 것은 완전히 선택적인 것이지만 좋은 관습입니다.
              </p>
              <div>
                <iframe
                  src="https://dartpad.dev/embed-flutter.html?theme=light&amp;run=false&amp;split=60&amp;id=f18d25362e6b2cd26be662f626050305&amp;null_safety=false"
                  style={{ width: "100%", height: "600px" }}
                ></iframe>
              </div>

              <p>
                위의 코드에서{" "}
                <code className="language-plaintext highlighter-rouge">
                  MyAppBar
                </code>{" "}
                와{" "}
                <code className="language-plaintext highlighter-rouge">
                  MyScaffold
                </code>{" "}
                가 각각{" "}
                <a href="https://api.flutter.dev/flutter/material/AppBar-class.html">
                  <code className="language-plaintext highlighter-rouge">
                    AppBar
                  </code>
                </a>{" "}
                와{" "}
                <a href="https://api.flutter.dev/flutter/material/Scaffold-class.html">
                  <code className="language-plaintext highlighter-rouge">
                    Scaffold
                  </code>
                </a>{" "}
                위젯으로 바뀌었습니다. 그리고{" "}
                <code className="language-plaintext highlighter-rouge">
                  material.dart
                </code>{" "}
                덕분에 앱은 더욱 Material스럽게 작동합니다. 예를 들면 새로운 app
                bar는 그림자를 갖고 있고 title text는 알맞은 스타일을 자동으로
                상속 받습니다.
              </p>

              <p>
                위젯은 위젯의 인자로 전달 될 수 있다는 것을 꼭 기억하세요.
                <a href="https://api.flutter.dev/flutter/material/Scaffold-class.html">
                  <code className="language-plaintext highlighter-rouge">
                    Scaffold
                  </code>
                </a>{" "}
                위젯은 다른 위젯들을 인자로 전달 받고 각각의 위젯들은 적당한
                장소에 배치됩니다. 비슷하게{" "}
                <a href="https://api.flutter.dev/flutter/material/AppBar-class.html">
                  <code className="language-plaintext highlighter-rouge">
                    AppBar
                  </code>
                </a>{" "}
                위젯안에{" "}
                <a href="https://api.flutter.dev/flutter/material/AppBar-class.html#leading">
                  <code className="language-plaintext highlighter-rouge">
                    leading
                  </code>
                </a>{" "}
                ,{" "}
                <a href="https://api.flutter.dev/flutter/material/AppBar-class.html#actions">
                  <code className="language-plaintext highlighter-rouge">
                    actions
                  </code>
                </a>{" "}
                ,{" "}
                <a href="https://api.flutter.dev/flutter/material/AppBar-class.html#title">
                  <code className="language-plaintext highlighter-rouge">
                    title
                  </code>
                </a>{" "}
                같은 위젯들이 들어갈 수 있습니다. 이런 패턴은 framework
                전반적으로 계속 발생하고, 위젯을 디자인 할 때 꼭 고려해야하는
                부분입니다.
              </p>

              <p>
                더 자세히 알고 싶다면, 다음을 참고하세요.{" "}
                <a href="https://docs.flutter.dev/development/ui/widgets/material">
                  Material Components widgets
                </a>
                .
              </p>

              <aside className="alert alert-info" role="alert">
                <p>
                  <i className="" data-fa-i2svg="">
                    <svg
                      className="svg-inline--fa fa-info-circle fa-w-16"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="info-circle"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"
                      ></path>
                    </svg>
                  </i>{" "}
                  <strong>Note:</strong> Material은 Flutter의 2가지 번들 디자인
                  중 한 개 입니다. iOS-centric 디자인을 만들고 싶다면,{" "}
                  <a href="https://api.flutter.dev/flutter/cupertino/CupertinoApp-class.html">
                    <code className="language-plaintext highlighter-rouge">
                      CupertinoApp
                    </code>
                  </a>
                  ,{" "}
                  <a href="https://api.flutter.dev/flutter/cupertino/CupertinoNavigationBar-class.html">
                    <code className="language-plaintext highlighter-rouge">
                      CupertinoNavigationBar
                    </code>
                  </a>{" "}
                  각각의 고유 버젼을 가지고 있는{" "}
                  <a href="https://docs.flutter.dev/development/ui/widgets/cupertino">
                    Cupertino components
                  </a>{" "}
                  패키지를 확인하세요.
                </p>
              </aside>

              <h2 id="handling-gestures">제스쳐 다루기</h2>

              <p>
                대부분의 어플리케이션은 유져가 시스템과 상호작용 할 수 있는
                형태을 갖고있습니다. 상호작용하는 앱을 만드는 첫 단계는 input
                제스쳐를 감지하는 것입니다. 그런 것들이 어떻게 가능한지 간단한
                버튼을 예로 확인해봅시다.
              </p>
              <div>
                <iframe
                  src="https://dartpad.dev/embed-flutter.html?theme=light&amp;run=false&amp;split=60&amp;id=51ae6524ca3079c35cac0664d47bc631&amp;null_safety=false"
                  style={{ width: "100%", height: "600px" }}
                ></iframe>
              </div>

              <p>
                <a href="https://api.flutter.dev/flutter/widgets/GestureDetector-class.html">
                  <code className="language-plaintext highlighter-rouge">
                    GestureDetector
                  </code>
                </a>{" "}
                위젯은 외형이 없지만 유저의 제스쳐를 감지합니다. 유져가
                <a href="https://api.flutter.dev/flutter/widgets/Container-class.html">
                  <code className="language-plaintext highlighter-rouge">
                    Container
                  </code>
                </a>
                를 탭하면,{" "}
                <a href="https://api.flutter.dev/flutter/widgets/GestureDetector-class.html">
                  <code className="language-plaintext highlighter-rouge">
                    GestureDetector
                  </code>
                </a>{" "}
                가{" "}
                <a href="https://api.flutter.dev/flutter/widgets/GestureDetector-class.html#onTap">
                  <code className="language-plaintext highlighter-rouge">
                    onTap()
                  </code>
                </a>{" "}
                을 호출하고, 위의 경우에는 콘솔에 메세지를 출력합니다. 당신은
                GestureDetector로 탭, 드래그, 크기 등 다양한 input 제스쳐를
                감지할 수 있습니다.
              </p>

              <p>
                많은 위젯들은 다른 위젯들을 위한 선택적인 콜백을 위해
                <a href="https://api.flutter.dev/flutter/widgets/GestureDetector-class.html">
                  <code className="language-plaintext highlighter-rouge">
                    GestureDetector
                  </code>
                </a>{" "}
                를 사용합니다. 예를들면{" "}
                <a href="https://api.flutter.dev/flutter/material/IconButton-class.html">
                  <code className="language-plaintext highlighter-rouge">
                    IconButton
                  </code>
                </a>
                ,{" "}
                <a href="https://api.flutter.dev/flutter/material/ElevatedButton-class.html">
                  <code className="language-plaintext highlighter-rouge">
                    ElevatedButton
                  </code>
                </a>
                ,{" "}
                <a href="https://api.flutter.dev/flutter/material/FloatingActionButton-class.html">
                  <code className="language-plaintext highlighter-rouge">
                    FloatingActionButton
                  </code>
                </a>{" "}
                위젯들은 유져가 위젯을 탭 했을 때 발생하는{" "}
                <a href="https://api.flutter.dev/flutter/material/ElevatedButton-class.html#onPressed">
                  <code className="language-plaintext highlighter-rouge">
                    onPressed()
                  </code>
                </a>
                콜백을 갖고 있습니다.
              </p>

              <p>
                더 많은 정보를 보고 싶다면,{" "}
                <a href="https://docs.flutter.dev/development/ui/advanced/gestures">
                  Gestures in Flutter
                </a>{" "}
                를 방문해주세요.
              </p>

              <h2 id="changing-widgets-in-response-to-input">
                Input에 따라 위젯을 변경하기
              </h2>

              <p>
                지금까지 우리가 만든 페이지는 stateless widgets(상태가 없는
                위젯)만을 사용했습니다. Stateless widgets은 부모 위젯들로부터
                인자를 받고{" "}
                <a href="https://dart.dev/guides/language/language-tour#final-and-const">
                  <code className="language-plaintext highlighter-rouge">
                    final
                  </code>
                </a>{" "}
                멤버 변수에 저장합니다. 위젯이{" "}
                <a href="https://api.flutter.dev/flutter/widgets/StatelessWidget/build.html">
                  <code className="language-plaintext highlighter-rouge">
                    build()
                  </code>
                </a>
                를 사용하도록 명령 받으면, 새로 생성될 위젯들을 위한 인자를 이
                저장된 값에서 가져옵니다.
              </p>

              <p>
                더 다양한 유저 input에 반응하는 것 처럼 더 복잡한 경험을
                빌드하기 위해서 어플리케이션은 state를 사용합니다. Flutter는
                이런 아이디어를 구현하기 위해{" "}
                <code className="language-plaintext highlighter-rouge">
                  StatefulWidgets
                </code>{" "}
                을 사용합니다.{" "}
                <code className="language-plaintext highlighter-rouge">
                  StatefulWidgets
                </code>{" "}
                은 state를 갖는{" "}
                <code className="language-plaintext highlighter-rouge">
                  State
                </code>{" "}
                객체들을 생성하는 특별한 위젯입니다.{" "}
                <a href="https://api.flutter.dev/flutter/material/ElevatedButton-class.html">
                  <code className="language-plaintext highlighter-rouge">
                    ElevatedButton
                  </code>
                </a>{" "}
                을 활용한 다음의 예제를 통해 확인해봅시다.
              </p>
              <div>
                <iframe
                  src="https://dartpad.dev/embed-flutter.html?theme=light&amp;run=false&amp;split=60&amp;id=cf1dd7efe72997740b9a9947dc11a24d&amp;null_safety=false"
                  style={{ width: "100%", height: "600px" }}
                ></iframe>
              </div>

              <p>
                이쯤되면{" "}
                <code className="language-plaintext highlighter-rouge">
                  StatefulWidget
                </code>{" "}
                과{" "}
                <code className="language-plaintext highlighter-rouge">
                  State
                </code>{" "}
                가 왜 분리된 객체인지 궁금할 것이다. Flutter에서 이 두개의
                객체는 다른 life cycles(생명 주기)를 가집니다.{" "}
                <code className="language-plaintext highlighter-rouge">
                  Widgets
                </code>{" "}
                은 현재 상태에서 어플리케이션을 표현하는 일시적인 객체입니다.
                <code className="language-plaintext highlighter-rouge">
                  State
                </code>{" "}
                객체는 반대로{" "}
                <code className="language-plaintext highlighter-rouge">
                  build()
                </code>{" "}
                함수 사이에 일관적으로 지속되는 객체입니다.
              </p>

              <p>
                위의 예에서 유저의 input을 받고 바로 그 결과를{" "}
                <code className="language-plaintext highlighter-rouge">
                  build()
                </code>{" "}
                함수에서 사용합니다. 더 복잡한 어플리케이션에서, 위젯 계급의
                다른 부분들은 각기 다른 역할을 다 합니다. 예를 들면 한 위젯은
                구체적인 정보를 모으는 것을 목표로 복잡한 UI를 보여줄 것이고,
                다른 위젯은 전체적인 외형을 바꾸기 위해 그 정보를 이용할 것
                입니다.
              </p>

              <p>
                Flutter에서 변화의 알림은 callbacks을 이용해 widget
                계급(hierarchy)을 거슬러 &#34;올라&#34;가는 동시에, 현재 state는
                UI를 보여주는(do presentation) stateless 위젯으로 흘러
                &#34;내려&#34;갑니다. 이런 흐름을 제어하는 부모(parent)가{" "}
                <code className="language-plaintext highlighter-rouge">
                  State
                </code>
                입니다. 다음의 복잡한 예가 이것의 대표적인 예제 입니다.
              </p>
              <div>
                <iframe
                  src="https://dartpad.dev/embed-flutter.html?theme=light&amp;run=false&amp;split=60&amp;id=04ef1473fd253395ddb3405239edd0d2&amp;null_safety=false"
                  style={{ width: "100%", height: "600px" }}
                ></iframe>
              </div>

              <p>
                두개의 stateless 위젯들을 주목하세요! counter(
                <code className="language-plaintext highlighter-rouge">
                  CounterDisplay
                </code>
                )를 <em>보여주는(displaying)</em> 것과 counter(
                <code className="language-plaintext highlighter-rouge">
                  CounterIncrementor
                </code>
                )를 <em>변경하는(changing)</em> 것을 분리하였습니다. 비록 결과는
                앞의 예와 동일하지만, 책임의 분리(separation of
                resopnsibility)는 부모에서 단순성을 유지하면서 개별 위젯에 더 큰
                복잡성을 캡슐화할 수 있게 합니다.
              </p>

              <p>더 자세히 알고 싶다면, 다음을 참고하세요.</p>

              <ul>
                <li>
                  <a href="https://api.flutter.dev/flutter/widgets/StatefulWidget-class.html">
                    <code className="language-plaintext highlighter-rouge">
                      StatefulWidget
                    </code>
                  </a>
                </li>
                <li>
                  <a href="https://api.flutter.dev/flutter/widgets/State/setState.html">
                    <code className="language-plaintext highlighter-rouge">
                      setState()
                    </code>
                  </a>
                </li>
              </ul>

              <h2 id="bringing-it-all-together">모두 사용해보기</h2>

              <p>
                다음은 앞선 개념을 종합한 보다 완전한 예입니다. 가상 쇼핑
                애플리케이션은 판매하기 위해 제공되는 다양한 제품을 표시하고,
                구매를 위해 쇼핑 카트를 유지합니다. presentation 클래스인{" "}
                <code className="language-plaintext highlighter-rouge">
                  ShoppingListItem
                </code>
                을 정의하는 것부터 시작합니다
              </p>
              <div>
                <iframe
                  src="https://dartpad.dev/embed-flutter.html?theme=light&amp;run=false&amp;split=60&amp;id=87f98b24d4718d7fec88698998637e4a&amp;null_safety=false"
                  style={{ width: "100%", height: "600px" }}
                ></iframe>
              </div>

              <p>
                <code className="language-plaintext highlighter-rouge">
                  ShoppingListItem
                </code>{" "}
                위젯은 전형적인 stateless 위젯 패턴을 따릅니다. 이것은{" "}
                <a href="https://api.flutter.dev/flutter/widgets/StatelessWidget/build.html">
                  <code className="language-plaintext highlighter-rouge">
                    build()
                  </code>
                </a>{" "}
                함수가 실행되는 동안 사용할{" "}
                <a href="https://dart.dev/guides/language/language-tour#final-and-const">
                  <code className="language-plaintext highlighter-rouge">
                    final
                  </code>
                </a>{" "}
                멤버 변수를 생성자로 부터 전달 받고 저장합니다. 예를 들면{" "}
                <code className="language-plaintext highlighter-rouge">
                  inCart
                </code>{" "}
                boolean 변수는 두가지 UI를 토글 합니다. 하나는 현재 theme의 기본
                색을 사용하는 것이고, 다른 하나는 회색을 사용하는 것 입니다.
              </p>

              <p>
                유저가 리스트의 아이템을 탭하면, 위젯은{" "}
                <code className="language-plaintext highlighter-rouge">
                  inCart
                </code>{" "}
                의 값를 즉시 변경하지 않습니다. 대신에, 위젯은 부모 위젯으로
                부터 전달받은{" "}
                <code className="language-plaintext highlighter-rouge">
                  onCartChanged
                </code>{" "}
                함수를 호출합니다. 이런 패턴은 당신이 보다 높은 계층의 위젯에
                state를 저장 할 수 있게 해주고 좀 더 긴 시간동안 state를
                유지시켜줍니다. 극단적으로{" "}
                <a href="https://api.flutter.dev/flutter/widgets/runApp.html">
                  <code className="language-plaintext highlighter-rouge">
                    runApp()
                  </code>
                </a>{" "}
                에 전달되는 위젯에 저장된 state는 어플리케이션의 생명주기 동안
                유지됩니다.
              </p>

              <p>
                부모가{" "}
                <code className="language-plaintext highlighter-rouge">
                  onCartChanged
                </code>{" "}
                콜백을 전달 받으면, 부모는 이것의 내부 state를 갱신하고 그것은
                새로운{" "}
                <code className="language-plaintext highlighter-rouge">
                  inCart
                </code>{" "}
                값를 갖는{" "}
                <code className="language-plaintext highlighter-rouge">
                  ShoppingListItem
                </code>{" "}
                인스턴스를 생성하고 부모를 rebuild하게 합니다. 비록 부모가
                리빌드 할 때{" "}
                <code className="language-plaintext highlighter-rouge">
                  ShoppingListItem
                </code>{" "}
                의 인스턴스를 생성한다고 해도, 그런 명령들은 프레임워크에서{" "}
                <a href="https://api.flutter.dev/flutter/rendering/RenderObject-class.html">
                  <code className="language-plaintext highlighter-rouge">
                    RenderObject
                  </code>
                </a>
                에 있는 이전에 빌드된 위젯과, 새롭게 빌드 될 위젯을 비교하여
                차이점만을 새롭게 빌드하므로 적은 리소스를 요구합니다.
              </p>

              <p>다음은 mutable state를 저장하는 부모 위젯의 예입니다.</p>
              <div>
                <iframe
                  src="https://dartpad.dev/embed-flutter.html?theme=light&amp;run=false&amp;split=60&amp;id=cd9ef393cfc0f6fc82412500b3bc5710&amp;null_safety=false"
                  style={{ width: "100%", height: "600px" }}
                ></iframe>
              </div>

              <p>
                <a href="https://api.flutter.dev/flutter/widgets/StatefulWidget-class.html">
                  <code className="language-plaintext highlighter-rouge">
                    StatefulWidget
                  </code>
                </a>
                을 확장하는 클래스인{" "}
                <code className="language-plaintext highlighter-rouge">
                  ShoppingList
                </code>{" "}
                는 mutable state를 저장한다는 의미를 내포합니다.{" "}
                <code className="language-plaintext highlighter-rouge">
                  ShoppingList
                </code>{" "}
                위젯이 트리에 처음 삽입되면, 프레임워크는{" "}
                <a href="https://api.flutter.dev/flutter/widgets/StatefulWidget-class.html#createState">
                  <code className="language-plaintext highlighter-rouge">
                    createState()
                  </code>
                </a>{" "}
                함수를 호출하여 트리의 해당 위치와 연결할{" "}
                <code className="language-plaintext highlighter-rouge">
                  _ShoppingListState
                </code>{" "}
                의 새 인스턴스를 만듭니다. (
                <a href="https://api.flutter.dev/flutter/widgets/State-class.html">
                  <code className="language-plaintext highlighter-rouge">
                    State
                  </code>
                </a>{" "}
                의 subclasses들은 관습적으로 private한 상세 구현이라는 것을
                알려주기 위해 이름의 첫 글자를 언더바(_)로 시작한 다는 것을
                알아두세요.) 이 위젯의 부모가 리빌드 할 때, 부모는
                <code className="language-plaintext highlighter-rouge">
                  ShoppingList
                </code>
                의 인스턴스를 다시 생성하지만, framework가{" "}
                <code className="language-plaintext highlighter-rouge">
                  createState
                </code>{" "}
                를 다시 호출하는 대신에 tree에 이미 있던{" "}
                <code className="language-plaintext highlighter-rouge">
                  _ShoppingListState
                </code>{" "}
                인스턴스를 재사용합니다.
              </p>

              <p>
                현재{" "}
                <code className="language-plaintext highlighter-rouge">
                  ShoppingList
                </code>
                의 프로퍼티들에 접근하기 위해서,{" "}
                <code className="language-plaintext highlighter-rouge">
                  _ShoppingListState
                </code>{" "}
                는 이것의{" "}
                <a href="https://api.flutter.dev/flutter/widgets/Widget-class.html">
                  <code className="language-plaintext highlighter-rouge">
                    위젯
                  </code>
                </a>{" "}
                프로퍼티를 사용 할 수 있습니다. 만약에 부모가 리빌드하고 새로운
                <code className="language-plaintext highlighter-rouge">
                  ShoppingList
                </code>
                를 생성한다면,{" "}
                <code className="language-plaintext highlighter-rouge">
                  _ShoppingListState
                </code>{" "}
                는 새로운 위젯 값와 함께 rebuild 될 것 입니다.{" "}
                <code className="language-plaintext highlighter-rouge">
                  위젯
                </code>{" "}
                프로퍼티가 변경될 때 알림을 받으려면 이전 위젯을 현재 위젯과
                비교할 수 있도록{" "}
                <code className="language-plaintext highlighter-rouge">
                  oldWidget
                </code>{" "}
                을 전달하는{" "}
                <a href="https://api.flutter.dev/flutter/widgets/State-class.html#didUpdateWidget">
                  <code className="language-plaintext highlighter-rouge">
                    didUpdateWidget()
                  </code>
                </a>{" "}
                함수를 재정의하세요.
              </p>

              <p>
                <code className="language-plaintext highlighter-rouge">
                  onCartChanged
                </code>{" "}
                콜백을 처리할 때,{" "}
                <code className="language-plaintext highlighter-rouge">
                  _ShoppingListState
                </code>
                는{" "}
                <code className="language-plaintext highlighter-rouge">
                  _shoppingCart
                </code>
                로 부터 물건을 없애거나 더하면서 이것의 내부 state를
                변화시킵니다. 프레임워크에게 내부 state를 변경하였다는 것을
                알려주기 위해서 그런 과정들을{" "}
                <a href="https://api.flutter.dev/flutter/widgets/State/setState.html">
                  <code className="language-plaintext highlighter-rouge">
                    setState()
                  </code>
                </a>{" "}
                로 감쌉니다.{" "}
                <code className="language-plaintext highlighter-rouge">
                  setState
                </code>{" "}
                을 호출 하면 이 위젯을 dirty로 표시하고 다음 번에 앱에서 화면을
                업데이트해야 할 때 다시 빌드하도록 예약합니다. 만약 당신이 위젯
                내부의 state를 변경 할 때{" "}
                <code className="language-plaintext highlighter-rouge">
                  setState
                </code>{" "}
                를 호출하는 것을 잊어버린다면, 프레임워크는 당신의 위젯이
                dirty인지 알 수 없고 widget의{" "}
                <a href="https://api.flutter.dev/flutter/widgets/StatelessWidget/build.html">
                  <code className="language-plaintext highlighter-rouge">
                    build()
                  </code>
                </a>{" "}
                함수를 호출하지 않을 것 입니다. 그리고 그것은 UI가 변화된
                state에 맞춰 갱신되지 않는 다는 것을 의미합니다. 이런한 방법으로
                state를 관리하므로서 당신은 자식 위젯들을 갱신하고(update)
                생성(create)하는 코드를 분리해서 작성 할 필요가 없습니다. 대신에
                그저{" "}
                <code className="language-plaintext highlighter-rouge">
                  build
                </code>{" "}
                함수를 구현하면 알아서 두가지 일을 처리해줄 것 입니다.
              </p>

              <h2 id="responding-to-widget-lifecycle-events">
                위젯의 생명주기 이벤트 처리하기
              </h2>

              <p>
                <code className="language-plaintext highlighter-rouge">
                  StatefulWidget
                </code>
                에서{" "}
                <a href="https://api.flutter.dev/flutter/widgets/StatefulWidget-class.html#createState">
                  <code className="language-plaintext highlighter-rouge">
                    createState()
                  </code>
                </a>{" "}
                를 호출 한 이후, 프레임워크는 새로운 state 객체를 트리에
                삽입하고 state 객체에{" "}
                <a href="https://api.flutter.dev/flutter/widgets/State-class.html#initState">
                  <code className="language-plaintext highlighter-rouge">
                    initState()
                  </code>
                </a>{" "}
                를 호출합니다.{" "}
                <a href="https://api.flutter.dev/flutter/widgets/State-class.html">
                  <code className="language-plaintext highlighter-rouge">
                    State
                  </code>
                </a>{" "}
                의 서브클래스들은{" "}
                <code className="language-plaintext highlighter-rouge">
                  initState
                </code>{" "}
                를 오버라이드(재정의) 하여 한 번만 수행해야 하는 작업을 수행할
                수 있습니다. 예를들면 애니메이션을 설정하거나 플랫폼 서비스를
                구독하기 위해{" "}
                <code className="language-plaintext highlighter-rouge">
                  initState
                </code>
                를 재정의합니다.{" "}
                <code className="language-plaintext highlighter-rouge">
                  initState
                </code>{" "}
                의 구현은{" "}
                <code className="language-plaintext highlighter-rouge">
                  super.initState
                </code>
                를 호출하며 시작되어야만 합니다.
              </p>

              <p>
                state 객체가 더 이상 필요하지 않다면, framwork는{" "}
                <a href="https://api.flutter.dev/flutter/widgets/State-class.html#dispose">
                  <code className="language-plaintext highlighter-rouge">
                    dispose()
                  </code>
                </a>{" "}
                를 state 객체에 대해 호출합니다. 어떤 정리 작업을 수행하려면
                <code className="language-plaintext highlighter-rouge">
                  dispose
                </code>{" "}
                기능을 재정의하세요. 예를들면, 플랫폼 서비스의 구독을 취소하거나
                타이머를 취소하는 것들이 있습니다.{" "}
                <code className="language-plaintext highlighter-rouge">
                  dispose
                </code>{" "}
                의 구현은 보통{" "}
                <code className="language-plaintext highlighter-rouge">
                  super.dispose
                </code>
                를 선언하면서 끝이 납니다.
              </p>

              <p>
                더 자세히 알고 싶다면, 다음을 참고하세요.{" "}
                <a href="https://api.flutter.dev/flutter/widgets/State-class.html">
                  <code className="language-plaintext highlighter-rouge">
                    State
                  </code>
                </a>
              </p>

              <h2 id="keys">키</h2>

              <p>
                위젯을 재구성할 때 프레임워크가 다른 위젯들과 일치하는 위젯을
                제어하려면 키를 사용하세요. 기본적으로 프레임워크는 그들의{" "}
                <a href="https://api.flutter.dev/flutter/widgets/Widget-class.html#runtimeType">
                  <code className="language-plaintext highlighter-rouge">
                    런타임타입
                  </code>
                </a>{" "}
                와 나타나는 순서에따라 위젯의 현재와 이전의 빌드를 매치합니다.
                키를 사용하는 경우 프레임워크는 두 위젯은 동일한
                <code className="language-plaintext highlighter-rouge">
                  런타임타입
                </code>
                뿐만 아니라 동일한{" "}
                <a href="https://api.flutter.dev/flutter/foundation/Key-class.html">
                  <code className="language-plaintext highlighter-rouge">
                    키
                  </code>
                </a>{" "}
                를 소유해야 합니다.
              </p>

              <p>
                키는 같은 타입의 위젯의 인스턴스들을 많이 생성 하는 위젯에서
                유용합니다. 자신의 표시영역(visible region)을 충분히 채울 만큼{" "}
                <code className="language-plaintext highlighter-rouge">
                  ShoppingListItem
                </code>{" "}
                instance를 생성하는{" "}
                <code className="language-plaintext highlighter-rouge">
                  ShoppingList
                </code>{" "}
                위젯을 예로 들 수 있습니다.
              </p>

              <ul>
                <li>
                  <p>
                    키가 없다면, 현재 빌드의 첫 번째 항목은 항상 이전 빌드의 첫
                    번째 항목과 동기화(sync)됩니다. 의미적으로 목록의 첫 번째
                    항목이 화면 밖으로 스크롤되어 뷰포트에 더 이상 표시되지 않는
                    경우에도 마찬가지입니다.
                  </p>
                </li>
                <li>
                  <p>
                    목록의 각 엔트리를 &#34;의미적인(semantic)&#34; 키로
                    할당함으로써, 프레임워크가 일치하는 의미적인 키와 함께
                    엔트리를 동기화하기 때문에 무한 리스트는 더 효율적일 수
                    있습니다. (키로 목록을 구별 할 수 있다는 말) 또한, 항목을
                    의미적으로 동기화한다는 것은 stateful 자식 위젯에
                    유지된(retained) 상태가 뷰포트에서 동일한 숫자
                    위치(numerical position)에 있는 항목이 아니라 동일한 의미
                    항목(semantic entry)에 부여(attached)된다는 것을 의미합니다.
                  </p>
                </li>
              </ul>

              <p>
                더 자세히 알고 싶다면, 다음을 참고하세요.{" "}
                <a href="https://api.flutter.dev/flutter/foundation/Key-class.html">
                  <code className="language-plaintext highlighter-rouge">
                    Key
                  </code>
                </a>{" "}
              </p>

              <h2 id="global-keys">전역(Global) 키</h2>

              <p>
                전역 키를 사용하여 자식 위젯들을 고유하게 식별합니다. 전역 키는
                형제 간(예를 들면 리스트 안에 있는 항목들이 형제이다.)에
                고유해야 하는 지역(local) 키와 달리 전체 위젯 계층에서
                전체적으로 고유해야 합니다. 전역 키는 전체적으로 고유하기 때문에
                전역 키를 사용하여 위젯과 연결된 state를 검색할 수 있습니다.
              </p>

              <p>
                더 자세히 알고 싶다면, 다음을 참고하세요.{" "}
                <a href="https://api.flutter.dev/flutter/widgets/GlobalKey-class.html">
                  <code className="language-plaintext highlighter-rouge">
                    GlobalKey
                  </code>
                </a>{" "}
              </p>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Widgets_intro;
