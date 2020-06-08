import React from 'react';
import {Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  subtitle: {
    fontWeight: 600
  }
}))

function PrivacyPolicy() {
  const classes = useStyles();

  return (
    <Grid container>
        <Grid item>
          <Typography variant="h6" className={classes.subtitle} gutterBottom>
            개인정보처리방침
          </Typography>
          <Typography variant="body2" gutterBottom>
            ㈜드루와컴퍼니(이하 “회사”라 한다)는 정보통신망 이용촉진 및 정보 보호 등에 관한 법 률, 개인정보보호법 등 관련 법령상의 개인정보보호 규정을 지키며, 이와 관련하여 이용자의 고충을 신속하고 원활하게 처리할 수 있도록 다음과 같이 개인정보처리 방침을 수립합니다.
            개인정보처리방침은 이용자가 언제나 쉽게 접근하고 열람할 수 있도록 서비스 초기화면에 공개하고 있으며, 개인정보 관련법령, 지침, 고시 또는 “회사” 정책의 변경에 따라 변경될 수 있습니다.
          </Typography>

          <br/>

          <Typography variant="subtitle2" gutterBottom className={classes.subtitle}>
            1. 개인정보 수집·이용
          </Typography>
          <Typography variant="body2" gutterBottom>
            “회사”는 다음과 같이 이용자의 정보를 수집하고 있습니다. “회사”가 처리하고 있는 개인정보는 다음의 수집· 이용목적 이외의 용도로는 활용되지 않으며, 수집·이용목적이 변경되는 경우에는 개인정보보호법 등 관련 법령에 따라 별도의 동의를 받는 등의 절차를 이행합니다.
          </Typography>
          <Typography variant="subtitle2">1. 이용자정보의 수집방법, 수집 및 이용목적, 수집항목은 아래와 같습니다.</Typography>

          <Typography variant="subtitle2" gutterBottom className={classes.subtitle}>
            2. 개인정보의 수집 방법
          </Typography>
          <Typography variant="body2" gutterBottom>
            “회사”는 개인정보를 서비스 회원가입 절차, 이벤트 및 마케팅 행사, 상담 절차, 영업업무 위탁사 또는 제휴사 등의 방법으로 수집하며 이동 전화 및 유선 또는 무선 인터넷 서비스를 사용할 때 생성정보 수집 도구를 통한 방법 등으로도 개인정보를 수집합니다.
          </Typography>

          <Typography variant="subtitle2" gutterBottom className={classes.subtitle}>
            2. 개인정보의 보유 및 이용기간
          </Typography>
          <Typography variant="body2" gutterBottom>
            1. “회사”는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 동의 받은 기간 동안 개인정보를 보유 및 이용합니다. 개인정보의 수집 및 이용목적 달 성, 보유기간 만료, 회원의 수집 및 이용 동의 철회 시 수집된 개인정보는 열람하거나 이용할 수 없도록 파기 처리합니다.
            2. “회사”는 상법 및 ‘전자상거래 등에서 소비자보호에 관한 법률’, 전자금융거래법, 여신금융업법, 국세기본법, 법인세법, 부가가치세법 등 관련 법령의 규정에 따라 다음과 같이 거래 관련 권리 의무 관계를 확인하기 위하여 개인정보를 일정기간 보유할 수 있으며, 이 때 보유하는 개인정보의 열람 및 이용은 해당 사유로 한정하여, 미리 보유 목적 및 보유하는 개인정보 항목을 분명히 밝혀야 합니다.
            각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.
            가. 회원 가입 및 관리: 회원 탈퇴시까지 처리 및 보유
            나. 재화 또는 서비스 제공: 재화·서비스 공급완료 및 요금결제·정산 완료시까지
            처리 및 보유. 다만, 다음의 사유에 해당하는 경우에는 해당 기간 종료시까지
          </Typography>

          <Typography variant="subtitle2" gutterBottom className={classes.subtitle}>
            3. 수집한 개인정보의 제3자 제공
          </Typography>
          <Typography variant="body2" gutterBottom>
            회사는 이용자의 개인정보를 개인정보 수집‧이용 목적에서 명시한 범위 내에서 사용하며, 이용자의 사전 동의 없이 개인정보 수집‧이용목적 범위를 초과하여 이용하거나 이용자의 개인정보를 제공하지 않습니다.
          </Typography>

          <Typography variant="subtitle2" gutterBottom className={classes.subtitle}>
            4. 개인정보처리 위탁
          </Typography>
          <Typography variant="body2" gutterBottom>
            1. 회사는 원활한 서비스 제공을 위하여 개인정보의 처리를 타인에게 위탁할 수 있으며, 다음과 같이 개인정보 처리업무를 위탁하고 있습니다.
            구분
            수탁자
            위탁업무
            결제처리
            나이스페이먼츠㈜, ㈜카카오
            신용카드, 휴대전화번호, 계좌이체 등을 통한 결제
            알림 및 본인확인
            ㈜다날, ㈜카카오
            SMS 및 메시지 전송
            데이터 보관
            Amazon Web Services Inc.
            데이터 보관

            2. 회사는 수탁자들이 위탁한 개인정보를 안전하게 처리하고 있는지 지속적으로 관리 감독하고 있으며, 수탁업무가 종료된 때에 수탁자가 보유하고 있는 개인정보는 즉시 파기하도록 하고 있습니다.
            3. 위탁업무의 내용 또는 수탁자의 변경시에는 개인정보 처리방침 수정 조치 후 공지합니다.
          </Typography>

          <Typography variant="subtitle2" gutterBottom className={classes.subtitle}>
            5. 개인정보의 열람 및 정정
          </Typography>
          <Typography variant="body2" gutterBottom>
            1. 고객은 언제든지 등록된 고객의 개인정보를 열람하거나 정정할 수 있습니다. 개인정보는 마이페이지에서 직접 열람할 수 있으며 수정을 할 수 있습니다. 다른 방법으로는 “회사” 담당자에게 전화 또는 이메일로 열람 및 정정을 요청할 수 있습니다.
            2. 고객이 개인정보의 오류에 대해 정정을 요청하면, 회사는 정정을 완료하기 전까지 해당 개인정보를 이용하거나 제공하지 않습니다.
            3. 잘못된 개인정보를 제3자에게 이미 제공했을 때에는 정정 처리결과를 제3자에게 곧바로 통지하여 정정합니다.
            4. 이용자는 자신의 개인정보를 최신의 상태로 유지해야 하며, 이용자의 부정확한 정보 입력으로 발생하는 문제의 책임은 이용자 자신에게 있습니다.
            5. 타인의 개인정보를 도용한 회원가입의 경우 이용자 자격을 상실하거나 관련 개인정보보호 법령에 의해 처벌받을 수 있습니다.
            6. 이용자는 전자우편, 비밀번호 등에 대한 보안을 유지할 책임이 있으며 제3자에게 이를 양도하거나 대여할 수 없습니다.

          </Typography>

          <Typography variant="subtitle2" gutterBottom className={classes.subtitle}>
            6. 개인정보의 수집, 이용, 제공에 대한 동의철회
          </Typography>
          <Typography variant="body2" gutterBottom>
            회원가입 등을 통한 개인정보의 수집, 이용, 제공과 관련해 귀하는 동의하신 내용을 언제든지 철회할 수 있습니다. 동의철회는 『나의정보-회원정보』에서 “탈퇴(동의철회)” 버튼을 클릭하면, 개인정보의 수집‧이용‧제공에 대한 동의를 즉시 철회할 수 있으며, 개인정보보호책임자에게 서면, 전화, 이메일(E-mail) 등으로 연락하시면 회사는 즉시 회원 탈퇴를 위해 필요한 조치를 취합니다. 동의를 철회하고 개인정보를 파기하는 등의 조치 시 고객에게 즉시 통지합니다.
          </Typography>

          <Typography variant="subtitle2" gutterBottom className={classes.subtitle}>
            7. 아동의 개인정보보호
          </Typography>
          <Typography variant="body2" gutterBottom>
            “회사”는 만 14세미만 아동의 개인정보 보호를 위하여 만 14세 이상의 이용자에 한하여 회원가입을 허용합니다.
          </Typography>

          <Typography variant="subtitle2" gutterBottom className={classes.subtitle}>
            8. 비회원 개인정보보호
          </Typography>
          <Typography variant="body2" gutterBottom>
            1. 회사는 비회원의 개인정보를 존중하며 “회사”의 필요로 인해 부득이 수집된 정보는 서비스 개선 및 통계분석 용도로 사용되며 그 밖의 용도로는 절대 사용되지 않습니다.
            2. 비회원의 개인정보 수집/이용 목적 및 항목
            수집항목
            수집이용 목적
            서비스 이용기록, 쿠키, 접속로그, IP 주소, 결제기록, 기기고유번호, 접속 위치 정보, 휴대폰장치아이디, 기기고유번호
            서비스 이용 및 부정거래 기록 확인, 정보의 통계 및 분석, 통신사실확인 및 서비스 품질 관리 통계

            3. 비회원으로 서비스를 이용할 때에는 회원에게만 적용되는 사항을 제외한 나머지 부분에 대하여는 회원과 동일하게 개인정보처리방침이 적용됩니다. (개인정보 보유 및 이용기간 등)
            4. 회사는 비회원의 개인정보도 회원과 동등한 수준으로 보호합니다.
          </Typography>

          <Typography variant="subtitle2" gutterBottom className={classes.subtitle}>
            8. 개인정보 파기 절차 및 방법
          </Typography>
          <Typography variant="body2" gutterBottom>
            1. 회사는 수집한 개인정보의 이용목적이 달성된 후에는 보관기간과 이용기간에 따라 해당 정보를 바로 파기합니다. 절차, 방법, 시점은 아래와 같습니다.
            가. 파기절차 및 시점 고객이 서비스 가입 등을 위해 기재한 개인정보는 서비스 해지 등 이용목적이 달성되고 나면 내부 방침과 기타 관련 법령의 정보보호 사유 (위 개인정보의 보유 및 이용기간 참조)에 따른 보유 기간이 지난 후에 삭제되거나 파기합니다.
            나. 파기방법 전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용하며, 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.
          </Typography>

          <Typography variant="subtitle2" gutterBottom className={classes.subtitle}>
            9. 이용자 및 법정대리인의 권리와 그 행사 방법
          </Typography>
          <Typography variant="body2" gutterBottom>
            1. 이용자 및 법정 대리인은 언제든지 등록되어 있는 자신의 개인정보를 조회하거나 수정할 수 있으며 가입 해지(회원탈퇴)를 요청할 수 있습니다.
            2. 이용자 및 법정 대리인의 가입정보를 해지(동의철회)하기 위해서는 "회원탈퇴"를 클릭하여 본인 확인 절차를 거치신 후 직접 열람, 정정 또는 탈퇴가 가능하며, 개인정보보호책임자 또는 담당자에게 서면, 전화 또는 전자우편주소로 연락하시면 지체 없이 조치하겠습니다.
            3. 귀하가 개인정보의 오류에 대한 정정을 요청하신 경우에는 정정을 완료하기 전까지 개인정보를 이용 또는 제공하지 않습니다. 또한 잘못된 개인정보를 제3자에게 이미 제공한 경우에는 정정 처리결과를 제3자에게 지체 없이 통지하여 정정이 이루어지도록 하겠습니다.
            4. 회사는 이용자 혹은 법정 대리인의 요청에 의해 해지 또는 삭제된 개인정보는 회사가 수집하는 "개인정보의 보유 및 이용기간"에 명시된 바에 따라 처리하고 그 외의 용도로 열람 또는 이용할 수 없도록 처리하고 있습니다.
            5. 이용자는 자신의 개인정보를 최신의 상태로 유지해야 하며, 이용자의 부정확한 정보 입력으로 발생하는 문제의 책임은 이용자 자신에게 있습니다.
            6. 타인의 개인정보를 도용한 회원가입의 경우 이용자 자격을 상실하거나 관련 개인정보보호 법령에 의해 처벌 받을 수 있습니다.
            7. 이용자는 전자우편주소, 비밀번호 등에 대한 보안을 유지할 책임이 있으며 제3자에게 이를 양도하거나 대여 할 수 없습니다.
          </Typography>

          <Typography variant="subtitle2" gutterBottom className={classes.subtitle}>
            10. 개인정보의 기술적·관리적 보호대책
          </Typography>
          <Typography variant="body2" gutterBottom>
            회사는 이용자의 개인정보를 처리함에 있어 개인정보가 분실, 도난, 누출, 변조, 훼손 등이 되지 아니하도록 안전성을 확보하기 위하여 다음과 같이 기술적·관리적 보호대책을 강구하고 있습니다.
            1. 비밀번호의 암호화
            이용자의 비밀번호는 일방향 암호화하여 저장 및 관리되고 있으며, 개인정보의 확인, 변경은 비밀번호를 알고 있는 본인에 의해서만 가능합니다.
            2. 해킹 등에 대비한 대책
            가. 회사는 해킹, 컴퓨터 바이러스 등 정보통신망 침입에 의해 이용자의
            개인정보가 유출되거나 훼손되는 것을 막기 위해 최선을 다하고 있습니다.
            나. 최신 백신프로그램을 이용하여 이용자들의 개인정보나 자료가 누출되거나
            손상되지 않도록 방지하고 있습니다.
            다. 만일의 사태에 대비하여 침입차단 시스템을 이용하여 보안에 최선을 다하고
            있습니다.
            라. 민감한 개인정보는 암호화 통신 등을 통하여 네트워크상에서 개인정보를
            안전하게 전송할 수 있도록 하고 있습니다.
            3. 개인정보 처리 최소화 및 교육
            회사는 개인정보 관련 처리 담당자를 최소한으로 제한하며, 개인정보 처리자에 대한 교육 등 관리적 조치를 통해 법령 및 내부방침 등의 준수를 강조하고 있습니다.
            4. 개인정보보호 전담담당부서 운영
            회사는 개인정보의 보호를 위해 개인정보보호 전담부서를 운영하고 있으며, 개인정보처리방침의 이행사항 및 담당자의 준수여부를 확인하여 문제가 발견될 경우 즉시 해결하고 바로 잡을 수 있도록 최선을 다하고 있습니다.
          </Typography>

          <Typography variant="subtitle2" gutterBottom className={classes.subtitle}>
            8. 개인정보 자동수집장치의 설치/운영 및 거부에 관한 사항
          </Typography>
          <Typography variant="body2" gutterBottom>
            회사는 이용자의 쿠키를 수집하지 않습니다.
          </Typography>

          <Typography variant="subtitle2" gutterBottom className={classes.subtitle}>
            9. 개인정보보호책임자
          </Typography>
          <Typography variant="body2" gutterBottom>
            1. 회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 고객님의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자 및 개인정보보호 전담담당부서를 지정하고 있습니다.
            2. 이용자께서는 회사의 서비스(또는 사업)을 이용하시면서 발생한 모든 개인정보와 관련된 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자 및 개인정보보호 전담담당부서로 문의하실 수 있습니다. 회사는 이용자의 문의에 대해 지체 없이 답변 및 처리해드릴 것입니다.
            ● 개인정보보호책임자
            소속 : 드루와운영팀
            성명 : 강재훈
            연락처 : 010-3628-1415
            전자우편 : support@duruwacompany.com
          </Typography>

          <Typography variant="subtitle2" gutterBottom className={classes.subtitle}>
            10. 기타 개인정보침해에 대한 신고 및 상담
          </Typography>
          <Typography variant="body2" gutterBottom>
            이용자는 아래의 기관에 대해 개인정보 침해에 대한 피해구제, 상담 등을 문의하실 수 있습니다. 아래의 기관은 정부기관 소속으로서, 회사의 자체적인 개인정보 불만처리 또는 개인정보 피해구제 결과에 만족하지 못하실 경우, 자세한 도움이 필요하실 경우에는 문의하여 주시기 바랍니다.
          </Typography>
          <Typography variant="body2" gutterBottom>
            ● 개인정보침해신고센터
            홈페이지 : https://www.i-privacy.kr/ http://privacy.kisa.or.kr/
            전화번호 : (국번없이) 118
            ● 개인정보분쟁조정위원회
            홈페이지 : http://kopico.or.kr/
            전화번호 : 1833-6972
            ● 대검찰청 사이버범죄수사단
            홈페이지 : http://www.spo.go.kr
            전화번호 : (국번없이) 1301
            ● 경찰청 사이버안전국
            홈페이지 : http://cyberbureau.police.go.kr/index.do
            전화번호 : (국번없이) 182
          </Typography>

          <Typography variant="subtitle2" gutterBottom className={classes.subtitle}>
            11. 고지의 의무
          </Typography>
          <Typography variant="body2" gutterBottom>
            (1) 현 개인정보처리방침은 법령, 정부의 정책 또는 회사 내부정책 등 필요에 의하여 변경될 수 있으며, 내용 추가, 삭제 및 수정이 있을 시에는 개정 최소 7일전부터 홈페이지의 '공지사항'을 통해 고지할 것입니다. 다만, 이용자 권리의 중요한 변경이 있을 경우에는 최소 30일 전에 고지합니다.
            (2) 현 개인정보처리방침은 2020년 5월 1일부터 적용되며, 변경 전의 개인정보처리방침은 공지사항을 통해서 확인하실 수 있습니다.
          </Typography>

        </Grid>
    </Grid>
  )
}

export default PrivacyPolicy;