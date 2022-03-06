import moment from "moment";
import _ from "lodash";

console.log(moment().format("MMMM Do YYYY, h:mm:ss a"));
console.log(moment().format("dddd"));
console.log(moment().format("MMM Do YY"));
console.log(moment().format("YYYY [escaped] YYYY"));
console.log(moment().format());
console.log(moment().format("Z ZZ	"));
console.log(moment.locale());

console.log(moment("2020-01-01").isValid());
console.log(moment("2020-14-01").isValid());

console.log(moment().add(7, "d"));
console.log(moment().add(7, "M"));
console.log(moment().add(7, "y"));
console.log(moment().subtract(7, "d"));
console.log(moment().subtract(7, "M"));
console.log(moment().subtract(7, "y"));

var a = moment([2014, 11, 11]);
var b = moment([2015, 9, 11]);
var answer = a.diff(b, "days"); // 1
console.log(answer);

var c = moment([2014, 11, 27]);
var d = moment([2015, 9, 16]);
var answer1 = c.diff(d, "days"); // 1
console.log(answer1);

var e = moment([2020, 1, 1]);
var f = moment([2018, 1, 1]);
var answer2 = e.diff(f, "days"); // 1

var g = moment([2020, 1, 1]);
var h = moment([2010, 1, 1]);
var answer3 = g.diff(h, "days"); // 1

function beforeOrAfter() {
  if (Math.sign(answer2) === 1) {
    return true;
  } else {
    return false;
  }
}
function beforeOrAfter2() {
  if (Math.sign(answer3) === 1) {
    return true;
  } else {
    return false;
  }
}

console.log(beforeOrAfter());
console.log(beforeOrAfter2());

console.log(moment([2019]).isLeapYear());
console.log(moment([2020]).isLeapYear());

console.log(_.difference([2, 1], [2, 3]));
console.log(_.chunk(["a", "b", "c", "d"], 2));
console.log(_.compact([0, 1, false, 2, "", 3]));
console.log(_.flatten([1, [2, [3, [4]], 5]]));
console.log(_.join(["a", "b", "c"], "~"));

console.log(_.includes([1, 2, 3], 1));
var users = [
  { user: "fred", age: 48 },
  { user: "barney", age: 36 },
  { user: "fred", age: 40 },
  { user: "barney", age: 34 },
];

console.log(
  _.sortBy(users, [
    function (o) {
      return o.user;
    },
  ])
);
console.log(_.some([null, 0, "yes", false], Boolean));
console.log(_.size([1, 2, 3]));
console.log(_.countBy([6.1, 4.2, 6.3], Math.floor));
