import cuid from 'cuid';

const generate = () => {
  const generated = [];
  let counter = 0;
  while (counter < 5) {
    generated.push(cuid());
    counter++;
  }
  const sorted = generated.sort();
  console.log('length of generated is ' + generated.length + ' !!!!');
  console.log('length of sorted is ' + sorted.length + ' !?!?');
  console.log('comparison........');
  console.log(generated);
  console.log(sorted);
};

const slugGen = () => {
  const generated = [];
  let counter = 0;
  while (counter < 5) {
    generated.push(cuid.slug());
    counter++;
  }
  const sorted = generated.sort();
  console.log('length of generated slug  is ' + generated.length + ' !!!!');
  console.log('length of sorted slug is ' + sorted.length + ' !?!?');
  console.log('comparison........');
  console.log(generated);
  console.log(sorted);
};
generate();
slugGen();
