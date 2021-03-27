export default
    `void explosionUpdate(Explosion *explosion, Entity *entities, int numEntities)
{
    for (int i = 0; i < numEntities; i++)
    {
        // Calculate the distante from entity to explosion
        float dx = explosion->m_x - entities[i].m_x;
        float dy = explosion->m_y - entities[i].m_y;
        float distance = std::sqrt(dx * dx + dy * dy);

        // Calculate damage factor
        float dmgFactor = 1 - ((distance - explosion->m_r1) / (explosion->m_r2 - explosion->m_r1));
        float clampedFactor = std::min(1.0f, std::max(0.0f, dmgFactor));

        // Apply damage to entity
        entities[i].m_health -= explosion->m_damage * clampedFactor;
    }
}`;