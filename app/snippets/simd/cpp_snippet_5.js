export default
    `#include <nmmintrin.h>

int main(int argc, char *argv[]) 
{
    float *values = new float[4]{5.0f, 6.0f, 7.0f, 9.0f};

    __m128 a = _mm_set_ps1(4.0f);
    __m128 *b = (__m128 *)values;
    __m128 res = _mm_add_ps(a, b[0]);  // 9.0f, 10.0f, 11.0f, 12.0f

    delete[] values;

    return 0;
}`;