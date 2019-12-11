const a = character(
    '.#####.' +
    '#.....#' +
    '#.....#' +
    '#######' +
    '#.....#' +
    '#.....#' +
    '#.....#'
);
const b = character(
    '######.' +
    '#.....#' +
    '#.....#' +
    '######.' +
    '#.....#' +
    '#.....#' +
    '######.'
);
const c = character(
    '#######' +
    '#......' +
    '#......' +
    '#......' +
    '#......' +
    '#......' +
    '#######'
);
const d = character(
    '######.' +
    '#.....#' +
    '#.....#' +
    '#.....#' +
    '#.....#' +
    '#.....#' +
    '######.'
);
const e = character(
    '#######' +
    '#......' +
    '#......' +
    '#######' +
    '#......' +
    '#......' +
    '#######'
);
const f = character(
    '#######' +
    '#......' +
    '#......' +
    '#######' +
    '#......' +
    '#......' +
    '#......'
);
const g = character(
    '.#####.' +
    '#.....#' +
    '#......' +
    '#..###.' +
    '#.....#' +
    '#.....#' +
    '.#####.'
);
const h = character(
    '#.....#' +
    '#.....#' +
    '#.....#' +
    '#######' +
    '#.....#' +
    '#.....#' +
    '#.....#'
);
const i = character(
    '...#...' +
    '.......' +
    '...#...' +
    '...#...' +
    '...#...' +
    '...#...' +
    '...#...'
);
const j = character(
    '...#...' +
    '.......' +
    '...#...' +
    '...#...' +
    '...#...' +
    '#..#...' +
    '.##....'
);
const k = character(
    '#...#..' +
    '#..#...' +
    '#.#....' +
    '##.....' +
    '#.#....' +
    '#..#...' +
    '#...#..'
);
const l = character(
    '#......' +
    '#......' +
    '#......' +
    '#......' +
    '#......' +
    '#......' +
    '#######'
);
const ł = character(
    '#......' +
    '#......' +
    '#......' +
    '#......' +
    '#.#....' +
    '##.....' +
    '#######'
);
const m = character(
    '#.....#' +
    '##...##' +
    '#.#.#.#' +
    '#..#..#' +
    '#.....#' +
    '#.....#' +
    '#.....#'
);
const n = character(
    '#.....#' +
    '##....#' +
    '#.#...#' +
    '#..#..#' +
    '#...#.#' +
    '#....##' +
    '#.....#'
);
const o = character(
    '.#####.' +
    '#.....#' +
    '#.....#' +
    '#.....#' +
    '#.....#' +
    '#.....#' +
    '.#####.'
);
const u = character(
    '#.....#' +
    '#.....#' +
    '#.....#' +
    '#.....#' +
    '#.....#' +
    '#.....#' +
    '.#####.'
);
const p = character(
    '######.' +
    '#.....#' +
    '#.....#' +
    '######.' +
    '#......' +
    '#......' +
    '#......'
);
const r = character(
    '######.' +
    '#.....#' +
    '#.....#' +
    '######.' +
    '#.#....' +
    '#..#...' +
    '#...#..'
);


/**
 * Learn the chars.
 */
const net = new brain.NeuralNetwork();
net.train([{
    input: a,
    output: {
        a: 1
    }
},
    {
        input: b,
        output: {
            b: 1
        }
    },
    {
        input: c,
        output: {
            c: 1
        }
    },
	{
        input: d,
        output: {
            d: 1
        }
    },
	{
        input: e,
        output: {
            e: 1
        }
    },
	{
        input: f,
        output: {
            f: 1
        }
    },
	{
        input: g,
        output: {
            g: 1
        }
    },
	{
        input: h,
        output: {
            h: 1
        }
    },
	{
        input: i,
        output: {
            i: 1
        }
    },
	{
        input: j,
        output: {
            j: 1
        }
    },
	{
        input: k,
        output: {
            k: 1
        }
    },
	{
        input: l,
        output: {
            l: 1
        }
    },
	{
        input: ł,
        output: {
            ł: 1
        }
    },
	{
        input: m,
        output: {
            m: 1
        }
    },
	{
        input: n,
        output: {
            n: 1
        }
    },
	{
        input: o,
        output: {
            o: 1
        }
    },
	{
        input: u,
        output: {
            u: 1
        }
    },
	{
        input: p,
        output: {
            p: 1
        }
    },
	{
        input: r,
        output: {
            r: 1
        }
    }
], {
    log: detail => console.log(detail)
});

function perceptron(){
    var input = document.getElementById('input').value;

    document.getElementById("result").innerText = brain.likely(character(
        input
    ), net);
}


/**
 * Turn the # into 1s and . into 0s. for whole string
 * @param string
 * @returns {Array}
 */
function character(string) {
    return string
        .replace(/(\r\n|\n|\r)/gm,"")
        .trim()
        .split('')
        .map(integer);
}

/**
 * Return 0 or 1 for '#'
 * @param character
 * @returns {number}
 */
function integer(character) {
    if ('#' === character) return 1;
    return 0;
}

function showIterations() {

}
