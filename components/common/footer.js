import Container from './container';

export default function footer() {
  return (
    <footer className="bg-gray-800 px-5 py-3 text-white text-xs">
      <Container>
        <div className="flex item-center justiy-between py-2">
          <span className="sm:flex-1">드루와 이용약관</span>
          <span className="sm:flex-1">전자금융거래 이용약관</span>
          <span className="sm:flex-1">개인정보처리방침</span>
          <span className="sm:flex-1">위치기반 서비스 이용약관</span>
        </div>
        <div className="py-4">
          <span>범윤이집 드루와대표이사 한범윤 사업자번호 512 24 2020 Copyright duruwa corp.</span>
        </div>
      </Container>
    </footer>
  )
};