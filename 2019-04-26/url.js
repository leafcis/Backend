const url = require('url');

const URL = url.URL;
const myURL = new URL('http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor');
console.log('new URL():', myURL);
console.log('url.format():', url.format(myURL));
console.log('-------------------------------');
const parsedUrl = url.parse('http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor');
console.log('url.parse():', parsedUrl); // 주소를 분해. WHATWG 방식과 비교하면 username과 password 대신 auth 속성이 있고, searchParams 대신 query가 있음.
console.log('url.format():', url.format(parsedUrl)); // WHATWG 방식의 url과 기존 노드의 url 모두 사용할 수 있음. 분해되었던 url 객체를 다시 원래 상태로 조립함.

/* 
    WHATWG은 웹 표준을 정하는 단체의 이름을 말하며, node.js에서는 이 단체의 url 방식이나 예전부터 노드에서 사용하던 방식의 url을 사용함
    WHATWG와 노드의 url은 취향에 따라 사용하면 됨.
    노드의 url 형식을 꼭 사용해야 하는 경우가 있는데, 주소가 host 부분 없이 pathname 부분만 오는 경우에는 WHATWG 방식은 처리를 할 수 없으므로 노드의 url 형식을 사용해야함.

    WHATWG 방식은 search 부분을 searchParams라는 특수한 객체로 반환하므로 유용함. search 부분은 보통 주소를 통해 데이터를 전달할 때 사용됨.
*/