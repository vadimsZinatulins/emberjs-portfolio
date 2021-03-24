export default
    `#include <nmmintrin.h>  // when we want to use SSE
#include <immintrin.h>  // when we want to use AVX

int main(int argc, char *argv[]) 
{
    __m128 a = _mm_set_ps(1.0f, 2.0f, 3.0f, 4.0f);
    __m128 b = _mm_set_ps(5.0f, 6.0f, 7.0f, 8.0f);

    __m128 res = _mm_add_ps(a, b);

    return 0;
}`;