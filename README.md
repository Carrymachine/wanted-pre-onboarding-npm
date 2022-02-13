# 원티드 프리온보딩 프론트엔드 과제

안녕하세요. 지원자 정규상입니다. 잘 부탁드립니다!

1. `npm install`
2. `npm install styled-components `

React와 styled-component만 사용했습니다.

## Toggle

### 구현방법

onClick시 state가 `true | false`로 변환됩니다.

### 이유

Toggle은 크게 3가지의 상태를 가질 수 있습니다.

`true | false | disabled` 인데 Toggle을 `disabled`상태를 내려줄 수 있는 상위 요소가 없기 때문에

`true | false`만 상태로 주면 될 것이라고 생각했습니다.

### 구현 시 어려웠던 점, 해결방법

마침 이전 프로젝트에서 토글을 만들었기 때문에 어렵지 않았습니다.

### 자세한 실행방법

토글을 클릭해주시면 됩니다.

## Modal

### 구현방법

1. onClick시 state가 `true | false`로 변환됩니다.
2. `state = true`일 경우 ` body.style.overflow = hidden` 시킵니다.

### 이유

1. 모달이 열리거나(`true`) 닫히거나(`false`) 둘 중 하나의 상태를 가지기 때문에 Toggle과 같이 구현했습니다.

2. Modal이 켜졌을 때 유저가 해당 Modal에 집중할 수 있도록 배경을 dimmed 처리하고 scroll을 막았습니다.

### 구현 시 어려웠던 점, 해결방법

기본적으로 Toggle과 구현 방법이 비슷해서 어렵지 않았습니다.

### 자세한 실행방법

Open Modal 버튼 클릭 시 모달이 나옵니다. Close Modal 버튼 클릭시 모달이 닫힙니다.

## Tab

### 구현방법

test component 3개를 생성하고 각 탭이 클릭될 때마다 `selectedTab 의 state`를 변경하고 state에 따라 각 다른 컴포넌트를 렌더링 했습니다.

### 이유

뷰 전환에 여러가지 방법이 있어서 기존에 사용하던 `react-router`를 사용하려고 했으나 기능 구현에 직접적인 영향을 주는 라이브러리기 때문에 사용하지 않았습니다.

### 구현 시 어려웠던 점, 해결방법

확장성을 고려했을 때 JSX 렌더링하는 부분에서 component 전환 시 `삼항연산자`가 아닌 `switch case`로 작성하는게 좋았을 것 같습니다.

### 자세한 실행방법

상단 `tab1, tab2, tab3` 각 탭 클릭 시 하단 컴포넌트가 변경됩니다.

## Tag

### 구현방법

`Enter | Spacebar`가 입력되면 state에 추가되는 `handleKeyPress`

태그 생성 후 `X` 클릭 시 state에서 해당 `X` 버튼의 부모 요소(태그)가 삭제되는 ``removeTag` 두가지 함수로 구성하고

`state.map`으로 렌더링 했습니다.

### 이유

array가 추가 삭제가 용이하다고 생각했기 때문에 state를 array로 할당했습니다.

### 구현 시 어려웠던 점, 해결방법

각 태그의 id 값을 `map 콜백의 index` 값으로 한 것이 조금 아쉽습니다. 외에 어려운 점은 없었습니다.

### 자세한 실행방법

input에 값을 입력 후 `Enter | Spacebar` 누를 시 태그가 추가됩니다.

`X` 버튼 클릭 시 태그가 삭제됩니다.

## Auto Complete

### 구현방법

test data를 구성하고 `input.value`를 기준으로 `data.value`를 조건에 따라 두 가지로 `filter`하는 함수

`filterFirstChar`, `filterCorrectWord` 를 만들었습니다.

### 이유

아래에서 설명하겠습니다.

### 구현 시 어려웠던 점, 해결방법

Auto Complete을 처음 구현해봤습니다.

input 아래에 filter된 data를 li로 나타내줘야겠다는 윤곽이 잡혔고 1차 완성읋 했을 때

`input.value`를 `includes`하고있는 `data.value`값을 `sort`해서 렌더링 하다보니 `s` 를 입력하면 `au's'tralia`가 출력되는 오류가 발생했습니다.

그래서 `input.value`의 길이만큼 `data.value`의 `0부터 input.value.length` 만큼 비교하는 함수(`filterFirstChar`)를 만들었습니다.

결과는 `s` 입력 시 s로 시작하는 나라가 렌더링 됐습니다. 다만 여기서 한가지 오류가 더 발생합니다.

`ko` 입력 시 ko로 시작하는 나라가 없기 때문에 아무것도 렌더링 되지 않는 것입니다.

그래서 위에서 만든 `filterFirstChar`가 빈 배열 일 경우(`length === 0`) `data.value`에서 `input.value`를 포함하는 값들을 렌더링 해주는 함수(`filterCorrectWord`)를 만들었습니다.

최종적으로 JSX 렌더링 시 `filterFirstChar.length === 0 ? filterCorrectWord : filterFirstChar`를 해주어 원하는 결과를 얻을 수 있었습니다.

### 아쉬운 점

각 함수에서 input.value 값을 쓰기위해 `const inputValue = document.getElementById("auto-complete-input")`의 선언이 필요합니다.

Context, Recoil, Redux 같은 전역상태관리 라이브러리를 사용했으면 더 깔끔한 코드를 사용할 수 있었을 것 같습니다.

또한 개발을 시작하고나서 항상 고민이었던 변수명 네이밍센스가 너무 아쉽습니다.

### 자세한 실행방법

`united arab emirates / south korea / japan / south africa / south america / sweden / singapore / china / honkong / jamaica / australia / canada / france` 중 검색해보시면 됩니다.

example
s -> singapore , south africa , south america , south korea , sweden 렌더링
ko -> hongkong , south korea 렌더링

## Click To Edit

### 구현방법

각 `input.value`를 가지는 state를 2개 와 `변경된 값을 렌더링 해주는 state`를 선언하고 해당 state가 변경되고 다른 필드가 클릭(onMouseUp)되면 업데이트 됩니다.

### 이유

과제 예시만 봐서 잘 이해가 가지 않았습니다.` input:focus가 해제되면 update | input.value 수정 후 클릭하면 update` 두개 중 하나로 생각했는데

따로 버튼은 없는 것 같았고 최대한 과제 예시와 비슷하게 만드려고 했습니다.

### 구현 시 어려웠던 점, 해결방법

어려웠던 점은 없었지만 위에서 말한 `input:focus가 해제되면 update | input.value` 수정 후 클릭하면 update 중 고민을 많이 했습니다만 최대한 비슷하게 만들기 위해 후자를 선택했습니다.

또한 onMouseUp과 onClick중 고민했는데 onMouseUp은 사용해본적이 없어서 onMouseUp을 사용해봤습니다.

### 자세한 실행방법

`input.value` 값을 변경 후 부모 요소의 아무 곳이나 클릭하면 됩니다.

## 감사합니다!

Auto Complete을 만드는 것이 제일 재밌었습니다.
차후 계속 업데이트 해보려고합니다. 감사합니다!
