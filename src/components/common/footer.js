import Container from './container';

export default function footer() {
  return (
    <footer className="bg-gray-800 px-5 py-3 text-white text-xs">
      <Container>
        <section className="h-64">
          <h3 className="Footer__title">
            <font className="vertical-align inherit">
              <font className="vertical-align inherit">Contact</font>
            </font>
          </h3>
          <div className="flex item-center justify-between pt-10 pb-10">
            <span className="sm:flex-1"><a href="#">드루와 이용약관</a></span>
            <span className="sm:flex-1"><a href="#">전자금융거래 이용약관</a></span>
            <span className="sm:flex-1"><a href="#">개인정보처리방침</a></span>
            <span className="sm:flex-1"><a href="#">위치기반 서비스 이용약관</a></span>
          </div>
          <div>
            <span>범윤이집 드루와대표이사 한범윤 사업자번호 512 24 2020 Copyright duruwa corp.</span>
          </div>
        </section>
      </Container>
    </footer>
  )
};