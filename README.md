# Woojeong's Portfolio site
> 자기소개, 개인 포트폴리오와 Skillset을 모아둔 포트폴리오 사이트입니다      

## *🧡 작업툴*
- 와이어 프레이밍 및 디자인 : Photoshop, Illustrator
- Visual Studio code, HTML5, CSS3, jQuery    

## *🧡 Design*
- 메인 색상 : 민트, 오렌지, 베이지
  > 평소 좋아하는 색상인 민트 색상과 함께, 밝고 통통튀는 느낌을 가져가고자 세가지 색상 선택
- '여행'을 좋아해서, 그와 연관된 주제인 '비행기'라는 키워드를 결합하여,      
  스크롤을 내릴 때 마다 각 섹션에서 귀엽고 재미있는 요소를 주고자 디자인에 사용
  > 사이트 내 모든 아이콘은 일러스트로 직접 제작 (비행기 및 footer영역의 카카오/깃허브 아이콘)
- 아이폰의 미모티콘 사용하여 사이트가 지루하지 않도록 귀여운 디자인 요소 넣고자 함

## *🧡 Code*
- PC, Mobile 반응형 지원(PC 1920＊1080에서 최적화)
- 함수의 이벤트 객체를 이용하여, 메인 이미지안에 마우스 오버 됐을 때 텍스트가 마우스를 따라 방향 움직이도록 구현     
  > - 이벤트 객체의 clientX,Y 사용하여 마우스 이벤트 발생점 인지하도록 함
- 스크롤을 하면 따라오는 라인은 svg와 jQuery를 사용하여 구현
  > - window scroll 이벤트 사용
  > - path의 길이(getPathLength), scroll된 양을 퍼센트 변수로 지정하여 사용, 
      svg의 CSS속성인 stroke-dasharray와 stroke-dashoffet활용
  > - addClass와 CSS animation 사용하여, 원하는 위치에 스크롤이 왔을 때 선이 자연스럽게 생겨나도록 함
- skill value는 jQuery의 animate사용하여 구현
  > - each를 사용하여 각각 index값을 부여 후, 순차적으로 나타나도록 delay값 줌
  > - scroll이 계속해서 활성화 되지 않도록, scroll변수에 true, false (boolean) 사용
- footer의 icon 색깔 변경은 attr이용하여 src를 원하는 소스로 바꾸어 구현
- 모바일 Work section의 이미지 슬라이드는 'Swiper' 라이브러리 활용
  > - 참고 링크 : [Swiper](https://swiperjs.com/)
- 사이트의 오류는 지속적으로 수정중입니다😋 (safari 오류 대응중)


## 🧡 PC ver. 디자인
- 디자인에 포함 된 텍스트의 내용은, 실제 사이트에서 내용 변경되었습니다😀
<p align="center"><img src="https://user-images.githubusercontent.com/75009488/111991514-c052ce80-8b57-11eb-96dc-decd13ddca5d.jpg" width="50%" height="50%"/></p>          

## 🧡 Mobile ver. 디자인
<p align="center"><img src="https://user-images.githubusercontent.com/75009488/111991486-ba5ced80-8b57-11eb-9e4c-3ad79d29f1fd.jpg" width="50%" height="50%"/></p>
