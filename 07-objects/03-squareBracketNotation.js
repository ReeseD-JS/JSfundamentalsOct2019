let garden = {
    vegetable: 'zucchini',
    flower: 'sun flower',
    fruit: 'grape',
    water: true,
    sun: true,
    size: 10,
};

//console.log(garden.vegetable)

let x = 'vegetable';

//console.log(garden.x, garden[x]);

let baking = {};
//baking.zucchini = 'better get this bread son';
//console.log(baking)

baking['zucchini'] = 'better get this bread dog';
//console.log(baking);

//console.log(baking[garden['vegetable']])

console.log(baking['zucchini']);

///////////////////////////////////////////////////////////////////////



let garden = {
    vegetable: 'zucchini',
    flower: 'sun flower',
    fruit: 'grape',
    water: true,
    sun: true,
    size: 10,
};

let bongos = 'water';

Object.keys(garden).forEach(g => {
   // console.log(g)
   if (g === bongos) {
       console.log(garden[bongos])
   }
})