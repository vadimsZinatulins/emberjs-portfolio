export default
    `void explosionUpdateBranchless(Explosion *explosion, Entity *entities, int numEntities)
{
    for (int i = 0; i < numEntities; i++)
    {
        // Calculate the distante from entity to explosion
        float dx = explosion->x - entities[i].x;
        float dy = explosion->y - entities[i].y;
        float distance = std::sqrt(dx * dx + dy * dy);

        // Calculate damage factor
		float dmgFactor = 1 - ((distance - explosion->r1) / (explosion->r2 - explosion->r1));
		float clampedFactor = std::min(1.0f, std::max(0.0f, dmgFactor));

        // Apply damage to entity
        entities[i].health -= explosion->damage * clampedFactor;
    }
}`;
