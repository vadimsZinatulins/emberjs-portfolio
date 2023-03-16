export default
    `#include <vector>

int addFirstTwo(std::vector<int> input) {
  if(input.size() < 2) {  // Line 1
    return 0;             // Line 2
  }

  int first = input[0];   // Line 3
  int second = input[1];  // Line 4

  return first + second;  // Line 5
}`;
