const str = `
010-1234-5678
hardy-cat@naver.com
http://www.omdbapi.com/?apikey=7035c60c&s=frozen
Lorem ipsum dolor sit amet, consectetur adipisicing elit.
abbcccdddd
https://www.naver.com/
동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세
`

console.log(
  str.match(/(?<=@).{1,}/g)
)