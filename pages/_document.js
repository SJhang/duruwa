import Document, {Html, Head, Main, NextScript} from 'next/document'
import {ServerStyleSheet} from 'styled-components'

export default class MyDocument extends Document {
  static getInitialProps({renderPage}) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return {...page, styleTags};
  }

  render() {
    return (
      <html>
      <Head>
        {this.props.styleTags}
        <link href="https://use.fontawesome.com/releases/v5.2.0/css/svg-with-js.css" rel="stylesheet"/>
        <script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.min.js" ></script>
        <script type="text/javascript" src="https://cdn.iamport.kr/js/iamport.payment-1.1.5.js"/>
        <script dangerouslySetInnerHTML={{__html: `(function() {
  var IMP = window.IMP;
  IMP.init('imp71021771');

  /* 중략 */
  IMP.certification({
    merchant_uid: 'merchant_' + new Date().getTime() //본인인증과 연관된 가맹점 내부 주문번호가 있다면 넘겨주세요
  }, function (rsp) {
    if (rsp.success) {
      // 인증성공
      console.log(rsp.imp_uid);
      console.log(rsp.merchant_uid);

      $.ajax({
        type: 'POST',
        url: 'https://api.iamport.kr/certifications/confirm',
        dataType: 'json',
        data: {
          imp_uid: rsp.imp_uid
        }
      }).done(function () {
        takeResponseAndHandle(rsp)
      });

    } else {
      // 인증취소 또는 인증실패
      var msg = '인증에 실패하였습니다.';
      msg += '에러내용 : ' + rsp.error_msg;

      alert(msg);
    }
  })
  ;

  function takeResponseAndHandle(rsp) {
    if (rsp.success) {
      // 인증성공
      console.log(rsp.imp_uid);
      console.log(rsp.merchant_uid);
    } else {
      // 인증취소 또는 인증실패
      var msg = '인증에 실패하였습니다.';
      msg += '에러내용 : ' + rsp.error_msg;

      alert(msg);
    }
  }
})`}}/>
      </Head>
      <body>
      <Main/>
      <NextScript/>
      </body>
      </html>
    );
  }
}