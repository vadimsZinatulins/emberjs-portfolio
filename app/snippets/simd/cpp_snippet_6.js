export default
    `#include <nmmintrin.h>

union MyType
{
    float values[4];
    __m128 mmValues;
};

int main(int argc, char *argv[]) 
{
	MyType a{ 5.0f, 4.0f, 3.0f, 2.0f };	// Behaving like array of floats
	__m128 b = _mm_set_ps1(4.0f);
	__m128 res = _mm_add_ps(a.mmValues, b);  // 9.0f, 8.0f, 7.0f, 6.0f

    return 0;
}`;