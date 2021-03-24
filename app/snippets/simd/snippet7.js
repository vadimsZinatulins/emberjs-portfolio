export default
    `void explosionUpdateSIMD(Explosion *explosion, Entity *entities, int numEntities)
{
	__m128 mmExplosionX = _mm_set_ps1(explosion->x);
	__m128 mmExplosionY = _mm_set_ps1(explosion->y);
	__m128 mmExplosionR1 = _mm_set_ps1(explosion->r1);
	__m128 mmExplosionR2 = _mm_set_ps1(explosion->r2);
	__m128 mmExplosionDmg = _mm_set_ps1(explosion->damage);
	__m128 mmOne = _mm_set_ps1(1.0);
	__m128 mmZero = _mm_setzero_ps();

	for (int i = 0; i < numEntities; i += 4)
	{
		// Calculate distantes from entities to explosion
		__m128 mmDxs = _mm_sub_ps(mmExplosionX, _mm_set_ps(entities[i + 0].x, entities[i + 1].x, entities[i + 2].x, entities[i + 3].x));
		__m128 mmDys = _mm_sub_ps(mmExplosionX, _mm_set_ps(entities[i + 0].y, entities[i + 1].y, entities[i + 2].y, entities[i + 3].y));
		__m128 mmDistances = _mm_sqrt_ps(_mm_add_ps(_mm_mul_ps(mmDxs, mmDxs), _mm_mul_ps(mmDys, mmDys)));

		// Calculate damage factor
		__m128 dmgFactors = _mm_sub_ps(mmOne, _mm_div_ps(_mm_sub_ps(mmDistances, mmExplosionR1), _mm_sub_ps(mmExplosionR2, mmExplosionR1)));
		__m128 clampedFactor = _mm_min_ps(mmOne, _mm_max_ps(mmZero, dmgFactors));

		// Calculate new health for each entity
		__m128 mmHealths = _mm_sub_ps(_mm_set_ps(entities[i + 0].health, entities[i + 1].health, entities[i + 2].health, entities[i + 3].health), _mm_mul_ps(mmExplosionDmg, clampedFactor));

		// Apply new healths
		float *healths = (float *)&mmHealths;
		entities[i + 0].health = healths[3];
		entities[i + 1].health = healths[2];
		entities[i + 2].health = healths[1];
		entities[i + 3].health = healths[0];
	}
}`;