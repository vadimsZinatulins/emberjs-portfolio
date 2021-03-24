export default
    `#include <nmmintrin.h>
#include <iostream>

int main(int argc, char *argv[])
{
    __m128 a = _mm_set_ps(1.0f, 2.0f, 3.0f, 4.0f);
	float *values = (float*)(&a);

	std::cout << values[0] << ", " << values[1] << ", " << values[2] << ", " << values[3] << std::endl;

    return 0;
}`;
