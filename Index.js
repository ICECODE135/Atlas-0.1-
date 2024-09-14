const ai = require('./ai');
const smartDevice = require('./smartDevice');
const blockchain = require('./blockchain');
const Stack = require('./Stack');

const stack = new Stack();

function handleUserInput(input) {
  const response = ai.processInput(input);
  if (response.action === 'smartDevice') {
    smartDevice.handleAction(response.data);
  } else if (response.action === 'blockchain') {
    blockchain.handleAction(response.data);
  }
  stack.push(response);
}

handleUserInput('Turn on the living room lights');

console.log('Stack size:', stack.size());
console.log('Top item:', stack.peek());
