export default
    `#include <nmmintrin.h>
#include <iostream>

int main(int argc, char *argv[]) 
{
	__m128 a = _mm_set_ps(1.0f, 2.0f, 3.0f, 4.0f);
	__m128 b = _mm_set_ps1(4.0f);

	__m128 res = _mm_add_ps(a, b);

	float fRes[4];
	_mm_store_ps(fRes, res);

	std::cout << fRes[0] << ", " << fRes[1] << ", " << fRes[2] << ", " << fRes[3] << std::endl;

    return 0;
}`;