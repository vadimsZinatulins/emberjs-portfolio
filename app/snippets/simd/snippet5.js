export default
    `struct Explosion
{
    float x;
    float y;

    float r1;
    float r2;

    float damange;
};

struct Entity
{
    float x;
    float y;

    float health;
};

void explosionUpdate(Explosion *explosion, Entity *entities, int numEntities)
{
	for (int i = 0; i < numEntities; i++)
	{
		// Calculate the distante from entity to explosion
		float dx = explosion->x - entities[i].x;
		float dy = explosion->y - entities[i].y;
		float distance = sqrt(dx * dx + dy * dy);

		if (distance < explosion->r1)		// Check if entity is inside inner radius
		{
			// Apply total damage to entity
			entities[i].health -= explosion->damange;
		}
		else if (distance < explosion->r2)  // Check if entity is inside outter radius
		{
			// Calculate damage factor
			float dmgFactor = 1 - ((distance - explosion->r1) / (explosion->r2 - explosion->r1));
			// Apply partial damage to entity
			entities[i].health -= explosion->damange * dmgFactor;
		}
	}
}`;
