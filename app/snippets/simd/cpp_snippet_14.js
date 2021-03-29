export default
    `void explosionUpdate(Explosion *explosion, EntityBuffer *entityBuffer, int numEntities)
{
    __m128 mmExplosionX = _mm_set_ps1(explosion->m_x);
    __m128 mmExplosionY = _mm_set_ps1(explosion->m_y);
    __m128 mmExplosionR1 = _mm_set_ps1(explosion->m_r1);
    __m128 mmExplosionR2 = _mm_set_ps1(explosion->m_r2);
    __m128 mmExplosionDmg = _mm_set_ps1(explosion->m_damage);
    __m128 mmOne = _mm_set_ps1(1.0);
    __m128 mmZero = _mm_setzero_ps();

    __m128 *entitiesX = (__m128 *)entityBuffer->m_xs;
    __m128 *entitiesY = (__m128 *)entityBuffer->m_ys;
    __m128 *entitiesHealth = (__m128 *)entityBuffer->m_healths;

    const int numIterations = numEntities / 4;

    for (int i = 0; i < numIterations; i++)
    {
        // Calculate distantes from entities to explosion
        __m128 mmDxs = _mm_sub_ps(mmExplosionX, entitiesX[i]);
        __m128 mmDys = _mm_sub_ps(mmExplosionX, entitiesY[i]);
        __m128 mmDistances = _mm_sqrt_ps(_mm_add_ps(_mm_mul_ps(mmDxs, mmDxs), _mm_mul_ps(mmDys, mmDys)));

        // Calculate damage factor
        __m128 dmgFactors = _mm_sub_ps(mmOne, _mm_div_ps(_mm_sub_ps(mmDistances, mmExplosionR1), _mm_sub_ps(mmExplosionR2, mmExplosionR1)));
        __m128 clampedFactor = _mm_min_ps(mmOne, _mm_max_ps(mmZero, dmgFactors));

        // Apply partial damage to entities
        _mm_store_ps((float *)(entitiesHealth + i), _mm_sub_ps(entitiesHealth[i], _mm_mul_ps(mmExplosionDmg, clampedFactor)));
    }
}`;