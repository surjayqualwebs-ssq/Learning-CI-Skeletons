// Simple test to simulate CI checks
function testCounter() {
  let count = 0;
  count++;
  if (count !== 1) throw new Error('Increment failed');
  count--;
  if (count !== 0) throw new Error('Decrement failed');
  console.log('✅ Counter tests passed!');
}

testCounter();
