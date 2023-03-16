export default
    `#include <vector>

int sum_of_integers(const std::vector<int> numbers) {
  int sum = 0;                                // Line 1

  for (int i = 0; i < numbers.size(); i++) {  // Line 2
      sum += numbers[i];                      // Line 3
  }

  return sum;                                 // Line 4
}`;
