## NVM

백준 node 버전은 16.13.1이므로 NVM으로 맞춤

실행: node --stack-size=65536 Main.js  
버전: v16.13.1

> - [백준 언어 정보 node.js](https://help.acmicpc.net/language/info)

## Prettier

```json
// .prettierrc
// 기본값을 별도로 표기하지 않은 옵션은 기본값 사용중
{
	"printWidth": 80 /*                     행갈이의 임계 너비를 80으로 설정 */,
	"useTabs": true /*                      기본값: false, 들여쓰기에 space가 아니라 tab 사용 */,
	"tabWidth": 2 /*                        1 tab = 2 spaces */,
	"singleQuote": false /*                 쌍따옴표 사용 */,
	"quoteProps": "as-needed" /*            객체 속성에 따옴표가 필수일 경우 추가 */,
	"trailingComma": "all" /*               쉼표 항상 사용 */,
	"arrowParens": "always" /*              화살표 함수 매개변수를 항상 괄호(`()`)로 감싸기 */,
	"bracketSpacing": true /*               객체 리터럴의 괄호(`{}`) 안쪽으로 공백 추가 */,
	"experimentalTernaries": true /*        기본값: false, 새로운 삼항연산자 포맷팅 사용 */,
	"semi": true /*                         모든 문(statement)에 세미콜론 사용 */,
	"endOfLine": "lf" /*                    개행 문자를 `\n`(Line Feed)으로 설정 */,

	// 현재 프로젝트와 관계없는 옵션
	"htmlWhitespaceSensitivity": "css" /*   HTML 공백에 대해 CSS의 `display` 속성에 따른 기본값 존중 */,
	"bracketSameLine": false /*             HTML(JSX)에서 여는 태그의 `>`를 다음 줄에 위치 */,
	"singleAttributePerLine": false /*      HTML(JSX)에서 한 줄에 여러 속성의 존재 허용 */,
	"jsxSingleQuote": false /*              JSX의 속성에 쌍따옴표 사용 */,
	"proseWrap": "preserve" /*              마크다운을 `printWidth`에 따른 행갈이 없이 그대로 보존 */,
	"embeddedLanguageFormatting": "auto" /* 임베디드 코드(ex. 마크다운 코드 블록) 포맷팅 */
}
```

### References

> - [Prettier Docs Options](https://prettier.io/docs/en/options.html)
> - [New Ternary Formatting: A Curious Case of the Ternaries](https://github.com/prettier/prettier/pull/13183)
> - [Whitespace-sensitive formatting](https://prettier.io/blog/2018/11/07/1.15.0#whitespace-sensitive-formatting)
