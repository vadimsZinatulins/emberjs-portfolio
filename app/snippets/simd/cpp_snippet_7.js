export default
    `#include <nmmintrin.h>
#include <iostream>

union MyType
{
    float values[4];
    __m128 mmValues;
};

int main(int argc, char *argv[]) 
{
	MyType a{ 5.0f, 4.0f, 3.0f, 2.0f };	// Behaving like array of floats
	__m128 b = _mm_set_ps1(4.0f);

	MyType res;
	res.mmValues = _mm_add_ps(a.mmValues, b); // 9.0f, 8.0f, 7.0f, 6.0f

	std::cout << res.values[0] << ", " << res.values[1] << ", " << res.values[2] << ", " << res.values[3] << std::endl;

    return 0;
}`;