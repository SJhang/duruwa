import React from 'react';
import { Grid, Typography } from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    subtitle: {
        fontWeight: 600
    }
}))

function LocationPolicy() {
    const classes = useStyles();

  return (
    <Grid container>
        <Grid item>
            <Typography variant="h6" className={classes.subtitle} gutterBottom>위치기반서비스 이용약관</Typography>
            <br/>
            <Typography variant="subtitle2" gutterBottom className={classes.subtitle}>제 1 조 (목적)</Typography>
            <Typography variant="body2" gutterBottom>본 약관은 주식회사 드루와컴퍼니(이하 "회사")가 제공하는 위치기반서비스에 대해 회사와 위치기반서비스를 이용하는 개인위치정보주체(이하 "이용자")간의 권리·의무 및 책임사항, 기타 필요한 사항 규정을 목적으로 합니다.</Typography>

            <Typography variant="subtitle2" gutterBottom className={classes.subtitle}>제 2 조 (이용약관의 효력 및 변경)</Typography>
            <Typography variant="body2" gutterBottom>
            1. 본 약관은 이용자가 본 약관에 동의하고 회사가 정한 절차에 따라 위치기반서비스의 이용자로 등록됨으로써 효력이 발생합니다.
            2. 회사는 법률이나 위치기반서비스의 변경사항을 반영하기 위한 목적 등으로 약관을 수정할 수 있습니다.
            3. 약관이 변경되는 경우 회사는 변경사항을 최소 7일 전에 회사의 홈페이지 등 기타 공지사항 페이지를 통해 게시합니다.
            4. 단, 개정되는 내용이 이용자 권리의 중대한 변경이 발생하는 경우에는 30일 전에 게시하도록 하겠습니다.
            </Typography>

            <Typography variant="subtitle2" gutterBottom className={classes.subtitle}>제 3 조 (약관 외 준칙)</Typography>
            <Typography variant="body2" gutterBottom>이 약관에 명시되지 않은 사항에 대해서는 위치 정보의 보호 및 이용 등에 관한 법률, 전기통신사업법, 정보통신망 이용 촉진 및 보호 등에 관한 법률 등 관계법령 및 회사가 정한 지침 등의 규정에 따릅니다.</Typography>

            <Typography variant="subtitle2" gutterBottom className={classes.subtitle}>제 4 조 (서비스의 내용)</Typography>

            <Typography variant="body2" gutterBottom>
                회사는 위치정보사업자로부터 제공받는 위치정보수집대상의 위치정보 및 상태 정보를 이용하여 다음과 같은 내용으로 서비스를 제공합니다.
            서비스명 : 드루와   	서비스 내용: 1. 위치정보수집대상의 위치확인
            2. 이용자의 위치에서 근접한 순으로 가게 정보 제공
            회사가 제공하는 위치기반서비스는 무료입니다. 단, 무선 서비스 이용 시 발생하는 데이터 통신료는 별도이며, 이용자가 가입한 각 이동통신사의 정책에 따릅니다.
            </Typography>

            <Typography variant="subtitle2" gutterBottom className={classes.subtitle}>제 5 조 (서비스 이용의 제한·중지)</Typography>
            <Typography variant="body2" gutterBottom>1. 회사는 위치기반서비스사업자의 정책변경 등과 같이 회사의 제반사정 또는 법률상의 이유로 위치기반서비스를 유지할 수 없는 경우 위치기반서비스의 전부 또는 일부를 제한·변경·중지할 수 있습니다.
            2. 단, 위 항에 의한 위치기반서비스 중단의 경우 회사는 사전에 회사 홈페이지 등 기타 공지사항 페이지를 통해 공지하거나 이용자에게 통지합니다.
            </Typography>

            <Typography variant="subtitle2" gutterBottom className={classes.subtitle}>제 6 조 (개인위치정보주체의 권리)</Typography>
            <Typography variant="body2" gutterBottom>1. 이용자는 언제든지 개인위치정보의 수집·이용·제공에 대한 동의 전부 또는 일부를 유보할 수 있습니다.
            2. 이용자는 언제든지 개인위치정보의 수집·이용·제공에 대한 동의 전부 또는 일부를 철회할 수 있습니다. 이 경우 회사는 지체 없이 철회된 범위의 개인위치정보 및 위치정보 수집·이용·제공사실 확인자료를 파기합니다.
            3. 이용자는 개인위치정보의 수집·이용·제공의 일시적인 중지를 요구할 수 있으며, 이 경우 회사는 이를 거절할 수 없고 이를 충족하는 기술적 수단을 마련합니다.
            4. 이용자는 회사에 대하여 아래 자료에 대한 열람 또는 고지를 요구할 수 있으며, 해당 자료에 오류가 있는 경우에는 정정을 요구할 수 있습니다. 이 경우 정당한 사유 없이 요구를 거절하지 않습니다.
            가. 이용자에 대한 위치정보 수집·이용·제공사실 확인자료
            나. 이용자의 개인위치정보가 위치정보의 보호 및 이용 등에 관한 법률 또는 다른
            법령의 규정에 의하여 제3자에게 제공된 이유 및 내용
            5. 이용자는 권리행사를 위해 본 약관 제14조의 연락처를 이용하여 회사에 요청할 수 있습니다.
            </Typography>

            <Typography variant="subtitle2" gutterBottom className={classes.subtitle}>제 7 조 (개인위치정보의 이용 또는 제공)</Typography>
            <Typography variant="body2" gutterBottom>
                1. 회사는 개인위치정보를 이용하여 위치기반서비스를 제공하는 경우 본 약관에 고지하고 동의를 받습니다.
            2. 회사는 이용자의 동의 없이 개인위치정보를 제3자에게 제공하지 않으며, 제3자에게 제공하는 경우에는 제공받는 자 및 제공목적을 사전에 이용자에게 고지하고 동의를 받습니다.
            3. 회사는 개인위치정보를 이용자가 지정하는 제3자에게 제공하는 경우 개인위치정보를 수집한 통신단말장치로 매회 이용자에게 제공받는 자, 제공일시 및 제공목적을 즉시 통지합니다.
            4. 단, 아래의 경우 이용자가 미리 특정하여 지정한 통신단말장치 또는 전자우편주소, 온라인게시 등으로 통지합니다.
            가. 개인위치정보를 수집한 당해 통신단말장치가 문자, 음성 또는 영상의 수신기능을
            갖추지 아니한 경우
            나. 이용자의 개인위치정보를 수집한 통신단말장치 외의 통신단말장치 또는
            전자우편주소, 온라인게시 등으로 통보할 것을 미리 요청한 경우
            5. 회사는 위치정보의 보호 및 이용 등에 관한 법률 제16조 제2항에 근거하여 개인위치정보 수집·이용·제공사실 확인자료를 자동으로 기록·보존하며, 해당 자료는 6개월간 보관합니다.
            </Typography>

            <Typography variant="subtitle2" gutterBottom className={classes.subtitle}>제 8 조 (법정대리인의 권리)</Typography>
            <Typography variant="body2" gutterBottom>회사는 14세 미만의 이용자에 대해서는 개인위치정보를 이용한 위치기반서비스 제공 및 개인위치정보의 제3자 제공에 대한 동의를 이용자 및 이용자의 법정대리인으로부터 동의를 받아야 합니다. 이 경우 법정대리인은 본 약관 제7조에 의한 이용자의 권리를 모두 가집니다.</Typography>

            <Typography variant="subtitle2" gutterBottom className={classes.subtitle}>제 9 조 (8세 이하의 아동 동의 보호의무자의 권리)</Typography>
            <Typography variant="subtitle1" gutterBottom>1. 회사는 아래의 경우에 해당하는 자(이하 “8세 이하의 아동 등”)의 위치정보의 보호 및 이용 등에 관한 법률 제26조2항에 해당하는 자(이하 “보호의무자”)가 8세 이하의 아동 등의 생명 또는 신체보호를 위하여 개인위치정보의 이용 또는 제공에 동의하는 경우에는 본인의 동의가 있는 것으로 봅니다.</Typography>
            <Typography variant="body2" gutterBottom>가. 8세 이하의 아동
            나. 피성년후견인
            다. 장애인복지법 제2조제2항제2호에 따른 정신적 장애를 가진 사람으로서
            장애인고용촉진 및 직업재활법 제2조제2호에 따른 중증장애인에 해당하는 사람
            (장애인복지법 제32조에 따라 장애인 등록을 한 사람만 해당한다)
            </Typography>
            <Typography variant="subtitle1">2. 8세 이하의 아동 등의 생명 또는 신체의 보호를 위하여 개인위치정보의 이용 또는 제공에 동의를 하고자 하는 보호의무자는 서면동의서에 보호의무자임을 증명하는 서면을 첨부하여 회사에 제출하여야 합니다.</Typography>
            <Typography variant="subtitle1">3. 보호의무자는 8세 이하의 아동 등의 개인위치정보 이용 또는 제공에 동의하는 경우 본 약관 제7조에 의한 이용자의 권리를 모두 가집니다.</Typography>

            <Typography variant="subtitle2" gutterBottom className={classes.subtitle}>제 11 조 (손해배상)</Typography>
            <Typography variant="body2" gutterBottom> 1. 이용자가 고의나 과실로 이 약관의 규정을 위반하여 회사에 손해가 발생하였다면, 고객은 회사에 발생하는 모든 손해를 배상해야 합니다
            2. 이용자가 서비스를 이용하면서 불법행위 또는 고의나 과실로 이 약관을 위반하여 회사가 해당 고객 이외의 제3자로부터 손해배상청구 또는 소송을 비롯한 각종 이의제기를 받는다면 해당 고객은 그 때문에 회사에 발생한 손해를 배상하여야 합니다.
            3. 회사가 위치정보법 제15조 내지 제26조의 규정 또는 본 약관의 규정을 위반하여 고객에게 손해가 발생하였을 때, 회사가 고의 또는 과실 없음을 입증하지 않으면 회사는 고객의 손해에 대하여 책임을 부담합니다.
            4. 손해배상의 청구는 회사에 청구사유, 청구금액 및 산출근거를 기재하여 서면으로 해야합니다.
            </Typography>

            <Typography variant="subtitle2" gutterBottom className={classes.subtitle}>제 12 조 (면책사항)</Typography>
            <Typography variant="body2" gutterBottom>1. 회사는 다음 각 호의 경우로 위치기반서비스를 제공할 수 없는 경우 이로 인하여 이용자에게 발생한 손해에 대해서는 책임을 부담하지 않습니다.
            가. 천재지변 또는 이에 준하는 불가항력의 상태가 있는 경우
            나. 위치기반서비스 제공을 위하여 회사와 서비스 제휴계약을 체결한 제3자의 고의적인
            서비스 방해가 있는 경우
            다. 이용자의 귀책사유로 위치기반서비스 이용에 장애가 있는 경우
            라. 제1호 내지 제3호를 제외한 기타 회사의 고의·과실이 없는 사유로 인한 경우
            2. 회사는 위치기반서비스 및 위치기반서비스에 게재된 정보, 자료, 사실의 신뢰도, 정확성 등에 대해서는 보증을 하지 않으며 이로 인해 발생한 이용자의 손해에 대하여는 책임을 부담하지 아니합니다.
            </Typography>

            <Typography variant="subtitle2" gutterBottom className={classes.subtitle}>제 13 조 (분쟁의 조정 및 기타)</Typography>
            <Typography variant="body2" gutterBottom>1. 회사는 위치정보와 관련된 분쟁의 해결을 위해 이용자와 성실히 협의합니다.
            2. 전항의 협의에서 분쟁이 해결되지 않은 경우, 회사와 이용자는 위치정보의 보호 및 이용 등에 관한 법률 제28조의 규정에 의해 방송통신위원회에 재정을 신청하거나, 개인정보보호법 제43조의 규정에 의해 개인정보 분쟁조정위원회에 조정을 신청할 수 있습니다.
            </Typography>

            <Typography variant="subtitle2" gutterBottom className={classes.subtitle}>제 14 조 (회사의 주소 및 연락처)</Typography>
            <Typography variant="body2" gutterBottom>회사의 상호, 주소 및 연락처는 아래와 같습니다.
            상호 : 주식회사 드루와컴퍼니
            대표 : 한범윤
            주소 : 서울특별시 강남구 영동대로 602, 6층 (D97)
            대표전화 : 070 8600 4812
            </Typography>

            <Typography variant="h6">부칙</Typography>
            <Typography variant="subtitle2" gutterBottom className={classes.subtitle}>제 1 조 (시행일)</Typography>
            <Typography variant="body2" gutterBottom>본 약관은 2020년 5월 1일부터 시행됩니다.</Typography>

            <Typography variant="subtitle2" gutterBottom className={classes.subtitle}>제 2 조 (위치정보관리책임자 정보)</Typography>
            <Typography variant="body2" gutterBottom>회사는 개인위치정보를 적절히 관리·보호하고, 이용자의 불만을 원활히 처리할 수 있도록 실질적인 책임을 질 수 있는 지위에 있는 자를 위치정보관리책임자로 지정해 운영하고 있으며, 위치정보관리책임자는 위치기반서비스를 제공하는 부서의 부서장으로서 성명과 연락처는 아래와 같습니다.
            소속: 운영부문
            성명 : 강재훈
            대표전화 : 010 3628 1415
            </Typography>
        </Grid>
    </Grid>
  )
}

export default LocationPolicy;