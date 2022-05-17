const Banner = () => {
  return (
    <div className="site-banner site-banner--default" role="alert">
      <a href="https://flutter.dev/events/io-2022">
        Flutter 3을 사용하여 6개의 다른 플랫폼에서 하나의 코드로 앱을
        빌드해보세요. Learn more.
      </a>
      <br />
      <a href="https://medium.com/flutter/whats-new-in-flutter-3-8c74a5bc32d0">
        Flutter 3에서 달라진 것
      </a>{" "}
      과 <a href="https://docs.flutter.dev/whats-new">새로운 문서들</a>을
      확인해보세요.
      <br />
      Flutter 와 Dart 팀은 구인 중 입니다.{" "}
      <a href="https://docs.flutter.dev/jobs">Learn more</a>
    </div>
  );
};

export default Banner;
