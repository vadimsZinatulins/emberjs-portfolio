export default
    `class Explosion
{
public:
    Explosion();
    ~Explosion();

private:
    // This is here so that this function can access private attributes of this class
    friend void explosionUpdate(Explosion *explosion, Entity *entities, int numEntities);

    // Explosion's position
    float m_x;
    float m_y;

    // Explosion's radiuses
    float m_r1;
    float m_r2;

    // Explosion's damage
    float m_damage;
};

void explosionUpdate(Explosion *explosion, Entity *entities, int numEntities)
{
	for (int i = 0; i < numEntities; i++)
	{
		// Calculate the distante from entity to explosion
		float dx = explosion->m_x - entities[i].m_x;
		float dy = explosion->m_y - entities[i].m_y;
		float distance = std::sqrt(dx * dx + dy * dy);


		if (distance < explosion->m_r1)		// Check if entity is inside inner radius
		{
			// Apply total damage to entity
			entities[i].m_health -= explosion->m_damage;
		}
		else if (distance < explosion->m_r2)  // Check if entity is inside outter radius
		{
			// Calculate damage factor
			float dmgFactor = 1 - ((distance - explosion->m_r1) / (explosion->m_r2 - explosion->m_r1));
			// Apply partial damage to entity
			entities[i].m_health -= explosion->m_damage * dmgFactor;
		}
	}
}`;