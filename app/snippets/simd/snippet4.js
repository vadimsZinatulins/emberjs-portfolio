export default
    `#include <nmmintrin.h>
#include <iostream>

union MySSE
{
	__m128 value;
	float value4[4];
};

int main(int argc, char *argv[])
{
	MySSE a;
	a.value = _mm_set_ps(1.0f, 2.0f, 3.0f, 4.0f);

	std::cout << a.value4[0] << ", " << a.value4[1] << ", " << a.value4[2] << ", " << a.value4[3] << std::endl;

	return 0;
}`;
