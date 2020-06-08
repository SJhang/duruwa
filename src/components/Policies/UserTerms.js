import React from 'react';
import { Grid, Typography } from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  subtitle: {
    fontWeight: 600
  }
}))

function UserPolicyTerms() {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item>
        <Typography variant="h6" gutterBottom className={classes.subtitle}>㈜드루와컴퍼니 약관</Typography>
        <br/>
        <Typography variant="subtitle2" gutterBottom className={classes.subtitle}>제1조(목적)</Typography>
        <Typography variant="body2" gutterBottom>이 약관은 ”(주)드루와컴퍼니”(이하 “회사”라 함)가 운영하는 모바일 앱 “드루와 서비스”(이하 ”서비스”라 함)를 이용함에 있어 회사와 이용자의 권리, 의무 및 책임사항을 규정함을 목적으로 한다.</Typography>

        <Typography variant="subtitle2" gutterBottom className={classes.subtitle}>제2조(용어의 정의)</Typography>
        <Typography variant="body2" gutterBottom>“회사”는 주식회사 드루와컴퍼니를 말한다.
          “사이트”란 회사가 “재화 또는 용역”(이하”재화 등”이라 함)을 제공하기 위하여 컴퓨터, 모바일 정보통신설비를 이용하여 “재화 등”을 거래할 수 있도록 설정한 온라인 모바일 어플리케이션 “드루와” 를 말한다.
          “유저”란 회사에 개인정보를 제공하여 서비스를 이용한 자로서 이 약관에 따라 회원가입을 통하여 회사와 서비스이용계약을 체결한 자를 말한다.
          “이용자 (혹은 서비스 이용자)”는 사이트에서 제공하는 서비스를 이용하는 자를 말한다.
          “비밀번호”는 “유저”의 동일성 확인과 ”유저”의 권익 및 비밀보호를 위하여 ”유저” 스스로가 설정하여 회사에 등록한 영문 또는 숫자의 조합을 말한다.
          “결제서비스”는 “유저”가, 회사가 제공하는 결제 방식을 통해 “제휴점”의 “재화 등”을 주문, 결제하는 서비스를 말한다.
          “제휴점”이란 “회사”가 제공하는 “서비스”를 이용해 “재화 등”에 관한 정보를 게재하고, 판매하는 주체를 말한다.
        </Typography>

        <Typography variant="subtitle2" gutterBottom className={classes.subtitle}>제3조(약관의 명시와 개정)</Typography>
        <Typography variant="body2" gutterBottom>회사는 본 약관의 내용을 쉽게 알 수 있도록 서비스 가입 화면에 게시한다.
          회사는 "약관의 규제에 관한 법률", "정보통신망 이용촉진 및 정보보호 등에 관한 법률" “전자상거래 등에서의 소비자보호에 관한 법률”, “유사수신행위의 규제에 관한 법률”등 관련법에 위배하지 않는 범위에서 본 약관을 개정할 수 있다.
          “회사”는 전자상거래 등에서의 소비자보호에 관한 법률, 약관의 규제 등에 관한 법률, 전자거래기본법, 전자서명법, 정보통신망이용촉진 등에 관한 법률, 방문판매 등에 관한 법률, 소비자 기본법 등 관련법을 위배하지 않는 범위에서 이 약관을 개정할 수 있다.
          회사는 약관이 변경되는 경우에 변경된 약관의 내용과 시행일을 정하여, 그 시행일로부터 최소 7일 (이용자에게 불리하거나 중대한 사항의 변경은 30일) 이전부터 시행일 후 상당한 기간 동안 공지하고, 기존 “유저”에게는 변경된 약관, 적용일자 및 변경사유(변경될 내용 중 중요사항에 대한 설명을 포함)를 전자우편주소 또는 모바일 번호로 발송하며, 변경된 약관은 공지한 시행일로부터 효력이 발생한다.
          이용자는 변경된 약관에 대해 동의하지 않을 권리가 있으며, 거절의 의사를 표시하지 않았을 때에는 본 약관의 변경에 동의한 것으로 간주한다. 유료서비스를 이용하는 “유저”가 약관의 개정에 동의하지 아니하여 해지할 경우 회사가 정한 환불정책에 따른다.
          이 약관에서 정하지 아니한 사항과 이 약관의 해석에 관하여는 정부가 제정한 전자거래소비자보호지침 및 관계법령 또는 일반 상 관례에 따른다.
        </Typography>

        <Typography variant="subtitle2" gutterBottom className={classes.subtitle}>제4조 (서비스의 제공 및 변경)</Typography>
        <Typography variant="body2" gutterBottom>“회사”는 다음과 같은 업무를 수행한다.
          1. “재화 등”에 대한 정보 제공 및 주문중계 등 통신판매중개서비스
          2. “재화 등”에 대한 광고플랫폼 서비스
          3. 위치기반 서비스
          4. 기타 ”회사”가 정하는 업무
          “회사”는 서비스 제공과 관련한 회사 정책의 변경 등 기타 운영상, 기술상의 상당한 이유가 있는 경우에는 제공하고 있는 “서비스”의 전부 또는 일부를 변경 또는 중단할 수 있다.
          “서비스”의 내용, 이용방법, 이용시간에 대하여 변경 또는 중단이 있는 경우에는 변경 또는 중단될 “서비스”의 내용 및 사유와 일자 등을 그 변경 또는 중단 전에 “사이트”내 “유저”가 충분이 인지할 수 있는 방법으로 사전에 공지한다.
        </Typography>

        <Typography variant="subtitle2" gutterBottom className={classes.subtitle}>제5조 (서비스의 중단)</Typography>
        <Typography variant="body2" gutterBottom>“회사”는 컴퓨터 등 정보통신설비의 보수점검ㆍ교체 및 고장, 통신의 두절 등의 사유가 발생한 경우에는 서비스의 제공을 일시적으로 중단할 수 있다.
          “회사”는 “서비스”의 원활한 수행을 위하여 필요한 기간을 정하여 사전에 공지하고 “서비스”를 중지할 수 있다. 단, 불가피하게 긴급한 조치를 필요로 하는 경우 사후에 통지할 수 있다.
        </Typography>

        <Typography variant="subtitle2" gutterBottom className={classes.subtitle}>제6조 이용계약의 성립 이용계약은 이용자의 약관동의와 이용신청에 대한 회사의 승낙으로 성립한다.</Typography>
        <Typography variant="body2" gutterBottom>이용계약의 성립 시기는 회사가 가입완료 표시를 신청절차 상에 표시한 시점으로 한다.</Typography>

        <Typography variant="subtitle2" gutterBottom className={classes.subtitle}>제7조 이용신청 및 제한</Typography>
        <Typography variant="body2" gutterBottom>
          1. 이용자는 회사가 정한 가입 양식에 따라 회원정보를 정확히 기입한 후 이 약관에 동의한다는 의사표시를 함으로써 회원가입을 신청한다. 2. 회사는 다음 각 호에 해당하는 경우에 대해서는 그 신청에 대한 제한 사유가 해소될 때까지 승낙을 유보 또는 일부 서비스 이용을 제한할 수 있다.
          A. 신청 내용이 허위인 것으로 판명 되거나, 그러하다고 의심할 만한 합리적인 사유가 발생할 경우 B. 기타 회사가 필요하다고 인정하는 경우
          3. 회사는 다음에 해당하는 경우에는 “유저”의 사이트 이용을 승낙하지 아니할 수 있다.
          A. 이미 가입된 “유저”와 이메일 주소가 동일한 경우 B. 다른 사람의 명의를 사용하여 신청하였을 경우 C. 회원가입 신청서의 내용을 허위로 기재하였을 경우 D. 사회의 안녕, 질서 혹은 미풍양속을 저해할 목적으로 신청하였을 경우 E. 기타 회사가 정한 이용신청 요건이 미비 되었을 경우
          4. 회사는 다음 각 호에 해당하는 경우 그 사유가 해소될 때까지 이용계약 성립을 유보할 수 있다.
          A. 서비스 관련 제반 용량이 부족한 경우 B. 기술상 장애 사유가 있는 경우
        </Typography>

        <Typography variant="subtitle2" gutterBottom className={classes.subtitle}>제8조 이용자 ID부여 및 변경</Typography>
        <Typography variant="body2" gutterBottom>1. 이용자 ID는 이용자가 가지고 있는 이메일 주소이며 메일 주소가 바뀌었을 경우, 내 정보에서 변경하거나 고객센터에 문의 혹은 support@duruwacompany.com으로 이메일을 보내서 변경할 수 있다. 2. 서비스 이용자 ID 및 비밀번호의 관리책임은 “유저”에게 있다. 이를 소홀히 관리하여 발생하는 서비스 이용 상의 손해 또는 제3자에 의한 부정이용 등에 대한 책임은 “유저”에게 있으며 회사는 그에 대한 책임을 지지 않는다.</Typography>

        <Typography variant="subtitle2" gutterBottom className={classes.subtitle}>제9조 (“유저”에 대한 통지)</Typography>
        <Typography variant="body2" gutterBottom>“회사”는 “유저”에게 대한 통지를 하는 경우, ”유저”가 가입신청 시 “회사”에 제출한 휴대전화번호, 전자우편 주소 등으로 할 수 있습니다.
          “회사”는 불특정다수 “유저”에게 대한 통지의 경우 1주일 이상”사이트” 에 게시함으로써 개별 통지에 갈음할 수 있습니다. 다만, 회원 본인의 거래와 관련하여 중대한 영향을 미치는 사항에 대해서는 개별통지를 한다.
        </Typography>

        <Typography variant="subtitle2" gutterBottom className={classes.subtitle}>제10조 (구매 신청)</Typography>
        <Typography variant="body2" gutterBottom>“재화 등”에 대한 매매계약은 “이용자”가 “제휴점”이 제시한 상품의 판매조건에 응하여 청약의 의사표시를 함으로써 “이용자”와 “제휴점”간에 체결된다.
          “서비스” 이용자는 ”사이트” 상에서 다음 또는 이와 유사한 방법에 의하여 구매를 신청하며, “회사”는 “이용자”가 구매신청을 함에 있어서 다음의 각 내용을 알기 쉽게 제공하여야 한다. 단, ”유저”인 경우 제2호 내지 제4호의 적용을 제외할 수 있다.
          1. 재화 등의 검색 및 선택
          2. 성명, 이동전화번호 등의 입력
          3. 약관내용, 청약철회권이 제한되는 서비스 관련한 내용에 대한 확인
          4. 이 약관에 동의하고 위3호의 사항을 확인하거나 거부하는 표시(예, 마우스클릭)
          5. 재화 등의 구매신청 및 이에 관한 확인 또는 ”회사”의 확인에 대한 동의
          6. 결제방법의 선택
        </Typography>

        <Typography variant="subtitle2" gutterBottom className={classes.subtitle}>제11조 (계약의 성립)</Typography>
        <Typography variant="body2" gutterBottom>“회사”는 제9조와 같은 구매신청에 대하여 다음 각 호에 해당하면 승낙하지 않을 수 있다. 다만, 미성년자와 계약을 체결하는 경우에는 법정대리인의 동의를 얻지 못하면 미성년자 본인 또는 법정대리인이 계약을 취소할 수 있다는 내용을 고지하여야 한다.
          1. 신청 내용에 허위, 기재누락, 오기가 있는 경우
          2. 미성년자가 담배, 주류 등 청소년보호법에서 금지하는 “재화 등”을 구매하는 경우
          3. 기타 구매신청에 승낙하는 것이 “서비스” 기술상 현저히 지장이 있다고 판단하는 경우
          “회사”의 승낙의 의사표시는 “이용자”의 구매 신청에 대한 확인 및 판매가능 여부 등에 관한 정보 등을 포함하여야 한다.
        </Typography>

        <Typography variant="subtitle2" gutterBottom className={classes.subtitle}>제12조 (지급방법)</Typography>
        <Typography variant="body2" gutterBottom>“서비스”에서 구매한 “재화 등”에 대한 대금지급방법은 다음 각 호의 방법 중 가용한 방법으로 할 수 있다. 단, “회사”는 이용자의 지급방법에 대하여 재화 등의 대금에 어떠한 명목의 수수료도 추가하여 징수할 수 없다.
          1. 실시간 계좌이체
          2. 선불카드, 직불카드, 신용카드 등의 각종 카드 결제
          3. 휴대폰 소액결제
          4. 기타 전자적 지급방법에 의한 대금지급 등
        </Typography>

        <Typography variant="subtitle2" gutterBottom className={classes.subtitle}>제13조 (포인트 및 이벤트)</Typography>
        <Typography variant="body2" gutterBottom>포인트는 “회사”의 이벤트 프로모션 참여, “회사”의 정책에 따른 ”유저” 등급별 부여 등을 통하여 “유저”에게 지급되며, 포인트 별 유효기간, 포인트 사용방법 등은 개별 안내사항을 통하여 확인 가능하다.
          포인트는 현금으로 환급될 수 없으며, 포인트를 지급받은 해당 년 마지막 날에 이용계약이 종료되어 소멸한다 (KST Time: 12월 31일 23:59)
          “회사”는 “유저”가 부정한 목적과 방법으로 포인트 등을 획득하거나 사용하는 사실이 확인될 경우, 해당 이용자에 대한 포인트를 회수 또는 소멸시키거나 “유저”자격을 제한할 수 있다.
          포인트의 제공내용 및 운영방침은 “회사”의 정책에 따라 달라질 수 있다.
        </Typography>

        <Typography variant="subtitle2" gutterBottom className={classes.subtitle}>제14조 (청약철회,환급 등)</Typography>
        <Typography variant="body2" gutterBottom>단순 변심에 의한 청약철회 등은 할 수 없으며, 회사는 이 내용을 쉽게 접근할 수 있게 이용자에게 제공한다.
          “회사” 및 “제휴점”은 별도의 취소 및 환불 규정을 정할 수 있으며, 이 경우 별도 계약 및 이용조건상의 취소 및 환불 규정이 우선 적용된다.
          “회사”는 “이용자”가 구매 신청한 재화 등이 품절 등의 사유로 인도 또는 용역의 제공을 할 수 없을 때에는 지체 없이 그 사유를 이용자에게 통지하고, 사전에 재화 등의 대금을 받은 경우에는 대금을 받은 날부터 5영업일 이내에 환급하거나 환급에 필요한 조치를 취한다.
          청약철회와 환불은 “제휴점”과 확인 후 처리하게 되며, 신용카드결제 및 핸드폰결제는 신용카드사 및 이동통신사의 환불기준에 의거하여 처리가 완료되는데 시일이 소요될 수 있다.
        </Typography>

        <Typography variant="subtitle2" gutterBottom className={classes.subtitle}>제15조 (개인정보보호)</Typography>
        <Typography variant="body2" gutterBottom>“회사”는 “이용자”의 개인정보를 보호하기 위하여 정보통신망법 및 개인정보 보호법 등 관계 법령에서 정하는 바를 준수한다.
          “회사”는 “이용자”의 개인정보를 보호하기 위한 개인정보처리방침을 수립하여 서비스 초기화면 하단에 게시한다. 구체적 내용은 연결화면을 통하여 볼 수 있다.
          “회사”는 관련법령 및 개인정보처리방침에 따라 “이용자”의 개인정보를 최대한 보호하기 위하여 노력한다.
          “회사”의 공식 사이트 이외 링크를 통해 들어간 사이트는 “회사”의 개인정보처리방침이 적용되지 않는다.
          제3자의 개인정보처리방침을 확인할 책임이 “이용자”에게 있으며, “회사”는 이에 대하여 책임을 부담하지 않는다.
        </Typography>

        <Typography variant="subtitle2" gutterBottom className={classes.subtitle}>제16조 (“회사”의 의무)</Typography>
        <Typography variant="body2" gutterBottom>회사는 법령과 본 약관이 금지하거나 미풍양속에 반하는 행위를 하지 않으며, 지속적 안정적으로 서비스를 제공하기 위하여 노력할 의무가 있다.
          회사는 이용자의 개인 신상 정보를 본인의 승낙 없이 제3자에게 누설, 배포하지 않는다. 다만, 관계법령에 의해 국가기관의 요구나 전기통신관련법령 및 정보통신윤리위원회의 요청 등 법률의 규정에 따른 적법한 절차에 의한 경우에는 그러하지 아니한다.
          회사는 계속적이고 안정적인 서비스의 제공을 위하여 설비에 장애가 생기거나 멸실된 때에는 부득이한 사유가 없는 한 지체 없이 이를 수리 또는 복구한다.
          회사가 제공하는 서비스로 인하여 “유저”에게 손해가 발생한 경우 그러한 손해가 회사의 고의나 중과실에 기해 발생한 경우에 한하여 책임을 부담하며, 그 책임의 범위는 통상손해에 한한다.
          회사는 “유저”로부터 제기되는 의견이나 불만이 정당하다고 인정할 경우에는 신속히 처리하여야 한다. 다만, 신속한 처리가 곤란한 경우에는 “유저”에게 그 사유와 처리일정을 통보하여야 한다.
          회사는 관련법령이 정하는 바에 따라서 “유저” 등록정보를 포함한 “유저”의 개인정보를 보호하기 위하여 노력한다. “유저”의 개인정보보호에 관해서는 관련법령 및 제 21조에 제시된 내용을 지킨다.
        </Typography>

        <Typography variant="subtitle2" gutterBottom className={classes.subtitle}>제17조 (“유저”의ID 및 비밀번호에 대한 의무)</Typography>
        <Typography variant="body2" gutterBottom>ID와 비밀번호에 관한 관리책임은 “유저”에게 있다.
          “유저”는 자신의 ID 및 비밀번호를 제3자에게 이용하게 해서는 안된다.
          “유저”가 자신의 ID 및 비밀번호를 도난 당하거나 제3자가 사용하고 있음을 인지한 경우에는 바로 ”회사”에 통보하고 “회사”의 안내가 있는 경우에는 그에 따라야 한다.
          “유저”이 제3항에 따른 통지를 하지 않거나 “회사”의 조치에 응하지 아니하여 발생하는 모든 불이익에 대한 책임은 “유저”에게 있다.
        </Typography>

        <Typography variant="subtitle2" gutterBottom className={classes.subtitle}>제18조 (“유저”와 이용자의 의무)  1. “유저”는 서비스 이용을 위해 가입할 경우 현재의 사실과 일치하는 완전한 정보 (이하 "가입정보")를 제공해야 하며, 가입정보가 변경된 경우 즉시 갱신해야 한다. 2. “유저”는 본인의 아이디와 비밀번호 관리를 위해 제 9조 이용자의 정보보안 사항을 준수하여야 한다. 3. “유저”는 서비스를 이용 시, 각 호에 해당하는 행위를 해서는 안 된다.</Typography>
        <Typography variant="body2" gutterBottom>A. 타인(소수를 포함)에게 위해를 가하는 행위 B. 타인의 아이디(ID), 비밀번호(PASSWORD) 도용 및 타인으로 가장하는 행위 C. 타인과의 관계를 허위로 명시하는 행위 D. 타인을 비방할 목적으로 사실 또는 허위의 사실을 적시하여 명예를 훼손하는 행위 E. 자기 또는 타인에게 재산상의 이익을 주거나 타인에게 손해를 가할 목적으로 허위의 정보를 유통시키는 행위 F. 수치심이나 혐오감 또는 공포심을 일으키는 말이나 음향, 글을 타인에게 전달하는 행위 G. 회사의 사전 승낙 없이 서비스를 통하여 얻은 정보를 가공, 판매하는 행위 등 서비스를 이용한 영리행위 H. 타인의 정보통신서비스 이용명의를 도용하여 사용하는 행위 I. 불필요하거나 승인되지 않은 광고, 판촉물을 게재하거나, 미성년자가 볼 수 있는 곳에 저속 또는 음란한 데이터, 텍스트, 소프트웨어, 음악, 사진, 그래픽, 비디오 메시지 등을 게재하거나 이를 미성년자에게 메시지 또는 전자우편으로 보내는 행위 J. 권리(지적재산권을 포함한 모든 권리)가 없는 콘텐츠를 게재하거나 메시지 또는 전자우편으로 보내는 행위 K. 컴퓨터 소프트웨어, 하드웨어, 전기통신 장비를 파괴, 방해 또는 기능을 제한하기 위한 소프트웨어 바이러스를 게재하거나 메시지 또는 전자우편으로 보내는 행위 L. 다른 컴퓨터 코드, 파일, 프로그램을 포함하고 있는 자료를 게시, 게재, 전자우편으로 보내는 행위 등 다른 사용자의 개인정보를 수집 또는 저장하는 행위 M. 재물을 걸고 도박하거나 사행행위를 하는 행위 N. 윤락행위를 알선하거나 음행을 매개하는 내용의 정보를 유통시키는 행위 O. 기타 불법적이거나 부당한 행위
          4. “유저”는 이 약관 및 관계법령에서 규정한 사항을 준수하여야 한다. 5. “유저”는 게시물 등을 작성하는데에 있어 서비스 운영정책을 준수하여야 한다.
        </Typography>

        <Typography variant="subtitle2" gutterBottom className={classes.subtitle}>제19조 권리의 귀속 및 저작물의 이용</Typography>
        <Typography variant="body2" gutterBottom>1. 회사가 “유저”에게 제공하는 서비스에 대한 지식재산권을 포함한 일체의 권리는 회사에 귀속된다. 2. “유저”가 서비스를 이용하는 과정에서 작성한 게시물 등에 대한 저작권을 포함한 일체의 권리는 별도의 의사표시가 없는 한 각 “유저”에게 귀속된다.</Typography>

        <Typography variant="subtitle2" gutterBottom className={classes.subtitle}>제20조 (콘텐츠)</Typography>
        <Typography variant="body2" gutterBottom>“이용자”가 작성한 콘텐츠(이하 “콘텐츠”이라 함)에 대한 저작권 및 모든 책임은 이를 게시한 “이용자”에게 있다. 다만, “회사”는 “이용자”가 게시하거나 등록하는 게시물의 내용이 다음 각 호에 해당하는 콘텐츠에 대해서는 사전통지 없이 삭제 또는 임시조치를 할 수 있다.
          게시물의 내용에 욕설 및 타인 또는 타 음식점에 대한 비방이 과도하게 포함된 경우
          “서비스”의 저작권, 제3자의상표권 또는 저작권 등 지적재산권을 침해하는 경우
          동의 없이 타인 또는 타 음식점의 정보를 게시물에 노출한 경우
          정보통신망법 및 저작권법 등 관계법령에 위반된다고 판단되는 경우
          게시판 주제와 관련 없는 내용이거나 또는 공공질서 및 미풍양속에 위반되는 내용인 경우
        </Typography>

        <Typography variant="subtitle2" gutterBottom className={classes.subtitle}>제21조 손해배상</Typography>
        <Typography variant="body2" gutterBottom>회사는 무료로 제공되는 서비스와 관련하여 “유저”에게 어떠한 손해가 발생하더라도 회사가 고의로 행한 범죄행위를 제외하고 이에 대하여 책임을 부담하지 아니한다.</Typography>

        <Typography variant="subtitle2" gutterBottom className={classes.subtitle}>제22조 분쟁해결</Typography>
        <Typography variant="body2" gutterBottom>1. 회사는 이용자가 제기하는 정당한 의견이나 불만을 반영하고 그 피해를 보상처리하기 위해서 피해보상처리 절차를 마련하고 이를 이행한다. 2. 회사는 이용자로부터 제출되는 불만사항 및 의견을 신속하게 처리한다. 다만 신속한 처리가 곤란한 경우에는 이용자에게 그 사유와 처리일정을 즉시 통보한다.</Typography>

        <Typography variant="subtitle2" gutterBottom className={classes.subtitle}>제23조 준거법 및 관할법원</Typography>
        <Typography variant="body2" gutterBottom>1. 서비스 이용과 관련하여 회사와 “유저” 간에 이견 또는 분쟁이 있는 경우, 양 당사자간의 합의에 의해 원만히 해결하여야 한다. 2. 이 약관의 해석 및 “유저”간의 분쟁에 대하여는 대한민국의 법을 적용한다. 3. 서비스 이용 중 발생한 “유저”와 회사간의 소송은 서울중앙지방법원을 관할법원으로 한다.</Typography>

        <Typography variant="body2" gutterBottom>부칙제 1조 (시행일) 본 약관은 아래 시행일자부터 시행됩니다. 최근 시행일 : 2020년 5월 1일</Typography>
      </Grid>
    </Grid>
  )
}

export default UserPolicyTerms;